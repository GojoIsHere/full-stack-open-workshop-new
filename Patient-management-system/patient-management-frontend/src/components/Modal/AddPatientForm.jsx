import { useState } from "react";
import "./addpatientform.css";

const AddPatientForm = ({ modal, setModal, toggleModal }) => {
  const [patientDetails, setPatientDetails] = useState({
    full_name: "",
    email: "",
    contact: "",
    DOB: "",
    Address: "",
    image: "",
    gender: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked submit");
    toggleModal();
   
    
  };
  return (
    <>
      {/* <div className="overlay" onClick={handleOverlay}></div> */}
      <div className="form-wrapper">
        <form className="form-content" action="">
          <div className="close-icon">
            <img
              src="./images/icons8-cross-25.png"
              alt=""
              onClick={toggleModal}
            />
          </div>
          <div className="form-title">
            <h4>Add Patient Details</h4>
          </div>
          <div className="input-items">
            <label htmlFor="">Patient name</label>{" "}
            <input placeholder="full name" name="name" />
          </div>
          <div className="input-items">
            <label htmlFor="">Email</label>
            <input placeholder="email" name="email" />
          </div>
          <div className="input-items">
            <label htmlFor="">Contact</label>
            <input placeholder="number" name="contact" />
          </div>
          <div className="input-items">
            <label>Address</label>
            <input placeholder="Adress" name="address" />
          </div>
          <div className="input-items">
            <label>DOB</label>
            <input placeholder="Date of birth" name="DOB" />
          </div>
          <div className="input-items">
            <label>Gender</label>
            <select>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div className="input-items">
            <label>Upload Image</label>
            <input placeholder="Image url" name="image" />
          </div>
          {/* <div className="input-items">
            <label>Image</label>
            <input type="file" />
          </div> */}
          <div className="submit-btn">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPatientForm;
