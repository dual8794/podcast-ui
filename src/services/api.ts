import axios, { AxiosInstance } from 'axios';


const createAPI = (
    baseURL: string,
  ): AxiosInstance => {
    const API = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return API;
  };


const API = createAPI("thmanyah-backend-o96b:10000");

export { API };