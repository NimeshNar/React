import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-dark bg-dark my-2"
            >
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        MyWebsite
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page"
                                >Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/props_ex">Props Example</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar