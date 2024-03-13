import React from 'react'
import landingImage from '../../assets/landingImage.jpeg'
import './landing.css'
import { Button } from 'react-bootstrap'
import arrowRight from '../../assets/arrowRight.jpeg'

function Landing() {
  return (
    <div>
        <div className='langingImage-container'>
            <img src={landingImage} alt="uu" className='langingImage' />
        </div>

        <div className='sell_Faster_main_div'>
            <div className='sell_faster_div'>
                <span className='sell_faster_text'>Sell faster today.</span>
                <br />
                <Button className='start_selling'>Start Selling</Button>
            </div>

            <div className='arrow_div'>
                <img src={arrowRight} alt="" />
                <p>
                Join our vibrant hub of student entrepreneurs! 
                Discover unique products and innovative services right on campus, 
                from gourmet delights to the latest in tech and fashion.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Landing