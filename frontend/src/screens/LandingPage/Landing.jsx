import React from 'react'
import landingImage from '../../assets/landingImage.jpeg'
import './landing.css'

function Landing() {
  return (
    <div>
        <div className='langingImage-container'>
            <img src={landingImage} alt="uu" className='langingImage' />
        </div>
    </div>
  )
}

export default Landing