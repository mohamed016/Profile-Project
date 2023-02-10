import React, { Component } from 'react'
import pic1 from './img/cabin.png'
import pic2 from './img/cake.png'
import pic3 from './img/circus.png'
import pic4 from './img/game.png'
import pic5 from './img/safe.png'
import pic6 from './img/submarine.png'
import './Portfolio.css'

export default class Portfolio extends Component {
     constructor() {
         super()
         this.x=""
         this.y=""
         this.z=""
     }
    componentDidMount() {
         this.x= document.querySelector('#dg')
         this.y= document.querySelector('#img-appear')
         this.z= document.querySelector('#but')
        }
        shadow(){
            this.z.style.setProperty(' box-shadow', '5px 6px rgba(51, 68, 85, 0.589)!important');
            this.hideProfile()
        }
    hideProfile() {
        console.log('Please select');
        this.x.classList.replace("d-flex","d-none")
        console.log(this.y)
        
    }
    appearPortfolio(s){
        this.x.classList.replace("d-none","d-flex")
        this.y.src=s

    }
    arr = [pic1, pic2, pic3, pic4, pic5, pic6]

    render() {
       console.log(this.x)
        return <>

            <div className="body-portfolio  d-flex justify-content-center align-content-center flex-column" >
                <div className="bg-info d-flex- justify-content-center align-items-center overflow-hidden w-100">
                    <div className="row d-flex justify-content-center ">
                        {this.arr.map((el,index) => {

                            return <div key={index} onClick={()=>this.appearPortfolio(el)} className="col-3 m-1 mt-3 p-4 " >
                                    <div className="w-100 position-relative port ">
                                        <img src={el} className="w-100"  />
                                        <div className="bg-success position-absolute top-0 bottom-0 w-100 opacity-75  justify-content-center align-items-center effect d-none">
                                        <i className="fa-solid fa-plus text-white pluse"></i>
                                        </div>
                                    </div>
                                </div>
                            
                        })}

                    </div>
                </div>
                <div className=" body-effect  position-fixed w-100 h-100 d-none justify-content-center align-items-center  mb-4 "id='dg'>
                    <div className="bg-danger d-flex justify-content-center flex-column align-items-center div_center  w-50 position-relative p-5 ">

                        <i onClick={() => this.hideProfile()} className="fa-solid fa-xmark  icon-effect star"></i>
                        <div className="container text-center">
                        <h2 className=" h_effect" >CIRCUS TENT</h2>
    
                        </div>
                        <div className="icon-about container d-flex justify-content-center align-items-center  m-2  ">
                            <div className="After"></div>
                            <i className="fa-solid fa-star "></i>
                            <div className="After"></div> 
                        </div>
                        <div className="img-effect w-50 m-3 bg-primary contact">
                            <img className="w-100 " src={pic6} id="img-appear" />
                        </div>
                        <div className="w-100 text-center mt-2 p_effect ">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam,
                                recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                            </p>
                        </div>
                        <div>
                            <button id='but' onClick={()=>this.shadow()} className="btn btn-success d-flex align-items-center"><i className="fa-solid fa-xmark"></i>Close Window</button>
                        </div>

                    </div>



                </div>

            </div>

        </>


    }
}
