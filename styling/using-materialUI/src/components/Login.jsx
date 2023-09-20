import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
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
      <form onSubmit={onSubmit}>
        <div>
          <TextField label="username" name="uName" />
        </div>
        <div>
          <TextField label="password" type="password" />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
