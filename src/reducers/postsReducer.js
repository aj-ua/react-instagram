import { GET_DATA, HANDLE_LIKES } from '../actions/types'

const initialState = {
    posts: [],
    comments: [],
    users: [],
    likes: [],
}

export default function postsReducers(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            console.log('reducer GET_DATA');
            return {
                ...state,
                posts: action.payload.posts,
                comments: action.payload.cart,
                users: action.payload.users,
                likes: action.payload.likes,
            }

        case HANDLE_LIKES:
            console.log('reducer HANDLE_LIKES');
            return {
                ...state,
                likes: action.payload
            }


        default:
            return state
    }
}
