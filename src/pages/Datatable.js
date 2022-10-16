import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from '../components/Datatable';

const Datatable = () => {
  return (
    <Container className="bg-primary p-5" fluid>
      <Row>
        <Col xs="12" className="min-vh-100">
          <h1 className="text-light mb-5">Data Product</h1>
          <Table />
        </Col>
      </Row>
    </Container>
  );
};

export default Datatable;
