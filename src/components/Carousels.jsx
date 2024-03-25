import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProductCarousels() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Carousel>
            <Carousel.Item>
              <img className=" w-50" src="assets/oreo.jpg" alt="Oreo" />
              <Carousel.Caption>
                <h3>Oreo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" w-50"
                src="assets/strawberry.jpg"
                alt="Strawberry"
              />
              <Carousel.Caption>
                <h3>Strawberry</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
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
