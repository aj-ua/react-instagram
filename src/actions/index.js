import * as types from './types'
// import { store } from '../store'

export const getData = () => async dispatch => {
    let posts = [],
        comments = [],
        users = []

    if (localStorage.getItem('instagram')) {
        const data = await JSON.parse(localStorage.getItem('instagram'))
        await ({ posts, comments, users } = data)

    } else {
        posts = await fetch('posts.json' // from /public folder
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => response.json())

        comments = await fetch('comments.json' // from /public folder
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => response.json())

        users = await fetch('users.json' // from /public folder
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((response) => response.json())

        localStorage.setItem('instagram', JSON.stringify({ posts, comments, users }))
    }

    dispatch({
        type: types.GET_DATA,
        payload: {
            posts: posts,
            comments: comments,
            users: users
        }
    })
}

