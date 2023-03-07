const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Tech {
    _id : ID
    name : String
}

type Matchup {
    _id :ID
    tech1: String
    tech2: String
    tech1_votes:  Int
    tech2_votes: Int

}

type Query {
    getAllTech : [Tech]
    getAllMatchups : [Matchup]
    getMatchup(matchupId : ID!) : Matchup
}

type Mutation {
    createMatchup(tech1: String!,
        tech2: String!):  Matchup
    
    createVote(matchupId : ID!) : Matchup 
}
`
module.exports = typeDefs;


// type Auth {
//     token: ID!
//     user: User
//   }
