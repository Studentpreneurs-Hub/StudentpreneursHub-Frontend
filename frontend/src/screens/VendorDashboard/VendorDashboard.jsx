import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { IoSearchOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";
import Form from 'react-bootstrap/Form';
import Header from '../../components/Navbar/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import axios from 'axios';
import { BASE_API_URI } from "../../utils/constants";
import "./VendorDashboard.css";

const VendorDashboard = () => {
  const [accessToken, setAccessToken] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const fetchVendorInfo = useCallback(async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_API_URI}/api/vendors/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
          params: {
            page: page,
            pageSize: itemsPerPage
          }
        }
      );
      setStudents(response.data.detail);
      setTotalPages(Math.ceil(response.data.detail.length / itemsPerPage));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      fetchVendorInfo(currentPage);
    }
  }, [accessToken, currentPage, fetchVendorInfo]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const daySuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // Handles 11th, 12th, 13th
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}${daySuffix(day)} ${month} ${year}`;
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    const fullName = student.user?.full_name || ""; // Use empty string if null
    const storeName = student.store_name || ""; // Use empty string if null
    const emailAddress = student.user?.email_address || ""; // Use empty string if null

    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emailAddress.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <Header />
      <div className="dashboard">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li className="sidebar-links">
                <Link to="/admin-dashboard">
                  <HiOutlineChartBarSquare className="fs-3 me-2" />Overview
                </Link>
              </li>
              <li className="active sidebar-links">
                <Link to="/VendorDashboard">
                  <IoPersonCircleSharp className="fs-3 me-2" />Studentpreneurs
                </Link>
              </li>
              <li className="sidebar-links">
                <Link to="/ProductDashboard">
                  <RiShoppingBag3Line className="fs-3 me-2" />Products
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="main-content mx-3">
          <h1 className="fs-1 mb-4">Studentpreneurs</h1>
          <div className="table-header mb-4">
            <Form className="d-flex">
              <span className="search-container">
                <IoSearchOutline className="glass pb-1 fs-4 me-2" />
                <Form.Control
                  type="search"
                  placeholder="  Search"
                  className="search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </span>
              <Button className="pagination--fe me-2">
                <IoFilter className="fs-5 me-2" />
                Filter
              </Button>
              <Button className="pagination--fe">
                <BiExport className="fs-5 me-2 mb-1" />
                Export
              </Button>
            </Form>
          </div>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Sign Up Date</th>
                    <th>Full Name</th>
                    <th>Store Name</th>
                    <th>E-mail</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student, index) => (
                    <tr key={index}>
                      <td>{formatDate(student.created_at)}</td>
                      <td>{student.user.full_name}</td>
                      <td>{student.store_name}</td>
                      <td>{student.user.email_address}</td>
                      <td>{student.phone_number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination--btn">
                <Button
                  className="pagination--pn me-2"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button
                  className="pagination--pn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default VendorDashboard;
