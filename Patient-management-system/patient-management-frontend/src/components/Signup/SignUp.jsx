/* eslint-disable react/no-unescaped-entities */
import "./signup.css";
import { useSignupMutation } from "../../redux/api/authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  //Navigation
  const navigate = useNavigate();

  //api triggering
  const [signup, { isSuccess: success }] = useSignupMutation();
  // useState
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  // handling email ,password and submit
  const handleUsername = () => {
    setCredentials({ ...credentials, email: event.target.value });
  };
  const handlePassword = () => {
    setCredentials({ ...credentials, password: event.target.value });
  };
  const handleSubmit = () => {
    event.preventDefault();
    signup(credentials);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="main-container wrapper">
      <div className="container-right">
        <div className="form-title">Please Signup To Continue</div>
        <form>
          <div className="username-input">
            <input
              type="text"
              name="username"
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
          <div className="username-input">
            <input
              type="password"
              name="password"
              placeholder="confirm password"
            />
          </div>
          <div className="login-btn">
            <button type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
        </form>
        <div className="create-account">
          Go to Login page ? <a href="/">Log In</a>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
