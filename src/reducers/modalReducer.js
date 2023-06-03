import { TOGGLE_POST_MODAL } from '../actions/types'

const initialState = {
    isPostModalOpen: false,
    currentPost: {}
}

export default function modalReducers(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_POST_MODAL:
            console.log('reducer TOGGLE_POST_MODAL');
            return {
                ...state,
                isPostModalOpen: !state.isPostModalOpen,
                currentPost: action.payload
            }

        default:
            return state
    }
}
