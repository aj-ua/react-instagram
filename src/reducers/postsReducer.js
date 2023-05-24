import { GET_DATA } from '../actions/types'

const initialState = {
    posts: [],
    comments: [],
    users: []
}

export default function postsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            console.log('reducer GET_DATA');
            return {
                ...state,
                posts: action.payload.posts,
                comments: action.payload.cart,
                users: action.payload.users
            }

        default:
            return state
    }
}
