import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ApiResponse<T> {
  data: T;
}

export const getUsers = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await httpClient.get<ApiResponse<T>>(endpoint);

    return response.data;
  } catch (error) {
    console.error("Error en la petición GET", error);
    throw error;
  }
};
