import "./Main.css";
import wbnb from "../../assets/icons/wbnb.png";
import wbnb2 from "../../assets/icons/wbnb2.png";
import {
  Gear,
  ArrowCounterclockwise,
  CurrencyExchange,
  CaretDown,
} from "react-bootstrap-icons";

const Main = () => {
  return (
    <div className="mainWrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <div className="main">
              <div className="swapPool">
                <button className="univarsalBtn spBTN swapBtn">Swap</button>
                <button className="univarsalBtn spBTN poolBtn">Pool</button>
              </div>

              <div className="swap">
                <div className="swapHeader">
                  <div className="swapTitles">
                    <h6>Swap</h6>
                    <p>Trade tokens in an instant</p>
                  </div>
                  <div className="swapIcons">
                    <button>
                      <img src={wbnb} className="swapBtnImg" />
                    </button>
                    <button>
                      <Gear />
                    </button>
                    <button>
                      <ArrowCounterclockwise />
                    </button>
                  </div>
                </div>

                <div className="swapInputs">
                  <div className="customInput fromInput">
                    <label htmlFor="from">From</label>
                    <input type="text" id="from" placeholder="0.0" />
                    <p className="inputSelector">
                      <img src={wbnb2} />
                      <span>BNB</span>
                      <CaretDown />
                    </p>
                  </div>
                  <div className="exchangeIcon">
                    <CurrencyExchange />
                  </div>
                  <div className="customInput toInput">
                    <label htmlFor="from">To</label>
                    <input type="text" id="from" placeholder="0.0" />
                    <p className="inputSelector">
                      <span>Select a token</span>
                      <CaretDown />
                    </p>
                  </div>
                </div>
                <button className="univarsalBtn unlockBtn">
                  Unlock Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
