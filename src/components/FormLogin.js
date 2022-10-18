import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/asyncAction/user';
import { useSelector } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export default function FormExample() {
  const errorMsg = useSelector((state) => state.user.errorMsg);
  const dispatch = useDispatch();
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(val) => {
        dispatch(login(val));
      }}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <Form onSubmit={handleSubmit} className="py-5 w-100">
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="input email" name="email" onChange={handleChange} isInvalid={!!errors.email} />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormik05">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="input password" name="password" onChange={handleChange} isInvalid={!!errors.password} />
              <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="d-grid mt-5">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
