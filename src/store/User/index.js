// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  token: null,
  countries: [],
  infoLoaded: false,
  companyDetails: {
    name: "",
    street_name: "",
    house_number: "",
    postal_code: "",
    city: "",
    country: "",
    website: "",
    phone: "",
  },
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateCountriesList: (state, action) => {
      state.countries = action.payload;
    },
    updateCompanyDetails: (state, action) => {
      state.companyDetails = action.payload;
    },
    clearCompanyDetails: (state, action) => {
      state.companyDetails = initialState.companyDetails;
      state.infoLoaded = false;
    },
    updateInfoLoaded: (state, action) => {
      state.infoLoaded = action.payload;
    },
  },
});

export const {
  updateLoading,
  updateCompanyDetails,
  updateToken,
  updateCountriesList,
  clearCompanyDetails,
  updateInfoLoaded,
} = userSlice.actions;
export default userSlice.reducer;
