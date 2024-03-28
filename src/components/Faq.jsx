import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <Accordion className="mb-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How To Order?</Accordion.Header>
        <Accordion.Body>
          <ol>
            <li>
              Click on this form{" "}
              <a
                className="overflow-hidden"
                href="https://forms.fillout.com/t/rtGYVQLH6sus"
              >
                Order
              </a>
            </li>
            <li>
              Fill out your order details. Make the payment according to the
              total amount displayed and upload the payment proof.
            </li>
            <li>Your order will be processed.</li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Detail Product?</Accordion.Header>
        <Accordion.Body>
          Strawberry Cheese cake : biscuit crumbs, cheese cream, sponge cake,
          selai, topping strawberry <br /> oreo : oreo crumbs, chocolate fla,
          reo crumbs, cheese fla, topping oreo
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;
