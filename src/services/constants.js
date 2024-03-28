//constants
const apiVersion = () => "CIBT";
const baseURL = () => "https://api.development.democozm.com";
const email = () => "sandbox@thecozm.com";
const password = () => "WelcomeCozm123!@#";
const placeHolders = {
  name: { title: "Name", placeholder: "Enter company name" },
  location: { title: "Location", placeholder: "Enter location" },
  streetName: { title: "Street Name", placeholder: "Enter street name" },
  streetNumber: { title: "Street Number", placeholder: "Enter street number" },
  postCode: { title: "Post Code", placeholder: "Enter post code" },
  city: { title: "Town / City", placeholder: "Enter post code" },
  country: { title: "Country", placeholder: "Select Country" },
};
const Heading = "Destination Company Address";
const buttonTitles = {
  search: "Search",
  add: "Add More",
  close: "Close",
};

export {
  apiVersion,
  baseURL,
  email,
  password,
  placeHolders,
  Heading,
  buttonTitles,
};
