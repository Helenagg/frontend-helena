// This folder 

import axios from "axios";
import { BASE_PATH } from "../resources/ApiUrls";
import { StorageManager } from "./index";

const fetchClient = () => {
  const storageManager = new StorageManager();
  const defaultOptions = {
    baseURL: BASE_PATH,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // CREATE INSTANCE
  let instance = axios.create(defaultOptions);

  // Interceptor to add the authentication token to requests.
// Temporarily commented out as authentication is not required in the current version of the application.
// Uncomment and use when token-based authentication is implemented.
/*

  instance.interceptors.request.use((config) => {
    const token = storageManager.getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
*/
  return instance;
};

export default fetchClient();