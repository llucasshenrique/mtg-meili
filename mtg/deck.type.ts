import { CardDeck, CardSetDeck } from "./card.type.ts";

export type Deck = {
  code: string;
  commander?: CardDeck[];
  mainBoard: CardDeck[];
  name: string;
  releaseDate: string | null;
  sideBoard: CardDeck[];
  type: string;
};

export type DeckList = {
  code: string;
  fileName: string;
  name: string;
  releaseDate: string | null;
  type: string;
};

export type DeckSet = {
  code: string;
  commander?: CardSetDeck[];
  mainBoard: CardSetDeck[];
  name: string;
  releaseDate: string | null;
  sealedProductUuids: string[] | null;
  sideBoard: CardSetDeck[];
  type: string;
};
