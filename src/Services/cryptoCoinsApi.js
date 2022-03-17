import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const cryptoApi = createApi({
    reducerPath: "crypto",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (limit) => createRequest(`/coins?limit=${limit}`),
        }),

        getCrypto: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        })
    })
})

const {
    useGetCryptosQuery,
    useGetCryptoQuery,
} = cryptoApi;

export {
    cryptoApi,
    useGetCryptosQuery,
    useGetCryptoQuery,
}