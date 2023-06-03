import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (users) => {
    const currentUser = users.users[0]

    return (
        <header className="navbar navbar-dark navbar-expand-md bg-dark text-white">
            <div className="container d-flex justify-content-between">
                <h1><NavLink to="/" className="nav-link">Instagram</NavLink></h1>
            </div>
            <div className="d-flex align-items-center gap-2 text-white me-auto">
                <img className='rounded-5' src={currentUser?.photo} alt={currentUser?.username} width='30 ' height='30    ' />
                <strong className="">{currentUser?.username}</strong>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    users: state.data.users,
})

export default connect(mapStateToProps, null)(Header)
