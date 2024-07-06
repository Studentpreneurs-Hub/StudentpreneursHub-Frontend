import "../HomePage/home.css";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import homeImage_1 from "../../assets/homeImage_1.png";
import homeImage_2 from "../../assets/homeImage_2.png";
import homeImage_3 from "../../assets/homeImage_3.png";
import product_1 from "../../assets/elegant-smartphone-composition.jpg";
import product_2 from "../../assets/graphic-woman-dress-trendy-design-white-background.jpg";
import product_3 from "../../assets/headphones-audio-listen.jpg";
import product_4 from "../../assets/laptop-with-colorful-screen-isolated-white-background-3d-illustration.jpg";
import product_5 from "../../assets/rendering-smart-home-device.jpg";
import { Carousel } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/productcard";


function Home() {
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
        <ProductCard productImg={product_1} productCardTitle="iPhone" productPrice="8000" />
        <ProductCard productImg={product_2} productCardTitle="Women dress" productPrice="150" />
        <ProductCard productImg={product_3} productCardTitle="Headphone" productPrice="400" />
        <ProductCard productImg={product_4} productCardTitle="Laptop" productPrice="5000" />
        <ProductCard productImg={product_5} productCardTitle="Smart Watch" productPrice="490" />
        </div>

        <button className="home__btn">See More</button>
      </section>
      <Footer />
    </>
  );
}

export default Home;
