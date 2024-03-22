import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function FormContact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // define
    const phone = "6285817165337";
    const name = document.getElementById("name").value;
    const ig = document.getElementById("ig").value;
    const city = document.getElementById("city").value;
    const message = document.getElementById("message").value;

    const formattedMessage = `*Hi* ${name} *from* ${city},\n\n*Message*: ${message}\n\n*Instagram*: ${ig}\n\nThankyou for ordering SOTB!`;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // construct WhatsApp URL with encoded message
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        formattedMessage
      )}`;
      window.open(whatsappURL).focus();
    }

    setValidated(true);
  };

  return (
    <Form
      className="container px-5 py-2"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-3">
        <Form.Group
          className="mb-3"
          as={Col}
          md="12"
          controlId="validationCustom01"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" id="name" placeholder="Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Instagram</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              id="ig"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control id="city" type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Message</Form.Label>
          <Form.Control
            id="message"
            placeholder="Message"
            as="textarea"
            rows={3}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid message.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button className="mb-4" type="submit">
        Submit form
      </Button>
    </Form>
  );
}

export default FormContact;
