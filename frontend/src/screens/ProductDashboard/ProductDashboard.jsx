import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { RiShoppingBag3Line } from "react-icons/ri";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import bicycle from "../../assets/bicycle.png";
import ProductCard from "../../components/ProductCard/productcard";
import '../ProductDashboard/ProductDashboard.css';
import { BASE_API_URI } from "../../utils/constants";
import axios from "axios";



const ProductDashboard = () => {
  const [key, setKey] = useState("active");
  const [accessToken, setAccessToken] = useState("");
  const [pendingProducts, setPendingProducts] = useState([]); // State to store pending products
  const [activeProducts, setActiveProducts] = useState([]); // State to store active products
  const [declineProducts, setDeclineProducts] = useState([]); // State to store active products

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const fetchProducts = async (endpoint, setter) => {
    try {
      const response = await axios.get(
        `${BASE_API_URI}/api/product/${endpoint}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken.token}`,
          },
        }
      );
      setter(response.data.detail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchProducts("pending", setPendingProducts);
      fetchProducts("active", setActiveProducts);
      fetchProducts("declined", setDeclineProducts);
    }
  }, [accessToken]);

  return (
    <>
      <Header />
      <div className="dashboard">
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li className="sidebar-links">
                <Link to="/admin-dashboard">
                  <HiOutlineChartBarSquare className="fs-3 me-2" />
                  Overview
                </Link>
              </li>
              <li className="sidebar-links">
                <Link to="/VendorDashboard">
                  <IoPersonCircleSharp className="fs-3 me-2" />
                  Studentpreneurs
                </Link>
              </li>
              <li className="active sidebar-links">
                <Link to="/ProductDashboard">
                  <RiShoppingBag3Line className="fs-3 me-2" />
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content mx-3">
          <h1 className="fs-1 mb-4">Products</h1>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="active" title="Active">
              <div className="product__listings">
                {activeProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>

            <Tab eventKey="pending" title="Pending">
              <div className="product__listings">
                {pendingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>

            <Tab eventKey="declined" title="Declined">
              <div className="product__listings">
                {declineProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
                ))}
              </div>
            </Tab>
          </Tabs>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductDashboard;
