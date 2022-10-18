import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProducts } from '../redux/asyncAction/products';

const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
});

export default function MydModalWithGrid(props) {
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Formik
        validationSchema={schema}
        onSubmit={(e) => {
          dispatch(
            createProduct({
              data: e,
              token,
              cb: () => {
                dispatch(getProducts(token));
                props.onHide();
              },
            })
          );
        }}
        initialValues={{
          name: '',
          price: '',
        }}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Create Data Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik04">
                    <Form.Label>Name Product</Form.Label>
                    <Form.Control type="text" placeholder="input name" name="name" onChange={handleChange} isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik05">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="price" placeholder="input price" name="price" onChange={handleChange} isInvalid={!!errors.price} />
                    <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
