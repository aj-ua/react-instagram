import * as types from './types'
// import { store } from '../store'

export const getData = () => async dispatch => {
    let posts = [],
        comments = [],
        users = [],
        likes = []

    if (localStorage.getItem('instagram')) {
        const data = await JSON.parse(localStorage.getItem('instagram'))
        await ({ posts, comments, users, likes } = data)

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

        localStorage.setItem('instagram', JSON.stringify({ posts, comments, users, likes }))
    }

    dispatch({
        type: types.GET_DATA,
        payload: {
            posts: posts,
            comments: comments,
            users: users,
            likes: likes
        }
    })
}

export const handleLikes = (likes) => {
    const data = JSON.parse(localStorage.getItem('instagram'))
    data.likes = likes
    localStorage.setItem('instagram', JSON.stringify(data))
    return {
        type: types.HANDLE_LIKES,
        payload: likes
    }
}

export const togglePostModal = (post) => {
    console.log('action TOGGLE_POST_MODAL');
    return {
        type: types.TOGGLE_POST_MODAL,
        payload: post
    }
}

export const addComment = (comment) => {
    console.log('action ADD_COMMENT');
    const data = JSON.parse(localStorage.getItem('instagram'))
    data.comments.push(comment)
    localStorage.setItem('instagram', JSON.stringify(data))
    return {
        type: types.ADD_COMMENT,
        payload: data.comments
    }
}

export const handleFollow = (user) => {
    console.log('action HANDLE_FOLLOW');
    return {
        type: types.HANDLE_FOLLOW,
        payload: user
    }
}
