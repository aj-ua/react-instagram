import React from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { togglePostModal } from '../actions'

const ModalPost = ({ users, comments, currentPost, isPostModalOpen, togglePostModal }) => {
    // const { title, text, closeButton, actionBtn, action } = activeModal

    return (
        <>
            {isPostModalOpen &&
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-overlay" onClick={() => togglePostModal({})}></div>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" onClick={() => togglePostModal({})} />
                            </div>
                            <div className="modal-body text-left">
                                <Post
                                    post={currentPost}
                                    user={users.filter(user => user.id === currentPost.userId)[0]}
                                    postComments={comments.filter(comment => comment.postId === currentPost.id)}
                                    isModal={true}
                                />
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    isPostModalOpen: state.modal.isPostModalOpen,
    currentPost: state.modal.currentPost,
    users: state.data.users,
    comments: state.data.comments,
})

export default connect(mapStateToProps, { togglePostModal })(ModalPost)
