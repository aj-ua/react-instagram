import React from 'react'

const UserCard = ({ user, action }) => {
    const { id, username, photo } = user
    return (
        <div className='d-flex align-items-center gap-2 mb-2' onClick={() => action(id)}>
            <img className='rounded-5' src={photo} alt={username} width='24' height='24   ' />
            <strong>{username}</strong>
        </div>
    )
}
export default UserCard
