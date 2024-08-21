import React, {useState, useEffect} from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";
import overview_chart from "../../assets/overview_chart.png";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { BASE_API_URI } from "../../utils/constants";
import { useAuth } from "../../utils/AuthContext";
import axios from "axios";
import "./OverviewDashboard.css";

const OverviewDashboard = () => {
  const [accessToken, setAccessToken] = useState("");
  const [vendors, setVendor] = useState([])
  const [pendingProducts, setPendingProducts] = useState([])
  const [approvedProducts, setApprovedProducts] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  
  const fetchItems = async (endpoint, setter) => {
    try {
      const response = await axios.get(
        `${BASE_API_URI}/api/${endpoint}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );
      console.log(response.data.detail);
      setter(response.data.detail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchItems("vendors", setVendor)
      fetchItems("product//pending", setPendingProducts)
      fetchItems("product//active", setApprovedProducts)
    }
  }, [accessToken]);

  return (
    <>
      <Header />
      <div className="dashboard">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li className="active sidebar-links">
                <Link to="/admin-dashboard">
                  <HiOutlineChartBarSquare className="fs-3 me-2" />
                  Overview
                </Link>
              </li>
              <li className="sidebar-links">
                <Link to="/ProductDashboard">
                  <IoPersonCircleSharp className="fs-3 me-2" />
                  Studentpreneurs
                </Link>
              </li>
              <li className="sidebar-links">
                <Link to="/VendorDashboard">
                  <RiShoppingBag3Line className="fs-3 me-2" />
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content mx-3">
          <div className="overview-header">
            <h1 className="fs-1 mb-4">Overview</h1>
            <div className="overview-stats">
              <div className="stat-card">
                <h3 className="fs-6 mt-2 ms-2">Number of Studentpreneurs</h3>
                <p className="fs-4 ms-2">
                  {vendors.length} <span className="stat-change ms-3">+6%</span>
                </p>
              </div>
              <div className="stat-card">
                <h3 className="fs-6 mt-2 ms-2">Total Products Approved</h3>
                <p className="fs-4 ms-2">
                  {approvedProducts.length} <span className="stat-change ms-3">+42%</span>
                </p>
              </div>
              <div className="stat-card">
                <h3 className="fs-6 mt-2 ms-2">Total Products Pending</h3>
                <p className="fs-4 ms-2">
                  {pendingProducts.length} <span className="stat-change ms-3">+85%</span>
                </p>
              </div>
            </div>
          </div>
          <div className="products-approved">
            <h2 className="fs-2 mt-5 mb-4">Products Approved</h2>
            {/* <Line data={chartData} options={chartOptions} /> */}{" "}
            {/* ** CHARTDATA IS CALLED HERE */}
            {/* <img src="https://via.placeholder.com/600x300" alt="Products Approved Chart" />  */}{" "}
            {/* ASH THUMBNAIL FOR THE CHART */}
            <img src={overview_chart} alt="Products Approved Chart" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default OverviewDashboard;
