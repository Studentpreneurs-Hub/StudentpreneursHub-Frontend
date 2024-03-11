import React, { useState } from 'react'
import {Row, Col, Container, Form, Button} from 'react-bootstrap'
import { BiSolidShoppingBags } from "react-icons/bi";
import {Link} from 'react-router-dom'
import styles from './Forgotpassword.module.css'



function FogotPasswordScreen() {
  const [email, setEmail] = useState()

  const handleSubmit =()=>{
    
  }
  return (
    <div>
      <Container className={styles.mainContainer}>
        <div className={styles.firstRow}>
          <div className='logo'>
            <BiSolidShoppingBags color='#00A6A6' className={styles.logoIcon}/> 
            <span className={styles.logoText}>Studentpreneurs HUB</span>
          </div>

          <div className={styles.forgotpasswordText}>
            <span className={styles.forgotpasswordQuestion}>Forgot Password</span>
            <div className={styles.instructionRow}>
              <span className={styles.resetInstructions}>No worries, we'll send you reset instructions.</span>
           </div>
          </div>

          <div className={styles.forgotpasswordTextbox}>
            <span className={styles.emailText}>E-mail</span>
            <Form c
            lassName={styles.form}>
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
            <Button className={styles.forgotPasswordBtn} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div className={styles.rememberpasswordQuestionRow}>
              <span className={styles.rememberpasswordQuestion}>Remember your password? Login</span>
            </div>
        </div>
      </Container>
      
    </div>
  )
}

export default FogotPasswordScreen