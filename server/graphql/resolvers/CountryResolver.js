// countryResolver.js
import Country from "../../models/country.js"

const countryResolver = {
  countries: async () => {
    return await Country.find();
  },
  country: async ({ id }) => {
    return await Country.findById(id);
  },
};

export default countryResolver;
