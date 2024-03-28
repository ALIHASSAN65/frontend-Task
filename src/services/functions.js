import store from "../store";

const findCountryCode = (cname) => {
  const { countries } = store.getState().userState;
  // Find the country code
  const country = countries.find((item) => item.name === cname);
  return country?.code || cname;
};

export { findCountryCode };
