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

// export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
//   try {
//     const response = await httpClient.post<ApiResponse<T>>(endpoint, data);
//     return response.data.data;
//   } catch (error) {
//     console.error("Error en la petición POST", error);
//     throw error;
//   }
// };
