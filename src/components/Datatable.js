import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { getProducts } from '../redux/asyncAction/products';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function BasicExample() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const data = useSelector((state) => state.product.data);

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
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td className="d-flex gap-3">
              <Button variant="success" size="sm">
                Details
              </Button>
              <Button variant="warning" size="sm">
                Edit
              </Button>
              <Button variant="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicExample;
