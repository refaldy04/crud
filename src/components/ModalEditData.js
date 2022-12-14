import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, getProducts } from '../redux/asyncAction/products';

const schema = yup.object().shape({
  product_id: yup.number().required(),
  name: yup.string().required(),
  price: yup.number().required(),
});

export default function MydModalWithGrid(props) {
  const token = useSelector((state) => state.user.token);
  const errorMsg = useSelector((state) => state.product.errorMsg);
  const dataProduct = useSelector((state) => state.product.dataProduct);

  const dispatch = useDispatch();
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Formik
        validationSchema={schema}
        onSubmit={(e) => {
          dispatch(
            editProduct({
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
          product_id: dataProduct?.id,
          name: dataProduct?.name,
          price: dataProduct?.price,
        }}
      >
        {({ handleSubmit, handleChange, errors, values }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Edit Data Product</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
                <Row className="mb-3 visually-hidden">
                  <Form.Group as={Col} md="12" controlId="validationFormik05">
                    <Form.Label>Id Product</Form.Label>
                    <Form.Control type="text" value={values.product_id} name="product_id" onChange={handleChange} isInvalid={!!errors.product_id} />
                    <Form.Control.Feedback type="invalid">{errors.product_id}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik04">
                    <Form.Label>Name Product</Form.Label>
                    <Form.Control type="text" value={values.name} name="name" onChange={handleChange} isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationFormik05">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="price" value={values.price} name="price" onChange={handleChange} isInvalid={!!errors.price} />
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
