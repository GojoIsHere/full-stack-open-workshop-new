/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [
    login,
    { data: loginData, isLoading: loading, isError, isSuccess: success },
  ] = useLoginMutation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleUsername = () => {
    setCredentials({ ...credentials, email: event.target.value });
  };
  const handlePassword = () => {
    setCredentials({ ...credentials, password: event.target.value });
  };
  const handleSubmit = () => {
    event.preventDefault();
    login(credentials);
    if (success) {
      console.log("login successfully", loginData);
      localStorage.getItem("token", loginData.token);
      dispatch(
        loginUser({ username: loginData.email, token: loginData.token })
      );
      navigate("/body");
    }
  };

  return (
    <div className="home-page">
      <div className="main-container wrapper">
        {/* {console.log(token, "from use selector")} */}

        <div className="container-right">
          <div className="form-title">Please Login To Continue</div>
          <form>
            <div className="username-input">
              <input
                type="text"
                name="email"
                placeholder="username/email"
                onChange={handleUsername}
              />
            </div>
            <div className="username-input">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handlePassword}
              />
            </div>
            <div className="login-btn">
              <button type="submit" onClick={handleSubmit}>
                LOGIN
              </button>
            </div>
          </form>
          <div className="create-account">
            Don't Have An Account ? <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="background-image">
        <img src="./images/patients.png" alt="" height={500} width={500} />
      </div>
    </div>
  );
}
