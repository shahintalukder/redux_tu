import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice.js";
import postsReducer from "../features/posts/postsSlice.js";

const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts: postsReducer
    }
});

export default store;
