import Card from "react-bootstrap/Card";
import "../ProductCard/productcard.css";


function ProductCard({productImg, productCardTitle, productPrice}) {
  return (
    <Card className="product__card">
      <Card.Img variant="top" src={productImg} />
      <div className="product__card-description">
        <p className="product__card-description-title">{productCardTitle}</p>
        <p className="product__card-description-price">Price: <span>GHS {productPrice}</span></p>
      </div>
    </Card>
  );
}

export default ProductCard;
