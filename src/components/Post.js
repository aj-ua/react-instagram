import React, { useEffect, useState } from 'react'

const Post = props => {
    const { id, userId, title, url, user, likes } = props.post;

    const [addedLikes, setAddedLikes] = useState(false)

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

        // handleLikes(likes)
    }

    return (
        <article className="card">
            <img className="card-img-top" src={url} alt={title} />
            <div className="card-body">

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p className="d-flex gap-4 post-actions">
                    <a href="/#" className='text-dark fs-4' onClick={updateLikes}>
                        {addedLikes ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
                    </a>
                    <a href="\#" className="text-dark fs-4"><i className="bi bi-chat-left"></i></a>
                </p>

                <h6 className="card-title">Author #{userId}: <span>{title}</span></h6>
            </div>
        </article>
    )
}
export default Post
