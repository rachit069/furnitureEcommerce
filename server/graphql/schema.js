import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLID } from "graphql";
import CountryType from "./types/CountryType.js";
import Country from "../models/country.js";

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    countries: {
      type: new GraphQLList(CountryType),
      resolve() {
        return Country.findAll();
      }
    },
    country: {
      type: CountryType,
      args: { id: { type: GraphQLID } },
      resolve(_, args) {
        return Country.findByPk(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCountry: {
      type: CountryType,
      args: {
        name: { type: GraphQLString },
        code: { type: GraphQLString },
      },
      resolve(_, args) {
        return Country.create({
          name: args.name,
          code: args.code
        });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
