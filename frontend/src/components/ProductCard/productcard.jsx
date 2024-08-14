import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../ProductCard/productcard.css";

function ProductCard({ productId, productImg, productCardTitle, productPrice }) {
  return (
    <Link to={`/product/${productId}`} className="product__link">
      <Card className="product__card">
        <Card.Img variant="top" src={productImg} />
        <div className="product__card-description">
          <p className="product__card-description-title">{productCardTitle}</p>
          <p className="product__card-description-price">
            Price: <span>GHS {productPrice}</span>
          </p>
        </div>
      </Card>
    </Link>
  );
}

export default ProductCard;
