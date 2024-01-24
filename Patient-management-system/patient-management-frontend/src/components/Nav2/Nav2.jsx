import React from "react";
import "./nav2.css";
const Nav2 = () => {
  return (
    <div className="nav2-container">
      <div className="left-content">
        <div className="number-patients">
          <div className="number">
            <span>76</span>
          </div>
          <div className="patients">
            <span>Patients</span>
          </div>
        </div>
        <div className="sortby">
          <span>Sortby :</span>
          <select>
            <option value="someOption">Last Appointment</option>
            <option value="otherOption">Other option</option>
          </select>
        </div>
      </div>

      <div className="right-content">
        <div className="filter-wrapper">
          <div className="filter-icon">
            <img src="./images/icons8-filter-25.png" alt="" />
          </div>
          <div className="filter">
            <span>Filter</span>
          </div>
        </div>
        <div className="edit-wrapper">
          <div className="edit-icon">
            <img src="./images/icons8-edit-column-25.png" alt="" />
          </div>
          <div className="edit-column">
            <span>Edit Column</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
