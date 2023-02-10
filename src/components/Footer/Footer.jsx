import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {

        return (
            <>
                <div className=" w-100 footer-container overflow-hidden d-flex align-content-center justify-content-center flex-column">
                    <div className=" d-flex justify-content-between row footer-container2 p-5 ">

                        <div className="text-white info-footer col-md-3 m-2 text-center ">
                            <h5>LOCATION</h5>
                            <span>2215 John Daniel DriveClark, MO 65243</span>
                        </div>
                        <div className="text-white info-footer col-md-3 m-2 text-center ">
                            <h5>AROUND THE WEB</h5>
                            <div className="p-2">
                                <a href="https://www.facebook.com/">  <i class="fa-brands fa-facebook-f icon-footer"></i></a>
                                <i className="fa-brands fa-twitter icon-footer"></i>
                                <i className="fa-brands fa-linkedin-in icon-footer"></i>
                                <i className="fa-brands fa-dribbble icon-footer"></i>
                            </div>
                        </div>
                        <div className="text-white info-footer col-md-3 m-2 text-center ">
                            <h5>ABOUT FREELANCER</h5>
                            <span>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</span>
                        </div>

                    </div>
                   

                </div>


            </>
        )
    }
}

