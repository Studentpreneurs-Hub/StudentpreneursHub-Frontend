import React, { useState } from 'react'
import {Row, Col, Container, Form} from 'react-bootstrap'
import { BiSolidShoppingBags } from "react-icons/bi";


function FogotPasswordScreen() {
  const [email, setEmail] = useState()
  return (
    <div>
      <Container className='main-container'>
        <Row className='firstRow'>
          <div className='logo'>
            <BiSolidShoppingBags color='#00A6A6' className='logo-icon'/> 
            <span className='logo-text'>Studentpreneurs HUB</span>
          </div>

          <div className='forgotpassword-text'>
            <span className='forgotpassword-question'>Forgot Password</span>
            <Row className='instruction-row'>
              <span className='reset-instructions'>No worries, we'll send you reset instructions.</span>
            </Row>
          </div>

          <div className='forgotpassword-textbox'>
            <label>E-mail</label>
            <Form className='form'>
              <input 
                type='email'
                placeholder='name@example.com'
                value={email}
                // onChange={setEmail}
                
              />
            </Form>
          </div>

        </Row>
      </Container>
      
    </div>
  )
}

export default FogotPasswordScreen