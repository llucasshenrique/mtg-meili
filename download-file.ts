import { ensureFile } from "https://deno.land/std@0.217.0/fs/ensure_file.ts";

export async function downloadFile(source: string, destinationPath: string) {
  console.log(`Downloading ${source} to ${destinationPath}`);

  if (!(source.startsWith("http://") || source.startsWith("https://"))) {
    throw new TypeError("URL must start with be http:// or https://");
  }
  const resp = await fetch(source);
  if (!resp.ok) {
    throw new Deno.errors.BadResource(
      `Request failed with status ${resp.status}`
    );
  } else if (!resp.body) {
    throw new Deno.errors.UnexpectedEof(
      `The download url ${source} doesn't contain a file to download`
    );
  } else if (resp.status === 404) {
    throw new Deno.errors.NotFound(
      `The requested url "${source}" could not be found`
    );
  }

  await ensureFile(destinationPath);
  const file = await Deno.open(destinationPath, {
    truncate: true,
    write: true,
  });
  resp.body.pipeTo(file.writable);
}
