import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar navbar-dark navbar-expand-md bg-dark text-white">
            <div className="container d-flex justify-content-between">
                <h1><NavLink to="/" className="nav-link">Instagram</NavLink></h1>
            </div>
        </header>
    )
}

export default Header
