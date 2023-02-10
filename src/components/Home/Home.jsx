import React, { Component } from 'react'
import pic from './imgs/avataaars.svg'

import "./Home.css"
import Footer from '../Footer/Footer'

export default class extends Component {
    render() {
        return <>
            <div className="home d-flex justify-content-center align-items-md-center container-fluid ">
                <div className="home_content ">
                    <div className="home_img  container">
                        <img src={pic} />
                    </div>
                    <div className="text-center text-white w-100 container">
                        <h1 className="text-bold">START REACT</h1>
                        <div className="star container">
                            <div className="After"></div>
                            <i className="fa-solid fa-star"></i>
                            <div className="After"></div>
                        </div>
                        <h6>Graphic Artist - Web Designer - Illustrator</h6>

                    </div>
                </div>
            </div>
                 <div className="bg-primary text-center p-2 bg-black text-white last-footer position-fixed bottom-0 w-100">
                        <span>Copyright © Your Website 2021</span>

                    </div>

           

        </>

    }
}
