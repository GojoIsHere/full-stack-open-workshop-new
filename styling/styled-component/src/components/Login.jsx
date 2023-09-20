import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`;

const Input = styled.input`
  margin: 0.25em;
`;
const Form = styled.form`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`;
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
        <div>
          username: <Input name="uName" />
        </div>
        <div>
          password:
          <Input type="password" />
        </div>

        <Button type="submit">login</Button>
      </Form>
    </div>
  );
};
export default Login;
