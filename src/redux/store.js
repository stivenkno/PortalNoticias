import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice"; // Asegúrate de que la importación sea correcta

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Usa el reducer del apiSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Añadir el middleware de RTK Query
});
