import "./Sidebar.css";
import logo from "../../assets/img/logo.png";
import {
  HouseDoorFill,
  CurrencyExchange,
  ThreeDots,
  CaretDown,
  Github,
  Twitter,
  Send,
  Discord,
  Toggles,
} from "react-bootstrap-icons";

const Sidebar = () => {
  const ToogleSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("toogleSidebar");
  };

  return (
    <>
      <button className="showSidebar" onClick={ToogleSidebar}>
        <Toggles />
      </button>
      <div className="sidebar">
        <header className="sidebarHeader">
          <img src={logo} alt="" />
          <h2>Geavis Finance</h2>
        </header>
        <div className="sidebarBody">
          <ul className="links">
            <li>
              <a href="#">
                <HouseDoorFill /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <CurrencyExchange />
                <span>Exchange</span> <CaretDown className="downArrow" />
              </a>
            </li>
            <li>
              <a href="#">
                <ThreeDots className="moreDownArr" />
                <span>More</span> <CaretDown className="downArrow" />
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebarFooter">
          <ul className="sidebarFooterUl">
            <li>
              <a href="#">
                <Github />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Send />
              </a>
            </li>
            <li>
              <a href="#">
                <Discord />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
