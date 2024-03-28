//packages
import { createAsyncThunk } from "@reduxjs/toolkit";

//apis
import {
  updateCompanyDetails,
  updateCountriesList,
  updateInfoLoaded,
  updateToken,
} from ".";
import apis from "./apis";

//interceptors
import { request } from "../../services/interceptors";

//getUserToken api
export const getUserToken = createAsyncThunk(
  "getUserToken",
  async (body, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      const { data } = await request.post(apis.userToken(), body);
      dispatch(updateToken(data?.access));
      dispatch(countriesList());
    } catch (error) {
      alert(error);
    }
  }
);

//search Address api
export const searchAddress = createAsyncThunk(
  "searchAddress",
  async (body, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      const { data } = await request.get(apis.searchAddress(body), body);
      console.log(data[0]);
      dispatch(updateCompanyDetails(data[0]));
      dispatch(updateInfoLoaded(true));
    } catch (error) {
      alert(error);
    }
  }
);

//countries list api
export const countriesList = createAsyncThunk(
  "countriesList",
  async (body, thunkAPI) => {
    try {
      const { dispatch } = thunkAPI;
      const { data } = await request.get(apis.countriesList(), body);
      dispatch(updateCountriesList(data));
    } catch (error) {
      alert(error);
    }
  }
);
