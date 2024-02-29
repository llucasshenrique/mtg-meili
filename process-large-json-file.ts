import { readableStreamFromReader } from "https://deno.land/std@0.183.0/streams/mod.ts";
import { JsonStrum } from "npm:@xtao-org/jsonstrum@0.3.0";
import { MeilisearchClient } from "./meilisearch-client.ts";
import { Set as DataCardSet } from "./mtg/set.type.ts";

export async function processLargeJsonFile(filePath: string) {
  const meilisearch = MeilisearchClient.getInstance().client;

  if (!(await meilisearch.getIndexes()).results.some((s) => s.uid === "mtg")) {
    await meilisearch.createIndex("mtg");
  }

  const mtgIndex = await meilisearch.index("mtg");
  //1. Read the file
  const file = await Deno.open(filePath, { read: true });

  //2. Stream file content
  const readableStream = readableStreamFromReader(file);

  //3. Decode streamed chunks to text.
  const decodedStream = readableStream.pipeThrough(new TextDecoderStream());

  //4. Process decoded chunks.
  //   In my case I use JsonStrum to make my life a bit easier
  const objectHandler = async (set: DataCardSet) => {
    //Do something with the objects that are ready.
    console.log(`Indexing set: ${set.name} with ${set.cards.length + 1} cards`);
    await mtgIndex.updateDocumentsInBatches(set.cards, 100, { primaryKey: "uuid" })
  };

  const arrayHandler = (array: unknown[]) => {
    //Do something with the arrays that are ready.
    // array.forEach((item) => console.log(item));
  };

  //Set up JsonStrum and add your object and array handlers
  const jsonStrum = JsonStrum({
    object: objectHandler,
    array: arrayHandler,
    level: 2,
  });

  for await (const chunk of decodedStream) {
    // console.log({ chunk: JSON.stringify(chunk) });
    jsonStrum.chunk(chunk);
  }

  //End JsonStrum when done.
  jsonStrum.end();
}
