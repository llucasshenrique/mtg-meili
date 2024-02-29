import { BoosterConfig } from "./booster.type.ts";
import { CardSet, CardToken } from "./card.type.ts";
import { DeckSet } from "./deck.type.ts";
import { SealedProduct } from "./sealed-products.type.ts";

export type Set = {
  baseSetSize: number;
  block?: string;
  booster?: Record<string, BoosterConfig>;
  cards: CardSet[];
  cardsphereSetId?: number;
  code: string;
  codeV3?: string;
  decks?: DeckSet[];
  isForeignOnly?: boolean;
  isFoilOnly: boolean;
  isNonFoilOnly?: boolean;
  isOnlineOnly: boolean;
  isPaperOnly?: boolean;
  isPartialPreview?: boolean;
  keyruneCode: string;
  languages?: string[];
  mcmId?: number;
  mcmIdExtras?: number;
  mcmName?: string;
  mtgoCode?: string;
  name: string;
  parentCode?: string;
  releaseDate: string;
  sealedProduct?: SealedProduct[];
  tcgplayerGroupId?: number;
  tokens: CardToken[];
  tokenSetCode?: string;
  totalSetSize: number;
  translations: Translations;
  type: string;
};

export type SetList = {
  baseSetSize: number;
  block?: string;
  code: string;
  codeV3?: string;
  isForeignOnly?: boolean;
  isFoilOnly: boolean;
  isNonFoilOnly?: boolean;
  isOnlineOnly: boolean;
  isPaperOnly?: boolean;
  isPartialPreview?: boolean;
  keyruneCode: string;
  mcmId?: number;
  mcmIdExtras?: number;
  mcmName?: string;
  mtgoCode?: string;
  name: string;
  parentCode?: string;
  releaseDate: string;
  sealedProduct: SealedProduct[];
  tcgplayerGroupId?: number;
  totalSetSize: number;
  translations: Translations;
  type: string;
};

export type Translations = {
  "Ancient Greek"?: string;
  Arabic?: string;
  "Chinese Simplified"?: string;
  "Chinese Traditional"?: string;
  French?: string;
  German?: string;
  Hebrew?: string;
  Italian?: string;
  Japanese?: string;
  Korean?: string;
  Latin?: string;
  Phyrexian?: string;
  "Portuguese (Brazil)"?: string;
  Russian?: string;
  Sanskrit?: string;
  Spanish?: string;
};
