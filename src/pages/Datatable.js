import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Table from '../components/Datatable';
import { logout } from '../redux/asyncAction/user';
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateData from '../components/ModalCreateData';

const Datatable = () => {
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);

  const onLogout = () => {
    dispatch(logout(token));
  };
  return (
    <Container className="bg-primary py-4 p-md-5" fluid>
      <Row>
        <Col md="6" className="d-flex justify-content-md-start align-items-center">
          <h1 className="text-light">Data Product</h1>
        </Col>
        <Col md="6" className="d-flex justify-content-md-end mb-3 mb-md-0 align-items-center ">
          <Button variant="dark" onClick={onLogout}>
            Logout
          </Button>
        </Col>
        <Col xs="12" className="mt-4 mb-2">
          <ModalCreateData show={modalShow} onHide={() => setModalShow(false)} />
          <div className="d-grid">
            <Button variant="success" onClick={() => setModalShow(true)} className="fw-bold">
              Create Data Product
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="min-vh-100">
          <Table />
        </Col>
      </Row>
    </Container>
  );
};

export default Datatable;
