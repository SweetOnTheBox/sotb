import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const products = [
  {
    id: 1,
    name: "Strawberry Cake",
    price: 15000,
    image: "assets/oreo.jpg",
  },
  {
    id: 2,
    name: "Oreo Cup Cake",
    price: 20000,
    image: "assets/strawberry.jpg",
  },
];

function CardProduct() {
  return (
    <div className="d-flex justify-content-center gap-4 py-4">
      {products.map((product) => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </Card.Text>
            <Button variant="primary">Order</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardProduct;
