export type ReviewInput = {
  rating: number;
  content: string;
  gameId: string;
  authorId: string;
};

export type AuthorInput = {
  name: string;
  verfied: boolean;
};

export type GameInput = {
  title: string;
  description: string;
  price: number;
  image: string;
  platform: string[];
};
