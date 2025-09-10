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


const API = createAPI("http://localhost:3000");

export { API };