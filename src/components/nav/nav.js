import "./Nav.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import logo from "../../assets/profile.png"; // Tell webpack this JS file uses this image

function Nav() {
  return (
    <div className="Nav p-shadow-10">
      <div className="p-grid p-jc-between nested-grid vertical-container p-ai-center p-p-2">
        <div className="p-col-2">
          <Button label="" icon="pi pi-bars" />
        </div>

        <div className="p-col-4 p-fluid ">
          <span className="p-input-icon-left p-field">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
          </span>
        </div>

        <div className="p-col-4 p-md-2">
          <div className="p-grid vertical-container p-jc-end p-mr-2 p-ai-center">
            <h3>Lambi Lõdvik</h3>
            <img
              className="p-ml-3 profilepic"
              src={logo}
              alt="Italian Trulli"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
