import { games } from "./_db.ts";

export const resolvers = {
  Query: {
    games: () => games,
  },
};
