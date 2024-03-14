import React from 'react'
import landingImage from '../../assets/landingImage.jpeg'
import './landing.css'
import { Button } from 'react-bootstrap'
import arrowRight from '../../assets/arrowRight.jpeg'
import Thousand from '../../assets/thousand.jpeg'

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
                        <div className='onboard'>
                            <span className='onboarding_number'>01.</span>
                            <h3 className='onboarding_title'>Sign up</h3>
                            <p className='onboarding_text'>
                            Register now to unlock a world of opportunities and 
                            resources tailored for your success on campus.
                            </p>
                        </div>
                        <div>
                            <span className='onboarding_number'>02.</span>
                            <h3 className='onboarding_title'>Create a store</h3>
                            <p className='onboarding_text'>
                            Easily set up your personalized store in minutes. 
                            Showcase your brand and what makes your offerings special.
                            </p>
                        </div>
                        <div>
                            <span className='onboarding_number'>03.</span>
                            <h3 className='onboarding_title'>Upload Products and Flourish</h3>
                            <p className='onboarding_text'>
                            Upload your products and let your creativity shine! 
                            Reach fellow students and staff with your unique offerings
                            </p>
                        </div>
                    </div>
                </div> 
        </div>

        <div className='reach_thousand_main_div'>
            <div className='reach_thousand_title_div'>
                <p className='reach_thousand_title'>Reach Thousands of Student Buyers on Campus</p>
                <p className='reach_thousand_text'>
                Tap into a vast network of student buyers right at the 
                heart of the University of Ghana. 
                Connect with an engaged and dynamic community eager to 
                explore and support student-run businesses.
                </p>
                <Button className='start_selling'>Start Selling</Button>
            </div>
            <div>
                <img src={Thousand} alt="oop" className='reach_thousand_img' />
            </div>
        </div>
        
    </div>
  )
}

export default Landing