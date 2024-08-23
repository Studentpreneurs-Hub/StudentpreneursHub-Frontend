import { useState, useEffect } from "react";
import "../HomePage/home.css";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import homeImage_1 from "../../assets/homeImage_1.png";
import homeImage_2 from "../../assets/homeImage_2.png";
import homeImage_3 from "../../assets/homeImage_3.png";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/productcard";
import { BASE_API_URI } from "../../utils/constants";
import axios from "axios";

function Home() {
  const [accessToken, setAccessToken] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokens");
    if (token) {
      setAccessToken(JSON.parse(token));
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_API_URI}/api/product/active/all/`, {
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

  return (
    <>
      <Header />
      <section className="home">
        <div className="langingImage_container">
          <Carousel>
            <Carousel.Item interval={3000}>
              <img src={homeImage_1} alt="uu" className="landingImage" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={homeImage_2} alt="uu" className="landingImage" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src={homeImage_3} alt="uu" className="landingImage" />
            </Carousel.Item>
          </Carousel>
        </div>

        <h1 className="home__heading">Top Categories 🔥</h1>
        <div className="home__top">
            {products.length > 0 ? (
              products.map((product) => (
                  <ProductCard
                    productId={product.id}
                    productImg={BASE_API_URI + product.product_image}
                    productCardTitle={product.product_name}
                    productPrice={product.product_price}
                  />
              ))
            ) : (
              <p style={{ textAlign: "center" }}>
                No products found in this category.
              </p>
            )}
        </div>

        <button className="home__btn">See More</button>
      </section>
      <Footer />
    </>
  );
}

export default Home;
