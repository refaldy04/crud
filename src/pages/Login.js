import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from '../components/FormLogin';

const Login = () => {
  return (
    <div className="bg-primary d-flex justify-content-center align-items-center p-3 p-md-5 min-vh-100">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs="12" md="6" className="bg-light p-3 p-md-5 d-flex flex-column justify-content-center align-items-center rounded">
            <h1>Administration Report</h1>
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
