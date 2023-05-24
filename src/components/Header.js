import React from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Header = () => {
    return (
        <header className="navbar navbar-dark navbar-expand-md bg-dark text-white">
            <div className="container d-flex justify-content-between">
                <h1><NavLink to="/" className="nav-link">Instagram</NavLink></h1>
                <ul className="navbar-nav gap-2 fs-5">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

// Header.propTypes = {
//     cart: PropTypes.array.isRequired,
//     wishlist: PropTypes.array.isRequired,
// }

const mapStateToProps = (state) => ({
    // cart: state.product.cart,
    // wishlist: state.product.wishlist
})

export default connect(mapStateToProps, null)(Header)
