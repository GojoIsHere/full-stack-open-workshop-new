import "./contentwrapper.css";
import SideMenu from "../SideBarComponent/SideMenu";
import Nav1 from "../Nav1/Nav1";
import Nav2 from "../Nav2/Nav2";
import MainTableContent from "../MainTable/MainTableContent";

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <SideMenu />

      <div className="content-wrapper-right">
        <Nav1 />
        <hr/>
        <Nav2 />
        <hr />
        <MainTableContent />
      </div>
    </div>

    // <div className="content-wrapper">
    //   <SideMenu />
    //   <Nav1 />
    //   <Nav2 />
    //   <MainTableContent />
    // </div>
  );
};

export default ContentWrapper;
