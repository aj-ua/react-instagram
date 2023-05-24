import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/postsReducer'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});
