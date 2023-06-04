import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/postsReducer'
import modalReducer from './reducers/modalReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
    reducer: {
        data: postsReducer,
        modal: modalReducer,
        user: userReducer,
    },
});
