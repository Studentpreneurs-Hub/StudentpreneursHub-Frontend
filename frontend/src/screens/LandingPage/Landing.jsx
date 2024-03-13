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

                    <div className='onboarding_instructions'>
                        <div>
                            <span>01</span>
                            <h3>Sign up</h3>
                            <p>
                            Register now to unlock a world of opportunities and 
                            resources tailored for your success on campus.
                            </p>
                        </div>
                        <div>
                            <span>02</span>
                            <h3>Create a store</h3>
                            <p>
                            Easily set up your personalized store in minutes. 
                            Showcase your brand and what makes your offerings special.
                            </p>
                        </div>
                        <div>
                            <span>03</span>
                            <h3>Upload Products and Flourish</h3>
                            <p>
                            Upload your products and let your creativity shine! 
                            Reach fellow students and staff with your unique offerings
                            </p>
                        </div>
                    </div>
                </div>
                
        </div>
        
    </div>
  )
}

export default Landing