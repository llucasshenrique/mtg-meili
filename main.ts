import { load } from "https://deno.land/std@0.198.0/dotenv/mod.ts";
import { existsSync } from "https://deno.land/std@0.217.0/fs/exists.ts";
import { downloadFile } from "./download-file.ts";
import { MeilisearchClient } from "./meilisearch-client.ts";
import { processMTGJsonFile } from "./process-mtg-json-file.ts";
import { xzDecompress } from "./xz-decompress.ts";

const compressedFile = "data/AllPrintings.json.xz";
const jsonFile = "data/AllPrintings.json";
const downloadUrl = "https://mtgjson.com/api/v5/AllPrintings.json.xz";

if (!existsSync(compressedFile)) downloadFile(downloadUrl, compressedFile);
if (!existsSync(jsonFile)) xzDecompress(compressedFile);

const env = await load();

if (!("MEILI_HOST" in env && "MEILI_MASTER_KEY" in env)) {
  throw new Error("check environment file");
}

const client = MeilisearchClient.getInstance({
  host: env["MEILI_HOST"],
  apiKey: env["MEILI_MASTER_KEY"],
}).client;

const health = await client.health();
console.log(health);

const indexes = await client.getIndexes();
console.log(indexes);

await processMTGJsonFile(jsonFile);
