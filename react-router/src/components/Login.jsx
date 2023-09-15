import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const username = event.target.uName.value;
    SpeechSynthesisUtterance();
    setUser(username);
    navigate("/");
  };

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username: <input name="uName" />
        </div>

        <button type="submit">login</button>
      </form>
    </div>
  );
};
export default Login;
