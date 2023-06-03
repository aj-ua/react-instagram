import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/postsReducer'
import modalReducer from './reducers/modalReducer'

export const store = configureStore({
    reducer: {
        data: postsReducer,
        modal: modalReducer,
    },
});
