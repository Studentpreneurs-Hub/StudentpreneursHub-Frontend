import React from 'react'
import landingImage from '../../assets/landingImage.jpeg'
import './landing.css'

function Landing() {
  return (
    <div>
        <div className='langingImage-container'>
            <img src={landingImage} alt="uu" className='langingImage' />
        </div>

        <div className='sell_Faster_main_div'>
            <div className='sell_faster_div'>
                <span className='sell_faster_text'>Sell faster today</span>
                <button>Start Selling</button>
            </div>

            <div>
                ju
            </div>

        </div>
    </div>
  )
}

export default Landing