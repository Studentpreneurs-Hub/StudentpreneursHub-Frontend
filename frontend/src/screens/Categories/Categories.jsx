import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/productcard";
import { BASE_API_URI } from "../../utils/constants";
import axios from "axios";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [accessToken, setAccessToken] = useState("");
  const [products, setProducts] = useState([]); // State to store fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_API_URI}/api/product/active/`, {
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
        },
      });
      setProducts(response.data.detail);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchProducts();
    }
  }, [accessToken]);

  useEffect(() => {
    if (products.length > 0 && categoryName) {
      // Filter products based on categoryName
      const filtered = products.filter(
        (product) =>
          product.product_category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [products, categoryName]);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col key={product.id} md={4} className="mb-4">
                <ProductCard
                  productId={product.id}
                  productImg={BASE_API_URI + product.product_image}
                  productCardTitle={product.product_name}
                  productPrice={product.product_price}
                />
              </Col>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>
              No products found in this category.
            </p>
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Categories;
