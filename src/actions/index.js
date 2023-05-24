import * as types from './types'
import { store } from '../store'

export const getData = () => async dispatch => {
    let modals = []

    modals = await fetch('modals.json' // from /public folder
        , {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then((response) => response.json())

    dispatch({
        type: types.GET_DATA,
        payload: {
            modals: modals,
        }
    })
}

export const handleModal = (modal, action) => {
    console.log('action handleModal');
    const modals = store.getState().product.modals
    const thisModal = modals.filter(item => item.id === modal)
    return {
        type: types.HANDLE_MODAL,
        payload: {
            ...thisModal[0],
            action: action
        }
    }
}

export const toggleModal = () => {
    console.log('action TOGGLE_MODAL');
    return {
        type: types.TOGGLE_MODAL,
    }
}
