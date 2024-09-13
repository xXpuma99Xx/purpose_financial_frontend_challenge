import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ApiResponse<T> {
  data: T;
}

export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await httpClient.get<ApiResponse<T>>(endpoint);

    return response.data;
  } catch (error: any) {
    console.error("Error en la petición GET", error);
    throw error.response.data;
  }
};
