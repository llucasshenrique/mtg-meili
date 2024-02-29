export type BoosterConfig = {
  boosters: Record<string, BoosterPack[]>;
  boostersTotalWeight: number;
  sheets: Record<string, BoosterSheet>;
};

export type BoosterPack = {
  contents: Partial<Record<string, number>>;
  weight: number;
};

export type BoosterSheet = {
  allowDuplicates?: boolean;
  balanceColors?: boolean;
  cards: Record<string, number>;
  foil: boolean;
  fixed?: boolean;
  totalWeight: number;
};
