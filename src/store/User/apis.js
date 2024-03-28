export default {
  userToken: () => `/api/users/token/`,
  searchAddress: (body) =>
    `/api/personas/address-search?country=${body.country}&name=${body.name}`,
  countriesList: () => "/api/locations/countries/",
};
