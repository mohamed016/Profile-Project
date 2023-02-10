import React, { Component } from 'react'
import "./About.css"

export default class About extends Component {
    render() {
        return (
            <>
                <div className="about-body d-flex justify-content-center align-items-center">
                    <div className="container-fluid about-container p-3 ">
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h2>About</h2>
                            <div className="icon-about d-flex justify-content-center align-items-center m-2">
                                <div className="After"></div>
                                <i className="fa-solid fa-star "></i>
                                <div className="After"></div>
                            </div>
                            <div className="container p-2 m-3 w-75">
                                <div className="row d-flex justify-content-center">
                                <div className="col-md-3"><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                                    files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                                <div className="col-md-3"><p>You can create your own custom avatar for the masthead, change the icon in the dividers,
                                    and add your email address to the contact form to make it fully functional!</p></div>

                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
                
            </>

        )
    }
}
