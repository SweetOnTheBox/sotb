import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductCarousels() {
  return (
    <Container
      data-bs-theme="dark"
      className="mt-4"
      style={{ maxWidth: "600px" }}
    >
      <Row>
        <Col className="mx-auto ">
          <Carousel>
            <Carousel.Item className="rounded-circle" interval={5000}>
              <img
                className="d-block w-100 rounded-circle"
                src="https://i.pinimg.com/564x/6e/74/1c/6e741c1cc99a9895b7b592e99c9c7b52.jpg"
                alt="oreo"
              />
              <Carousel.Caption>
                <h3 className="text-dark">Oreo</h3>
                <p className="text-dark">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="rounded-circle" interval={5000}>
              <img
                className="d-block rounded-circle w-100"
                src="https://i.pinimg.com/564x/6e/74/1c/6e741c1cc99a9895b7b592e99c9c7b52.jpg"
                alt="strawberry"
              />
              <Carousel.Caption>
                <h3 className="text-dark font-weight-bold">Strawberry</h3>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCarousels;
