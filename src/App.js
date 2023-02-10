import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';


export default class App extends Component {
  render() {
    return (

      <>
        <Navbar />
       
        <Routes>
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="info" element={<Footer/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        </Routes>

      </>
    )
  }
}
