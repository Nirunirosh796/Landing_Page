import React from 'react'
import ProfilePic from "../assets/Niro.png"
import {AiFillStar} from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonal</p>
            <h1 className='primary-heading'>What They Are saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora est totam perspiciatis debitis ratione officia distinctio nemo similique ullam doloremque, modi adipisci. Minima, dolorem! Quam necessitatibus dolor nesciunt dignissimos non!
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=""/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto est illum sapiente alias, quasi, doloribus, hic tenetur qui eos repellat asperiores ad! Numquam reiciendis ut adipisci, quaerat nisi delectus fuga!
            </p>
            <div className='testimonials-stars-container'>
                < AiFillStar/>
                < AiFillStar/>
                < AiFillStar/>
                < AiFillStar/>
            </div>
            <h2>
                Selvam Niroshan
            </h2>
        </div>

    </div>
  )
}

export default Testimonial