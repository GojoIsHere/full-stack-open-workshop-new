import SignUp from "./components/Signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/logincomponent/LoginForm";
import "./index.css";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/body" element={<ContentWrapper />} />
      </Routes>
      {/* <LoginForm /> */}
      {/* <SideMenu /> */}
      {/* <Nav1 />
      <Nav2 />
      <MainTableContent /> */}
      {/* // <ContentWrapper /> */}
    </div>
  );
}

export default App;
