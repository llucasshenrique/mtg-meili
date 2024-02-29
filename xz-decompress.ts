export async function xzDecompress(source: string) {
  console.log(`Decompressing ${source}`);
  const command = new Deno.Command("unxz", { args: ["-k", "-f", source] });
  await command.output();
}
