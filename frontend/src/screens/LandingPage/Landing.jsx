import React from 'react'
import landingImage from '../../assets/landingImage.jpeg'
import './landing.css'
import { Button } from 'react-bootstrap'
import arrowRight from '../../assets/arrowRight.jpeg'

function Landing() {
  return (
    <div>
        <div className='langingImage_container'>
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

        <div className='campus_creativity_main_div'>
                <div className='campus_creativity_heading'>
                    <span>
                    Where Campus Creativity Meets Exceptional Quality
                    </span>
                    <p className='campus_p_text'>
                    Delve into a world of entrepreneurial spirit with a diverse range of 
                    offerings. From mouth-watering cuisines to cutting-edge gadgets 
                    and trendy fashion, our student entrepreneurs have it all!
                    </p>
                    <Button className='start_selling'>Start Selling</Button>
                    <hr style={{width:'1151px'}}/>
                </div>
                
        </div>
        
    </div>
  )
}

export default Landing