import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { getProducts, getProduct, deleteProduct } from '../redux/asyncAction/products';
import { useDispatch, useSelector } from 'react-redux';
import ModalEditData from '../components/ModalEditData';

function BasicExample() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const token = useSelector((state) => state.user.token);
  const products = useSelector((state) => state.product.data);
  const dataProduct = useSelector((state) => state.product.dataProduct);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function getDetail(id) {
    dispatch(getProduct({ token, id, cb: () => handleShow(true) }));
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(token));
  }, []);
  return (
    <Table striped bordered hover responsive variant="dark" className="w-100">
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Price</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((data) => (
          <tr key={data.id}>
            <td className="mw-100">{data.id}</td>
            <td>{data.name}</td>
            <td>
              {parseInt(data.price).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
            </td>
            <td>
              <div className="d-flex gap-3">
                <ModalEditData show={modalShow} onHide={() => setModalShow(false)} />
                <Button variant="info" size="sm" onClick={() => getDetail(data.id)}>
                  Details
                </Button>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => {
                    dispatch(getProduct({ token, id: data.id }));
                    setModalShow(true);
                  }}
                >
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => dispatch(deleteProduct({ token, id: data.id, cb: () => dispatch(getProducts(token)) }))}>
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Details Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>id : {dataProduct?.id}</p>
            <p>name : {dataProduct?.name}</p>
            <p>price : {dataProduct?.price}</p>
            <p>create at : {dataProduct?.created_at}</p>
            <p>update at : {dataProduct?.updated_at}</p>
          </Modal.Body>
        </Modal>
      </tbody>
    </Table>
  );
}

export default BasicExample;
