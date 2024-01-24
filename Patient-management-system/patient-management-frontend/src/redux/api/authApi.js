import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "user/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    getPatient: builder.query({
      query: () => ({
        url: "nurses",
        method: "GET",
      }),
    }),
    deletePatient: builder.mutation({
      query: ({ id, token }) => ({
        url: `nurses/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const {
  useLoginMutation,
  useSignupMutation,
  useGetPatientQuery,
  useDeletePatientMutation,
} = authApi;
