import { configureStore } from "@reduxjs/toolkit"
import { cryptoApi } from "../Services/cryptoCoinsApi"
import { newsApi } from "../Services/cryptoNewsApi"

const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
})

export default store