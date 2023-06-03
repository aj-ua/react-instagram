import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { handleLikes } from '../actions'

const Post = ({ post, user, postComments, likes }) => {

    const { id, userId, title, url } = post
    const { username, photo } = user

    const [addedLikes, setAddedLikes] = useState(false)

    useEffect(() => {
        if (likes && likes.includes(id)) {
            setAddedLikes(true)
        }
    }, [likes, id])


    const updateLikes = (e) => {
        e.preventDefault()
        setAddedLikes(prevState => !prevState)

        if (!addedLikes) {

            if (likes.length) {
                if (!likes.includes(id)) {
                    likes = [...likes, id];
                }
            } else {
                likes = [...likes, id]
            }

        } else {

            if (likes.length) {
                likes = likes.filter(function (item) {
                    return item !== id
                })
            }

        }

        handleLikes(likes)
    }

    return (
        <article className="card">
            <div className="card-header bg-white border-bottom-none d-flex align-items-center gap-2">
                <img className='rounded-5' src={photo} alt={username} width='24' height='24   ' />
                <strong>{username}</strong>
            </div>
            <img className="card-img" src={url} alt={title} />
            <div className="card-body">

                <p className="d-flex gap-4 post-actions">
                    <a href="/#" className='text-dark fs-4' onClick={updateLikes}>
                        {addedLikes ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                    </a>
                    <a href="\#" className="text-dark fs-4"><i className="bi bi-chat-left"></i></a>
                </p>

                {postComments.length > 0 && (
                    <>
                        <p><strong>{postComments[0].name.length > 15 ? postComments[0].name.substring(0, 15) + '...' : postComments[0].name}</strong> {postComments[0].body.length > 50 ? postComments[0].body.substring(0, 50) + '...' : postComments[0].body}</p>
                        <p className='text-secondary post-show-comments mb-2'>View all {postComments.length} comments</p>
                    </>
                )}
                <input type="text" className="form-control" placeholder="Add a comment..." />
            </div>
        </article>
    )
}

const mapStateToProps = (state) => ({
    likes: state.data.likes,
})

export default connect(mapStateToProps, { handleLikes })(Post)
