import React from 'react'
import Logo from "../Assets/Logo.svg"
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt=""/>
            </div>
            <div className='footer-icons'>
            <BsTwitterX />
            <FaLinkedin /> 
            <FaYoutubeSquare /> 
            <FaFacebook />
            </div>
        </div>    
        <div className='footer-section-two'>
              <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Testimonials</span>
                <span>Work</span>
              </div>
              <div className='footer-section-columns'>
                <span>+94 754753895</span>
                <span>nirunirosh796@gmail.com</span>
              </div>
              <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
              </div>
        </div>
    </footer>
  )
}

export default Footer