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


const API = createAPI(process.env.API_URL);

export { API };