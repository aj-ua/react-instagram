import React from 'react'

const Footer = props => {
    return (
        <div className="footer py-4 bg-dark text-white">
            <div className="container d-flex justify-content-center gap-4">
                <a className='text-white nav-link' href="https://gitlab.com/dan-it/groups/pe-14-online/-/tree/main/react/step-project-instagram" target="_blank" rel="noreferrer">Task description &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
                <a className='text-white nav-link' href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">JSON Placeholder (fake API) &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
                <a className='text-white nav-link' href="https://redux-toolkit.js.org/tutorials/quick-start" target="_blank" rel="noreferrer">Redux Toolkit Quick Start &nbsp;<i className="bi bi-box-arrow-up-right"></i></a>
            </div>
        </div>
    )
}

export default Footer
