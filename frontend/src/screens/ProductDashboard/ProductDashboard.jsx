import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from "../../assets/logo.png";
import Header from '../../components/Navbar/Header';
import Footer from '../../components/Footer/Footer';
import '../ProductDashboard/ProductDashboard.css';

const students = [
  {
    signUpDate: '20th July, 2024',
    fullName: 'Kingsley Quarshie',
    productName: 'Kings iPhone Deals',
    email: 'qkingsley436@gmail.com',
    contact: '0557272031'
  },

  {
    signUpDate: '20th July, 2024',
    fullName: 'Kingsley Quarshie',
    productName: 'Kings iPhone Deals',
    email: 'qkingsley436@gmail.com',
    contact: '0557272031'
  },

  {
    signUpDate: '20th July, 2024',
    fullName: 'Kingsley Quarshie',
    productName: 'Kings iPhone Deals',
    email: 'qkingsley436@gmail.com',
    contact: '0557272031'
  },

  {
    signUpDate: '20th July, 2024',
    fullName: 'Kingsley Quarshie',
    productName: 'Kings iPhone Deals',
    email: 'qkingsley436@gmail.com',
    contact: '0557272031'
  },

  {
    signUpDate: '20th July, 2024',
    fullName: 'Kingsley Quarshie',
    productName: 'Kings iPhone Deals',
    email: 'qkingsley436@gmail.com',
    contact: '0557272031'
  },

  // Repeat the object to simulate the data
  // Add more objects as needed
];

const ProductDashboard = () => {
    return (
      <>
        <Header />
        <div className="dashboard">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <ul>
                <li><HiOutlineChartBarSquare className="fs-3 me-2" />Overview</li>
                <li className="active"><IoPersonCircleSharp className="fs-3 me-2" />Studentpreneurs</li>
                <li><RiShoppingBag3Line className="fs-3 me-2" />Products</li>
              </ul>
            </nav>

            {/* COMMENTED THE FOOTER PROFILE OUT. 
            FACING A LITTLE BIT OF PROBLEM HERE, SO WILL CONTINUE LATER!*/}
            {/* <footer className="sidebar-footer">                            
                <div className="profile">
                    <img src="https://via.placeholder.com/40" alt="Kingsley Quarshie" className="profile-img" />
                    <div className="profile-info">
                        <p className="profile-name">Kingsley Quarshie</p>
                        <small className="profile-email">admin@studentpreneurs.com</small>
                    </div>
                </div>
            </footer> */}
          </aside>
          <main className="main-content mx-3">
            <h1 className="fs-1 mb-4">Product Dashboard</h1>    
            <div className="table-header mb-4">
                <Form className="d-flex">
                    <span className="search-container">
                    <IoSearchOutline className="glass pb-1 fs-4 me-2" />
                    <Form.Control
                    type="search"
                    placeholder="  Search"
                    className="search"
                    aria-label="Search"
                    /> 
                    </span>
                    
                    <Button className="pagination--fe me-2">
                    <IoFilter className="fs-5 me-2"/>
                        Filter
                    </Button>
                    <Button className="pagination--fe">
                    <BiExport className="fs-5 me-2 mb-1" />
                        Export
                    </Button>
                </Form>

            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Sign Up Date</th>
                  <th>Full Name</th>
                  <th>Product Name</th>
                  <th>E-mail</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.signUpDate}</td>
                    <td>{student.fullName}</td>
                    <td>{student.productName}</td>
                    <td>{student.email}</td>
                    <td>{student.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
           
                <div className="pagination--btn">
                    <Button className="pagination--pn me-2">
                        Previous
                    </Button>
                    <Button className="pagination--pn">
                        Next
                    </Button> 
                    {/* <p className='fs-5 pagination--pages'>Page 1 of 10</p> */}
                </div>
          </main>
        </div>
        <Footer />
      </>
    );
  };

export default ProductDashboard;