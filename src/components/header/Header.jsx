import "./Header.css";
import EN from "../../assets/icons/EN.png";
import wbnb from "../../assets/icons/wbnb.png";
import { CaretDown, PlusCircle } from "react-bootstrap-icons";

const Header = () => {
  return (
    <div className="Header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="headerLanguage">
              <span className="univarsalBtn lanBtn">
                <img src={EN} className="ENicon" /> EN{" "}
                <CaretDown className="downIcon" />
              </span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="headerRight">
              <button className="univarsalBtn coinbtn">
                <img src={wbnb} className="ENicon wbnbIcn" /> BSC &nbsp;
                <CaretDown className="downIcon" />
              </button>
              <button className="univarsalBtn connectbtn">
                <PlusCircle /> &nbsp;&nbsp;&nbsp; <span>Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
