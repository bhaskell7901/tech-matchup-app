import { gql } from '@apollo/client';

export const ADD_MATCHUP = gql `
mutation addMatchup($tech1: String!, $tech2: String!) {
    addMatchup(tech1: $tech1, tech2: $tech2){
        tech1
        tech2
    }
}
`;

export const ADD_VOTE = gql `
mutation addVote($matchupID: Int!, $techNum: Int!) {
    addVote(matchupID: $matchupID, techNum: $techNum){
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
}
`;