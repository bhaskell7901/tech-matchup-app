import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql `
mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2){
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