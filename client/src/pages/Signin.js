import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

const Signin = () => {
  return (
    <Container className="mt-4">
      <div className="mb-4">
        If you need to create an account, please <Link to="/">CLICK HERE</Link>{" "}
        to access the Sign-Up form.
      </div>

      <Card.Header>
        Returning users may use this form to sign into their account:
      </Card.Header>

      <Card.Body>
        <Card.Title>SIGN-IN FORM</Card.Title>

        <Form className="mt-2">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Container>
  );
};

export default Signin;