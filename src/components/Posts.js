import React, { useEffect } from 'react'
import Post from './Post'
import ModalPost from './ModalPost'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { togglePostModal } from '../actions'
import { showPostsLoader } from '../functions'

const Posts = ({ posts, users, comments, isPostModalOpen, currentPost, togglePostModal }) => {

    useEffect(() => {
        showPostsLoader();
    }, [])

    return (
        posts.length > 0 && (
            <>
                <div className='row'>
                    {posts.map((post, index) => (
                        <div className={index > 2 ? 'single-post mb-4 d-none' : 'single-post mb-4'} key={post.id}>
                            <Post
                                post={post}
                                user={users.filter(user => user.id === post.userId)[0]}
                                postComments={comments.filter(comment => comment.postId === post.id)}
                            />
                        </div>
                    ))}
                </div>
                {posts.length > 0 && <div className="posts-loader fs-3 mt-4"><i className="bi bi-arrow-clockwise"></i></div>}

                <ModalPost />
            </>
        )
    )
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    posts: state.data.posts,
    users: state.data.users,
    comments: state.data.comments,
    isPostModalOpen: state.modal.isPostModalOpen,
    currentPost: state.modal.currentPost,
})

export default connect(mapStateToProps, { togglePostModal })(Posts)
