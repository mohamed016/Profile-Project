import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default class Navbar extends Component {
    render() {
        return (
            <>
            <div className="test-nav bg-black position-fixed ">
            <nav className="navbar navbar-expand-lg navbar-light nav w-50">
                    <div className="container-fluid">
                        <Link to="home"className="navbar-brand ms-2 logo" >START REACT</Link>
                        <button className="navbar-toggler button-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        Menu <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="portfolio"className="nav-link active" aria-current="page" href="#">PORTFOLIO</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="about">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="contact">CONTACT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="info">INFO</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


            </div>
                
            </>
        )
    }
}


























