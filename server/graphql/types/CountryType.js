import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

const CountryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
  }),
});

export default CountryType;
