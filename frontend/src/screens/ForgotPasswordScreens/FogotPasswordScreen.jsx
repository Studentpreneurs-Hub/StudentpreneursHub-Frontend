import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { BiSolidShoppingBags } from "react-icons/bi";


function FogotPasswordScreen() {
  return (
    <div>
      <Container className='main-container'>
        <Row className='firstRow'>
          <div className='logo'>
            <BiSolidShoppingBags color='#00A6A6' className='logo-icon'/> 
            <span>Studentpreneurs HUB</span>
          </div>

        </Row>
      </Container>
      
    </div>
  )
}

export default FogotPasswordScreen