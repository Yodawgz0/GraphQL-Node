import { games, reviews, authors } from "./_db.ts";

export const resolvers = {
  Query: {
    games: () => games,
    reviews: () => reviews,
    authors: () => authors,
    review: (review: { id: number }) =>
      reviews.find((review) => review.id === review.id),
    game: (game: { id: number }) => games.find((game) => game.id === game.id),
    author: (author: { id: string }) =>
      authors.find((author) => author.id === author.id),
  },
  Review: {
    game: (review: { gameId: number }) =>
      games.find((game) => game.id === review.gameId),
  },
};
