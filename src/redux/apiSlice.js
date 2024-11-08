import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "3665717782334d03a7d7d8d0a7824231";
const API_URL = "https://newsapi.org/v2/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    headers: { "X-Api-Key": API_KEY }, // Cambié el nombre del header aquí a "X-Api-Key"
  }),
  endpoints: (builder) => ({
    getPost: builder.query({
      query: (params) => ({
        url: "top-headlines",
        params, // Los parámetros vienen de la llamada al hook
      }),
    }),
    getCategories: builder.query({
      query: (category) => ({
        url: `top-headlines?category=${category}`,
      }),
    }),
  }),
});

export const { useGetPostQuery, useGetCategoriesQuery } = apiSlice;
