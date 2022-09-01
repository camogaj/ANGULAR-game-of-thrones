export interface Relative {
  _id: string;
  name: string;
  slug: string;
  mentions: number;
}
export interface CharacterData {
  titles: string[];
  origin: string[];
  siblings: string[];
  spouse: string[];
  lovers: [];
  plod: number;
  longevity: [];
  plodB: number;
  plodC: number;
  longevityB: number[];
  longevityC: number[];
  culture: string[];
  religion: string[];
  allegiances: string[];
  seasons: string[];
  appearances: string[];
  _id: string;
  name: string;
  slug: string;
  image: string;
  gender: string;
  alive: boolean;
  birth: number;
  mother: string;
  father: string;
  house: string;
  first_seen: string;
  actor: string;
  related: Relative[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  longevityStartB: number;
  pagerank: {
    title: string;
    rank: number;
  };
  age: {
    name: string;
    age: number;
  };
  id: string;
}
