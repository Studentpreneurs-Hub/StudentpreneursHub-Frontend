import React from 'react';
import { IoSearchOutline, IoFilter, IoPersonCircleSharp } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";
import overview_chart from "../../assets/overview_chart.png";
import Header from '../../components/Navbar/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import './OverviewDashboard.css';

// THIS IS FOR THE CHART SECTION OF THIS PAGE. 
// ENCOUNTERING CHALLENGES HERE EVEN THOUGH THE CODE FOR THE CHART IS CORRECT
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const chartData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: 'Products Approved',
//       data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 70, 90],
//       fill: false,
//       backgroundColor: 'rgb(75, 192, 192)',
//       borderColor: 'rgba(75, 192, 192, 0.2)',
//     },
//   ],
// };

// const chartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: false,
//     },
//   },
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };
// END OF CHART DATA


const OverviewDashboard = () => {
  return (
    <>
      <Header />
      <div className="dashboard">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li className="active sidebar-links">
                <Link to="/admin-dashboard">
                    <HiOutlineChartBarSquare className="fs-3 me-2" />Overview
                </Link>
              </li>
              <li className="sidebar-links">
                <Link to="/ProductDashboard">
                    <IoPersonCircleSharp className="fs-3 me-2" />Studentpreneurs
                </Link>
              </li>
              <li className="sidebar-links">
                <Link to="/VendorDashboard">
                    <RiShoppingBag3Line className="fs-3 me-2" />Products
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
                <p className="fs-4 ms-2">GHS 1,280 <span className="stat-change ms-3">+6%</span></p>
              </div>
              <div className="stat-card">
                <h3 className="fs-6 mt-2 ms-2">Total Products Approved</h3>
                <p className="fs-4 ms-2">GHS 1,280 <span className="stat-change ms-3">+42%</span></p>
              </div>
              <div className="stat-card">
                <h3 className="fs-6 mt-2 ms-2">Total Products Pending</h3>
                <p className="fs-4 ms-2">GHS 1,280 <span className="stat-change ms-3">+85%</span></p>
              </div>
            </div>
          </div>
          <div className="products-approved">
            <h2 className="fs-2 mt-5 mb-4">Products Approved</h2>
            {/* <Line data={chartData} options={chartOptions} /> */}   {/* ** CHARTDATA IS CALLED HERE */}
            {/* <img src="https://via.placeholder.com/600x300" alt="Products Approved Chart" />  */}     {/* ASH THUMBNAIL FOR THE CHART */}
            <img src={overview_chart} alt="Products Approved Chart" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default OverviewDashboard;
