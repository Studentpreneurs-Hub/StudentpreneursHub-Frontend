import React, { useState } from 'react'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import { BiSolidShoppingBags } from "react-icons/bi";
import {Link} from 'react-router-dom'
import './Forgotpassword.css'



function FogotPasswordScreen() {
  const [email, setEmail] = useState()

  const handleSubmit =()=>{
    
  }
  return (
    <div>
      <Container className='main-container'>
        <div className='firstRow'>
          <div className='logo'>
            <BiSolidShoppingBags color='#00A6A6' className='logo-icon'/> 
            <span className='logo-text'>Studentpreneurs HUB</span>
          </div>

          <div className='forgotpassword-text'>
            <span className='forgotpassword-question'>Forgot Password</span>
            <div className='instruction-row'>
              <span className='reset-instructions'>No worries, we'll send you reset instructions.</span>
            </div>
          </div>

          <div className='forgotpassword-textbox'>
            <span className='email-text'>E-mail</span>
            <Form className='form'>
              <input 
                type='email'
                id='email'
                placeholder='name@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onChange={setEmail}
              />
            </Form>
          </div>

          <div>
            <Button className='forgotpassword-btn' onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div className='rememberpassword-question-row'>
              <span className='rememberpassword-question'>Remember your password? Login</span>
            </div>
        </div>
      </Container>
      
    </div>
  )
}

export default FogotPasswordScreen