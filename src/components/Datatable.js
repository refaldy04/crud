import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { getProducts, getProduct } from '../redux/asyncAction/products';
import { useDispatch, useSelector } from 'react-redux';

function BasicExample() {
  const value = true;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function getDetail(id) {
    dispatch(getProduct({ token, id, cb: () => handleShow(value) }));
  }

  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const data = useSelector((state) => state.product.data);
  const dataProduct = useSelector((state) => state.product.dataProduct);

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
        {data?.map((data) => (
          <tr key={data.id}>
            <td className="mw-100">{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>
              <div className="d-flex gap-3">
                <Button variant="success" size="sm" onClick={() => getDetail(data.id)}>
                  Details
                </Button>
                <Button variant="warning" size="sm">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
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
