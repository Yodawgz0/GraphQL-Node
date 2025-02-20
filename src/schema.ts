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
        reviews: [Review!]
    }
    type Review{
        id: ID!
        rating: Int!
        content: String!
        gameId: ID!
        authorId: ID!
        game: Game!
        author: Author!
        createdAt: String!
        updatedAt: String!
    }
    type Author{
        id: ID!
        name: String!
        reviews: [Review!]
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
    type Mutation{
        addReview(review: ReviewInput!): Review!
        addGame(game: GameInput!): Game!
        addAuthor(author: AuthorInput!): Author!
        updateGame(id: ID!, game: UpdateGameInput!): Game!
        updateReview(id: ID!, review: UpdateReviewInput!): Review!
        updateAuthor(id: ID!, author: UpdateAuthorInput!): Author!
        deleteGame(id: ID!): Game!
        deleteReview(id: ID!): Review!
        deleteAuthor(id: ID!): Author!
    }
    input GameInput{
        title: String!
        description: String!
        price: Float!
        image: String!
        platform: [String!]!
    }
    input ReviewInput{
        rating: Int!
        content: String!
    }
    input AuthorInput{
        name: String!
        verfied: Boolean!
    }
    input UpdateGameInput{
        title: String
        description: String
        price: Float
        image: String
        platform: [String!]
    }
    input UpdateReviewInput{
        rating: Int
        content: String
    }
    input UpdateAuthorInput{
        name: String
    }
`;
