import "./sidemenu.css";
import { useNavigate } from "react-router-dom";
const SideMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="sideMenu-wrapper">
      <div className="menu-items-wrapper">
        <div className="menu-items">
          <img src="./images/icons8-overview-25.png" alt="" />
          <span className="overview">Overview</span>
        </div>
        <div className="menu-items">
          <img src="./images/icons8-calender-25.png" alt="" />
          <span className="overview">Calender</span>
        </div>
        <div className="menu-items">
          <img src="./images/icons8-user-25.png" alt="" />
          <span className="overview">Patient List</span>
        </div>
        <div className="menu-items">
          <img src="./images/icons8-messages-25.png" alt="" />
          <span className="overview">Messages</span>
        </div>
        <div className="menu-items">
          <img src="./images/icons8-setting-25.png" alt="" />
          <span className="overview">Setting</span>
        </div>
        <div className="menu-items">
          <img src="./images/icons8-log-out-25.png" alt="" />
          <span className="overview" onClick={handleLogout}>
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
