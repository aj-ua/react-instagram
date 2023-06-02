import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showPostsLoader } from '../functions'

const Posts = ({ posts, users }) => {
    showPostsLoader()
    return (
        posts.length > 0 && (
            <>
                <div className='row'>
                    {posts.map((post, index) => (
                        <div className={index > 2 ? 'single-post mb-4 d-none' : 'single-post mb-4'} key={post.id}>
                            <Post post={post} user={users.filter(user => user.id === post.userId)[0]} />
                        </div>
                    ))}
                </div>
                {posts.length > 0 && <div className="posts-loader fs-3 mt-4"><i className="bi bi-arrow-clockwise"></i></div>}
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
})

export default connect(mapStateToProps, null)(Posts)
