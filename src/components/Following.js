import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import { handleFollow } from '../actions'

const Following = ({ users, currentUser, handleFollow }) => {
    let filteredUsers = [];
    if (users.length > 0) {
        console.log('filteredUsers', filteredUsers);
        const followingUsers = currentUser.following
        console.log('followingUsers', followingUsers);
        filteredUsers = users.filter(user => followingUsers.includes(user.id))
        console.log('filteredUsers', filteredUsers);
    }

    const updateFollow = (user) => {
        console.log('followUser id:', user.id)
        let following = currentUser.following

        if (following.includes(user.id)) {
            following = following.filter(function (item) {
                return item !== user.id
            })
        } else {
            following = [...following, user.id]
        }

        let updatedUser = {
            ...currentUser,
            following: following
        }

        handleFollow(updatedUser)
    }

    return (
        <>
            <h6>You are following:</h6>
            {filteredUsers.length > 0 && (
                filteredUsers.map((user) => <UserCard key={user.id} user={user} action={() => updateFollow(user)} />)
            )}
            <hr />
        </>

    )
}

const mapStateToProps = (state) => ({
    users: state.data.users,
    currentUser: state.user.currentUser,
})

export default connect(mapStateToProps, { handleFollow })(Following)
