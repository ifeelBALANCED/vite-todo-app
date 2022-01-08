import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL as baseUrl } from "@/app/config";
import { Todos } from "@/app/config/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: builder => ({
    getAllTodos: builder.query<Todos, void>({
      query: () => `/todos`,
      providesTags: ["Todos"],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAllTodosQuery, useLazyGetAllTodosQuery } = todosApi;
