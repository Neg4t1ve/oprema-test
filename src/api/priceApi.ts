// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { IToken } from "../types/IToken";

// Define a service using a base URL and expected endpoints
export const priceApi = createApi({
  reducerPath: "priceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rest.coinapi.io/v1/",
    prepareHeaders: (headers) => {
      headers.set("X-CoinAPI-Key", "C2441569-D592-4236-84FB-49B1BF253020");
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTokens: builder.query<IToken[], string>({
      query: (token: string = `BTC;`) => ({
        url: `/assets`,
        params: {
          filter_asset_id: token,
        },
      }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTokensQuery,
  util: { getRunningOperationPromises },
} = priceApi;
// export endpoints for use in SSR
export const { getTokens } = priceApi.endpoints;
