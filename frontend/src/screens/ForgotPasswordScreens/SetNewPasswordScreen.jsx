import React, { useState } from 'react';
import { Row, Col,Button, Container, Form } from 'react-bootstrap';
import {BiSolidShoppingBags} from 'react-icons/bi';

const SetNewPasswordScreen = () => {
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('OTP Code:', otpCode);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
      <Container className='main-container-new-password'>
        <Row className='firstRow'>
          <div className='logo'>
            <BiSolidShoppingBags color='#00A6A6' className='logo-icon'/> 
            <span className='logo-text'>Studentpreneurs HUB</span>
          </div>

          <div className='forgotpassword-text'>
            <span className='forgotpassword-question'>Set a new password</span>
            <Row className='new-password-row'>
              <span className='new-password-instructions'>Your new password must be different to previously used passwords.</span>
            </Row>
          </div>

          <div className='otp-textbox'>
            <span className='email-text'>OTP-Code</span>
            <Form className='form'>
              <input 
                type='email'
                id='otp'
                // placeholder='name@example.com'
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                // onChange={setEmail}
              />
            </Form>
          </div>

          <div className='new-password-textbox'>
            <label className='email-text'>New Password</label>
            <Form className='form'>
              <input 
                type='password'
                id='newPassword'
                placeholder='Your Password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                // onChange={setEmail}
              />
            </Form>
          </div>

          <div className='confirm-password-textbox'>
            <span className='email-text'>Confirm Password</span>
            <Form className='form'>
              <input 
                type='password'
                id='confirmPassword'
                placeholder='Confirm Your Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // onChange={setEmail}
              />
            </Form>
          </div>

          <div>
            <Button className='forgotpassword-btn' onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <Row className='rememberpassword-question-row'>
              <span className='rememberpassword-question'>Remember your password? Login</span>
            </Row>
        </Row>
      </Container>
      
    </div>
  );
};

export default SetNewPasswordScreen;