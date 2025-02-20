export const typeDefs = `#graphql
    type Game{
        id: ID!
        title: String!
        description: String!
        price: Float!
        image: String!
        platform: [String!]!
        createdAt: String!
        updatedAt: String!
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!
        gameId: ID!
        game: Game!
        createdAt: String!
        updatedAt: String!
    }
    type Author{
        id: ID!
        name: String!
        reviews: [Review!]!
        verfied: Boolean!
    }
    type Query{
        games: [Game!]!
        game(id: ID!): Game!
        reviews: [Review!]!
        review(id: ID!): Review!
        authors: [Author!]!
        author(id: ID!): Author!
    }
`;
