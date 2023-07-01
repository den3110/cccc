import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import open_result_transaction from "../../../api/transaction/open";
import close_result_transaction from "../../../api/transaction/close";
import "./HistoryBet.css";

const HistoryBet = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      if (toggle === true) {
        const result = await open_result_transaction({
          page: 1,
          size: 10,
          betAccountType: "DEMO",
        });
        setData(result);
      } else {
        const result = await close_result_transaction({
          page: 1,
          size: 10,
          betAccountType: "DEMO",
        });
        setData(result);
      }
    })();
  }, [toggle]);

  return (
    <div data-v-0dc9f329 className="flex-50 col-history">
      <div data-v-35bea3d4 data-v-0dc9f329 id="binaryTransaction">
        <ul data-v-35bea3d4 id="myTab" role="tablist" className="nav nav-tabs">
          <li data-v-35bea3d4 className="nav-item">
            <Link
              onClick={() => setToggle(true)}
              data-v-35bea3d4
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              className={`nav-link ${toggle ? "active" : ""}`}
            >
              <span data-v-35bea3d4 className="text-uppercase">
                Open
              </span>
              <span
                data-v-35bea3d4
                className="totalCount text-uppercase"
                style={{ display: "none" }}
              >
                0
              </span>
            </Link>
          </li>
          <li data-v-35bea3d4 className="nav-item">
            <Link
              onClick={() => setToggle(false)}
              data-v-35bea3d4
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              className={`nav-link ${!toggle ? "active" : ""}`}
            >
              <span data-v-35bea3d4 className="text-uppercase">
                Closed
              </span>
            </Link>
          </li>
        </ul>
        <section
          data-v-35bea3d4
          className="ps-container scroll-area ps ps--theme_default"
          data-ps-id="97bec2bc-170e-856c-904b-ec8f98a997d5"
        >
          <div data-v-35bea3d4 id="myTabContent" className="tab-content h-100">
            <div
              data-v-64e012c6
              data-v-35bea3d4
              className={`${data?.d?.c?.length <= 0 ? "d-flex flex-column align-items-center justify-content-center h-100" : "d-flex flex-column justify-content-between h-100 scroll-y-history"}`}
            >
              {data?.d?.c?.length <= 0 && (
                <Fragment>
                  <svg
                    data-v-64e012c6
                    xmlns="http://www.w3.org/2000/svg"
                    width="82.083"
                    height="82.104"
                    viewBox="0 0 82.083 82.104"
                  >
                    <g
                      data-v-64e012c6
                      id="conversion"
                      transform="translate(82.091 41.045) rotate(135)"
                      opacity="0.2"
                    >
                      <path
                        data-v-64e012c6
                        id="Path_26243"
                        data-name="Path 26243"
                        d="M54.414,25.393H3.628A3.427,3.427,0,0,1,0,21.766a3.427,3.427,0,0,1,3.628-3.628h42.08L33.737,6.167a3.507,3.507,0,0,1,0-5.079,3.507,3.507,0,0,1,5.079,0L56.953,19.226a3.311,3.311,0,0,1,.726,3.99A3.486,3.486,0,0,1,54.414,25.393Z"
                        transform="translate(0.011 0)"
                        fill="#fff"
                      />
                      <path
                        data-v-64e012c6
                        id="Path_26244"
                        data-name="Path 26244"
                        d="M21.776,34.393A3.293,3.293,0,0,1,19.237,33.3L1.1,15.167a3.311,3.311,0,0,1-.726-3.99A3.486,3.486,0,0,1,3.638,9H54.425a3.427,3.427,0,0,1,3.628,3.628,3.427,3.427,0,0,1-3.628,3.628H12.345L24.316,28.226a3.507,3.507,0,0,1,0,5.079A3.293,3.293,0,0,1,21.776,34.393Z"
                        transform="translate(0 23.649)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <p
                    data-v-64e012c6
                    className="font-14 font-8m mt-3 color-grey text-center"
                  >
                    You have not made any open order
                  </p>
                </Fragment>
              )}
              {data?.d?.c?.length > 0 && (
                <>
                  <div data-v-64e012c6>
                    <div data-v-64e012c6>
                      <p data-v-64e012c6 className="font-16 color-gray mt-3">
                        06/26/2023
                      </p>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:57
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:56
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:56
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:56
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:55
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:55
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendDown"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Bán
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:55
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winDown"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            {/**/}$0{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendUp"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Mua
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:54
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winUp"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            <span data-v-64e012c6>+</span>$19.5{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendUp"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Mua
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:54
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winUp"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            <span data-v-64e012c6>+</span>$19.5{" "}
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-64e012c6
                        className="transactionBox font-14 mb-2"
                        style={{ borderRadius: "4px" }}
                      >
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="font-14 font-weight-700"
                          >
                            BTC/USD{" "}
                            <span
                              data-v-64e012c6
                              className="accType font-10 text-primary"
                            >
                              DEMO
                            </span>
                          </span>
                          <span data-v-64e012c6 className="icon iconBitcoin" />
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between mb-2"
                        >
                          <span
                            data-v-64e012c6
                            className="trendGroup d-flex align-items-center"
                          >
                            <span
                              data-v-64e012c6
                              className="trendIcon mr-2 trendUp"
                            />
                            <span data-v-64e012c6 className="text-uppercase">
                              Mua
                            </span>
                          </span>
                          <span data-v-64e012c6 className="font-12m">
                            $10
                          </span>
                        </div>
                        <div
                          data-v-64e012c6
                          className="d-flex justify-content-between"
                        >
                          <span data-v-64e012c6 className="font-12 time">
                            00:50:53
                          </span>
                          <span
                            data-v-64e012c6
                            className="totalWin font-weight-700 font-12m winUp"
                          >
                            <span data-v-64e012c6 className="text-uppercase" />
                            <span data-v-64e012c6>+</span>$19.5{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className="ps__scrollbar-x-rail"
            style={{ left: "0px", bottom: "0px" }}
          >
            <div
              className="ps__scrollbar-x"
              tabIndex={0}
              style={{ left: "0px", width: "0px" }}
            />
          </div>
          <div
            className="ps__scrollbar-y-rail"
            style={{ top: "0px", right: "0px" }}
          >
            <div
              className="ps__scrollbar-y"
              tabIndex={0}
              style={{ top: "0px", height: "0px" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryBet;
