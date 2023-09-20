import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const username = event.target.uName.value;
    setUser(username);
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="uName" />
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default Login;
