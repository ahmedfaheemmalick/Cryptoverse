import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const newsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: newsApiHeaders });

const newsApi = createApi({
    reducerPath: "news",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (count) => createRequest(`/news?count=${count}&safeSearch=Off&textFormat=Raw`),
        })
    })
})

const {
    useGetNewsQuery,
} = newsApi;

export {
    newsApi,
    useGetNewsQuery
}