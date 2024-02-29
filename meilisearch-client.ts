import { MeiliSearch } from "https://esm.sh/meilisearch@0.37.0";


type MeilisearchClientOptions = {
  host: string;
  apiKey: string;
};

export class MeilisearchClient {
  private static meilisearchClientInstance: MeilisearchClient | undefined;
  private constructor(public readonly client: MeiliSearch) {}
  static getInstance(options?: MeilisearchClientOptions): MeilisearchClient {
    if (!this.meilisearchClientInstance) {
      if (!options) throw new Error("Pass options");
      this.meilisearchClientInstance = new MeilisearchClient(
        new MeiliSearch(options),
      );
    }
    return this.meilisearchClientInstance;
  }
}
