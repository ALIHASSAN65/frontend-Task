//libraries
import axios from "axios";
import request from "axios";

//store
import store from "../store";
import { apiVersion, baseURL } from "./constants";
import { updateLoading } from "../store/User";

//exports
export { request };
axios.interceptors.request.use(
  async (config) => {
    const { token } = store.getState().userState;
    config.url = baseURL() + config.url;
    config.headers.Version = apiVersion();
    if (token && config.url.includes(baseURL())) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    store.dispatch(updateLoading(true));

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    // Return the modified or unmodified response
    store.dispatch(updateLoading(false));
    return response;
  },
  (error) => {
    if (error) {
      store.dispatch(updateLoading(false));
      return Promise.reject(error);
    }
  }
);
