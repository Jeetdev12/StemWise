import userReducer from "./UserSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice";
import { configureStore } from '@reduxjs/toolkit';


const appStore = configureStore({

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,  // Disable serializable check
        }),

    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore;