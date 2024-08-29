import React from 'react'
import AboutBackGround from "../Assets/about-background.png"
import AboutBackGroundImage from "../Assets/about-background-image.png"

import { BsFillPlayCircleFill } from "react-icons/bs";
const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackGround } alt=""/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackGroundImage} alt=""/>
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important part of A Balanced Diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Aliquam mollitia explicabo maiores a dolorem, alias consectetur 
                quia eveniet possimus, at esse saepe. Mollitia soluta adipisci unde
                et inventore, aperiam dolor.
            </p>
            <p className='primary-text'>
                Non tincidunt magna non et elit.Dolor turpis molestie dui
                magnis at fringilla quam
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/>video</button>
            </div>

        </div>
    </div>
  )
}

export default About