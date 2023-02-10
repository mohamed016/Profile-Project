import React, { Component } from 'react'
import './Contact.css'
import Footer from './../Footer/Footer';

export default class Contact extends Component {
    render() {
        return (
            <>
                <div className="contact-container">
                    <div className=" w-50 contact-child p-2 ">
                        <div className="text-center d-flex justify-content-center align-items-center flex-column ">
                            <h2 className="tedx-white">CONTACT ME</h2>
                            <div className="icon-about d-flex justify-content-center align-items-center m-2 container ">
                                <div className="After"></div>
                                <i class="fa-solid fa-star "></i>
                                <div className="After"></div>
                            </div>
                        </div>
                        <div>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <input type="email" className="form-control border-0" id="inputEmail4" placeholder="Name" />
                                    

                                </div>


                                <div className="col-12">

                                    <input type="email" className="form-control" id="inputAddress" placeholder="Email" />
                                    
                                </div>
                                <div className="col-12">
                                    <input type="number" className="form-control" id="inputAddress2" placeholder="Phone Number" />
                                  
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control " placeholder="Messsage" />
                                    
                                </div>


                                <div className="col-12">
                                    <button type="submit" className="btn">Sign in</button>
                                </div>
                            </form>
                        </div>


                    </div>

                </div>
                <div className="bg-primary text-center p-2 bg-black text-white last-footer position-fixed bottom-0 w-100">
                        <span>Copyright © Your Website 2021</span>

                    </div>




            </>
        )
    }
}
