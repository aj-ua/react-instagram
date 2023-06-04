import { HANDLE_FOLLOW } from '../actions/types'

const initialState = {
    isLoggedIn: true,
    currentUser: {
        "id": 1,
        "name": "Lorem Ipsum",
        "username": "Lorem",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442",
        "photo": "https://picsum.photos/id/29/200",
        "following": [3, 7]
    }
}

export default function userReducers(state = initialState, action) {
    switch (action.type) {
        case HANDLE_FOLLOW:
            console.log('reducer HANDLE_FOLLOW');
            return {
                ...state,

                currentUser: action.payload
            }

        default:
            return state
    }
}
