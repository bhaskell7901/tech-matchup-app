const { Matchup, Tech } = require("../models");

const resolvers = {
    Query: {
        getAllTech: async () => {
            return Tech.find();
        },

        getAllMatchups: async () => {
            return Matchup.find();
        }
    },

    Mutation: {
        createMatchup: (parent, { tech1, tech2 }) => {
            return Matchup.create({ tech1, tech2 }, { new: true });
        },

        createVote: (parent, { matchupID, techNum }) => {
            return Matchup.findOneAndUpdate(
                { _id: matchupID },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            );
        }
    }
};

module.exports = resolvers;