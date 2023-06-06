import React from "react";
import Navigation from "../Navigation/Navigation";

const BinaryWallet = () => {
  return (
    <div
      data-v-a871ab42
      data-v-2120bbd4
      sticky-container
      className="w-100 balance-page"
    >
      <div
        data-v-5866bac8
        data-v-a871ab42
        className="subBanner w-100 bgPrimary1 py-5"
      >
        <div data-v-5866bac8 className="container">
          <div
            data-v-5866bac8
            className="d-block justify-content-between mb-2 position-relative"
          >
            <h2
              data-v-5866bac8
              className="subBanner-title font-weight-normal mb-0 colorSecondary2 font-18"
            >
              Total Assets (USDT)
            </h2>
            <a
              data-v-5866bac8
              href="javascript: void(0);"
              className="btnEyes d-flex align-items-center colorSecondary position-absolute"
            >
              <span data-v-5866bac8 className="btn-eyes" />
              <span data-v-5866bac8>Hide balance</span>
            </a>
          </div>
          <div
            data-v-5866bac8
            className="font-weight-bold colorSecondary d-flex align-items-center mt-3 mr-2 font-44"
          >
            <span data-v-5866bac8 className="user-balance">
              0
            </span>
            <span data-v-5866bac8 className="coin-default mr-2 ml-3" />
          </div>
        </div>
      </div>
      <div data-v-a871ab42 className="mb-3" style={{ height: "55px" }}>
        <div />
        <div data-v-a871ab42 sticky-offset="{ top: 56 }" sticky-side="both">
          <div
            data-v-1acdca7e
            data-v-a871ab42
            className="balance-link mb-4 bgSecondary4"
          >
            <div data-v-1acdca7e className="container">
                <Navigation />
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-a30c08c2
        data-v-a871ab42
        className="container mb-5"
        transfer="function () { [native code] }"
      >
        <div data-v-a30c08c2 className="row">
          <div data-v-a30c08c2 className="col-sm-6">
            <div
              data-v-a30c08c2
              className="wallet-account wallet-account--live position-relative"
            >
              <div
                data-v-a30c08c2
                className="wallet-account-content position-absolute d-flex flex-column justify-content-center align-items-center"
              >
                <span
                  data-v-a30c08c2
                  className="wallet-account-title font-18 font-weight-bold mb-2"
                >
                  Live account
                </span>
                <span
                  data-v-a30c08c2
                  className="wallet-account-price font-34 font-weight-bold colorSecondary mb-2"
                >
                  $0
                </span>
                <button
                  data-v-a30c08c2
                  type="button"
                  className="btn btn-primary btn-lg wallet-account-btn colorSecondary button primary"
                >
                  <span data-v-a30c08c2 className="iconSubmit d-flex">
                    <svg
                      data-v-a30c08c2
                      xmlns="http://www.w3.org/2000/svg"
                      width="21.981"
                      height="21.986"
                      viewBox="0 0 21.981 21.986"
                    >
                      <g
                        data-v-a30c08c2
                        id="conversion"
                        transform="translate(21.981 10.993) rotate(135)"
                      >
                        <path
                          data-v-a30c08c2
                          id="Path_26243"
                          data-name="Path 26243"
                          d="M14.571,6.8H.971A.918.918,0,0,1,0,5.829a.918.918,0,0,1,.971-.971H12.24L9.034,1.651a.939.939,0,0,1,0-1.36.939.939,0,0,1,1.36,0l4.857,4.857a.887.887,0,0,1,.194,1.069A.934.934,0,0,1,14.571,6.8Z"
                          transform="translate(0 0)"
                          className="color-icon-exchange-wallet"
                        />
                        <path
                          data-v-a30c08c2
                          id="Path_26244"
                          data-name="Path 26244"
                          d="M5.828,15.8a.882.882,0,0,1-.68-.291L.291,10.651A.887.887,0,0,1,.1,9.583.934.934,0,0,1,.971,9h13.6a.918.918,0,0,1,.971.971.918.918,0,0,1-.971.971H3.3l3.206,3.206a.939.939,0,0,1,0,1.36A.882.882,0,0,1,5.828,15.8Z"
                          transform="translate(0 -0.257)"
                          className="color-icon-exchange-wallet"
                        />
                      </g>
                    </svg>
                  </span>
                  <span data-v-a30c08c2 className="font-16">
                    Transfer
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div data-v-a30c08c2 className="col-sm-6">
            <div
              data-v-a30c08c2
              className="wallet-account wallet-account--demo position-relative"
            >
              <div className="loading">
                <div className="loading__ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                  >
                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                  </svg>
                </div>
                <div className="loading__ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                  >
                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                  </svg>
                </div>
              </div>
              <div
                data-v-a30c08c2
                className="wallet-account-content position-absolute d-flex flex-column justify-content-center align-items-center"
              >
                <span
                  data-v-a30c08c2
                  className="wallet-account-title font-18 font-weight-bold mb-2"
                >
                  Demo account
                </span>
                <span
                  data-v-a30c08c2
                  className="wallet-account-price font-34 font-weight-bold colorSecondary mb-2"
                >
                  $820
                </span>
                <button
                  data-v-a30c08c2
                  type="button"
                  className="btn btn-primary btn-lg wallet-account-btn colorSecondary button primary"
                >
                  <span data-v-a30c08c2 className="iconSubmit d-flex">
                    <svg
                      data-v-a30c08c2
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.795"
                      height="18.488"
                      viewBox="0 0 17.795 18.488"
                    >
                      <g
                        data-v-a30c08c2
                        id="refresh-01"
                        transform="translate(-1 0.081)"
                      >
                        <path
                          data-v-a30c08c2
                          id="Path_26259"
                          data-name="Path 26259"
                          d="M18.8,7.366,17.555-.081,14.993,2.481a8.8,8.8,0,1,0,2.9,10.641.8.8,0,0,0-1.468-.642,7.215,7.215,0,1,1-2.573-8.854l-2.5,2.5Z"
                          className="color-icon-exchange-wallet"
                        />
                      </g>
                    </svg>
                  </span>
                  <span data-v-a30c08c2 className="font-16">
                    Refill balance
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div data-v-a30c08c2 className="px-2" style={{ display: "none" }}>
          <div
            data-v-a30c08c2
            className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
          >
            <div
              data-v-a30c08c2
              className="swiper-wrapper"
              id="swiper-wrapper-74f280310024f6bc10"
              aria-live="polite"
              style={{ transitionDuration: "0ms" }}
            >
              <div data-v-a30c08c2 className="swiper-slide">
                <div
                  data-v-a30c08c2
                  className="wallet-account wallet-account--live position-relative"
                >
                  <div
                    data-v-a30c08c2
                    className="wallet-account-content position-absolute d-flex flex-column justify-content-center align-items-center"
                  >
                    <span
                      data-v-a30c08c2
                      className="mb-3 wallet-account-title font-18 mb-2"
                    >
                      Live account
                    </span>
                    <span
                      data-v-a30c08c2
                      className="mb-3 wallet-account-price font-34 colorSecondary mb-2"
                    >
                      $0
                    </span>
                    <button
                      data-v-a30c08c2
                      type="button"
                      className="btn btn-primary btn-lg wallet-account-btn colorSecondary button primary"
                    >
                      <span data-v-a30c08c2 className="iconSubmit d-flex">
                        <svg
                          data-v-a30c08c2
                          xmlns="http://www.w3.org/2000/svg"
                          width="21.981"
                          height="21.986"
                          viewBox="0 0 21.981 21.986"
                        >
                          <g
                            data-v-a30c08c2
                            id="conversion"
                            transform="translate(21.981 10.993) rotate(135)"
                          >
                            <path
                              data-v-a30c08c2
                              id="Path_26243"
                              data-name="Path 26243"
                              d="M14.571,6.8H.971A.918.918,0,0,1,0,5.829a.918.918,0,0,1,.971-.971H12.24L9.034,1.651a.939.939,0,0,1,0-1.36.939.939,0,0,1,1.36,0l4.857,4.857a.887.887,0,0,1,.194,1.069A.934.934,0,0,1,14.571,6.8Z"
                              transform="translate(0 0)"
                              className="color-icon-exchange-wallet"
                            />
                            <path
                              data-v-a30c08c2
                              id="Path_26244"
                              data-name="Path 26244"
                              d="M5.828,15.8a.882.882,0,0,1-.68-.291L.291,10.651A.887.887,0,0,1,.1,9.583.934.934,0,0,1,.971,9h13.6a.918.918,0,0,1,.971.971.918.918,0,0,1-.971.971H3.3l3.206,3.206a.939.939,0,0,1,0,1.36A.882.882,0,0,1,5.828,15.8Z"
                              transform="translate(0 -0.257)"
                              className="color-icon-exchange-wallet"
                            />
                          </g>
                        </svg>
                      </span>
                      <span data-v-a30c08c2>Transfer</span>
                    </button>
                  </div>
                </div>
              </div>
              <div data-v-a30c08c2 className="swiper-slide">
                <div
                  data-v-a30c08c2
                  className="wallet-account wallet-account--demo position-relative"
                >
                  <div className="loading">
                    <div className="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 100 100" }}
                        xmlSpace="preserve"
                      >
                        <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                      </svg>
                    </div>
                    <div className="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 100 100" }}
                        xmlSpace="preserve"
                      >
                        <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    data-v-a30c08c2
                    className="wallet-account-content position-absolute d-flex flex-column justify-content-center align-items-center"
                  >
                    <span
                      data-v-a30c08c2
                      className="mb-3 wallet-account-title font-18 font-weight-bold mb-2"
                    >
                      Demo account
                    </span>
                    <span
                      data-v-a30c08c2
                      className="mb-3 wallet-account-price font-34 font-weight-bold colorSecondary mb-2"
                    >
                      $820
                    </span>
                    <button
                      data-v-a30c08c2
                      type="button"
                      className="btn btn-primary btn-lg wallet-account-btn colorSecondary button primary"
                    >
                      <span data-v-a30c08c2 className="iconSubmit d-flex">
                        <svg
                          data-v-a30c08c2
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.795"
                          height="18.488"
                          viewBox="0 0 17.795 18.488"
                        >
                          <g
                            data-v-a30c08c2
                            id="refresh-01"
                            transform="translate(-1 0.081)"
                          >
                            <path
                              data-v-a30c08c2
                              id="Path_26259"
                              data-name="Path 26259"
                              d="M18.8,7.366,17.555-.081,14.993,2.481a8.8,8.8,0,1,0,2.9,10.641.8.8,0,0,0-1.468-.642,7.215,7.215,0,1,1-2.573-8.854l-2.5,2.5Z"
                              className="color-icon-exchange-wallet"
                            />
                          </g>
                        </svg>
                      </span>
                      <span data-v-a30c08c2>Refill balance</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
        <div data-v-55ad9b88 data-v-a30c08c2>
          <div
            data-v-55ad9b88
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            className="modal fade modalTransfer"
          >
            <div data-v-55ad9b88 className="modal-dialog">
              <div data-v-55ad9b88 className="modal-content-info h-100">
                <button
                  data-v-55ad9b88
                  type="button"
                  aria-label="Close"
                  className="close"
                >
                  <svg
                    data-v-55ad9b88
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <g
                      data-v-55ad9b88
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={2}
                      fill="currentColor"
                      stroke="currentColor"
                      className="nc-icon-wrapper"
                    >
                      <g
                        data-v-55ad9b88
                        className="nc-interact_menu-close-2-o-32"
                      >
                        <path
                          data-v-55ad9b88
                          fill="currentColor"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                          d="M2 6h28"
                          transform="translate(0 10.00) rotate(45.00 16 6)"
                        />
                        <path
                          data-v-55ad9b88
                          data-color="color-2"
                          fill="currentColor"
                          strokeMiterlimit={10}
                          d="M2 16h28"
                          opacity={0}
                        />
                        <path
                          data-v-55ad9b88
                          fill="currentColor"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                          d="M2 26h28"
                          transform="translate(0 -10) rotate(-45 16 26)"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
                <div data-v-55ad9b88 className="modal-body-popup text-center">
                  <div className="loading">
                    <div className="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 100 100" }}
                        xmlSpace="preserve"
                      >
                        <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                      </svg>
                    </div>
                    <div className="loading__ring">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 100"
                        style={{ enableBackground: "new 0 0 100 100" }}
                        xmlSpace="preserve"
                      >
                        <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                      </svg>
                    </div>
                  </div>
                  <div data-v-55ad9b88 className="header d-flex bgSecondary3">
                    <div
                      data-v-55ad9b88
                      className="leftHeader d-flex flex-column align-items-center"
                    >
                      <span data-v-55ad9b88 className="font-14 mb-2">
                        <span
                          data-v-55ad9b88
                          className="color-blue text-uppercase mr-1"
                        >
                          USDT
                        </span>
                        <span data-v-55ad9b88>Wallet</span>
                      </span>
                      <span data-v-55ad9b88 className="font-26 font-weight-700">
                        0
                      </span>
                    </div>
                    <div
                      data-v-55ad9b88
                      className="rightHeader d-flex flex-column align-items-center"
                    >
                      <span data-v-55ad9b88 className="font-14 mb-2">
                        Live account
                      </span>
                      <span data-v-55ad9b88 className="font-26 font-weight-700">
                        0
                      </span>
                    </div>
                    <div
                      data-v-55ad9b88
                      href="#"
                      className="changeAmount pointer"
                    >
                      <svg
                        data-v-55ad9b88
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        className="iconTransfer"
                      >
                        <g
                          data-v-55ad9b88
                          id="Group_10897"
                          data-name="Group 10897"
                          transform="translate(-559.431 -202.553)"
                        >
                          <g
                            data-v-55ad9b88
                            id="Group_4613"
                            data-name="Group 4613"
                            transform="translate(559.431 202.553)"
                          >
                            <g
                              data-v-55ad9b88
                              id="Rectangle_2919"
                              data-name="Rectangle 2919"
                              transform="translate(0)"
                              fill="#e9f0fa"
                              stroke="#e5e5e5"
                              strokeWidth={1}
                            >
                              <rect
                                data-v-55ad9b88
                                width={30}
                                height={30}
                                rx={15}
                                stroke="none"
                              />
                              <rect
                                data-v-55ad9b88
                                x="0.5"
                                y="0.5"
                                width={29}
                                height={29}
                                rx="14.5"
                                fill="none"
                              />
                            </g>
                          </g>
                          <g
                            data-v-55ad9b88
                            id="conversion"
                            transform="translate(567.976 210.905)"
                          >
                            <path
                              data-v-55ad9b88
                              id="Path_13963"
                              data-name="Path 13963"
                              d="M13.474,6.51H1V5.376H12.1l-3.4-3.4.8-.8,4.37,4.37a.567.567,0,0,1-.4.968Z"
                              transform="translate(-1 -1.172)"
                              fill="#031219"
                            />
                            <path
                              data-v-55ad9b88
                              id="Path_13964"
                              data-name="Path 13964"
                              d="M5.536,33.338l-4.37-4.37a.567.567,0,0,1,.4-.968H14.041v1.134H2.936l3.4,3.4Z"
                              transform="translate(-1 -20.395)"
                              fill="#031219"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-v-55ad9b88
                    className="content d-flex flex-column align-items-center bgSecondary4"
                  >
                    <div data-v-55ad9b88 className="inputGroup mb-3 w-75">
                      <input
                        data-v-55ad9b88
                        type="number"
                        placeholder="Enter amount"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        className="form-control w-100 borderRound"
                      />
                      <div data-v-55ad9b88 className="input-append">
                        <button
                          data-v-55ad9b88
                          type="button"
                          id="button-addon2"
                          className="btn colorSuccess"
                        >
                          All
                        </button>
                      </div>
                    </div>
                    <button
                      data-v-55ad9b88
                      className="button btn-border-radius btn-large primary w-75 font-weight-bold"
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-e07fece8 data-v-55ad9b88>
            <div
              data-v-e07fece8
              tabIndex={-1}
              role="dialog"
              aria-hidden="true"
              className="modal fade modalTransferSuccess"
            >
              <div data-v-e07fece8 className="modal-dialog">
                <div data-v-e07fece8 className="modal-content-info h-100">
                  <button
                    data-v-e07fece8
                    type="button"
                    aria-label="Close"
                    className="close"
                  >
                    <svg
                      data-v-e07fece8
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                    >
                      <g
                        data-v-e07fece8
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={2}
                        fill="currentColor"
                        stroke="currentColor"
                        className="nc-icon-wrapper"
                      >
                        <g
                          data-v-e07fece8
                          className="nc-interact_menu-close-2-o-32"
                        >
                          <path
                            data-v-e07fece8
                            fill="currentColor"
                            stroke="currentColor"
                            strokeMiterlimit={10}
                            d="M2 6h28"
                            transform="translate(0 10.00) rotate(45.00 16 6)"
                          />
                          <path
                            data-v-e07fece8
                            data-color="color-2"
                            fill="currentColor"
                            strokeMiterlimit={10}
                            d="M2 16h28"
                            opacity={0}
                          />
                          <path
                            data-v-e07fece8
                            fill="currentColor"
                            stroke="currentColor"
                            strokeMiterlimit={10}
                            d="M2 26h28"
                            transform="translate(0 -10) rotate(-45 16 26)"
                          />
                        </g>
                      </g>
                    </svg>
                  </button>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-eb166be6
        data-v-a871ab42
        className="container exchange-history"
      >
        <h4
          data-v-eb166be6
          className="font-24 colorSecondary mb-3 exchange-history-title"
        >
          <b data-v-eb166be6>Transaction History</b>
        </h4>
        <div
          data-v-eb166be6
          className="boxResult bgSecondary4 borderRounded borderSecondary2 mb-3 overflow-hidden"
          style={{ borderRadius: "4px" }}
        >
          <div className="loading">
            <div className="loading__ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                style={{ enableBackground: "new 0 0 100 100" }}
                xmlSpace="preserve"
              >
                <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
              </svg>
            </div>
            <div className="loading__ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                style={{ enableBackground: "new 0 0 100 100" }}
                xmlSpace="preserve"
              >
                <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
              </svg>
            </div>
          </div>
          <ul
            data-v-eb166be6
            className="list-unstyled m-0 exchange-history-content empty"
          >
            <li
              data-v-eb166be6
              className="item borderBtSecondary4 py-2 d-flex justify-content-center"
            >
              <div data-v-eb166be6 className="block d-flex px-3">
                <div
                  data-v-eb166be6
                  className="block-col colorSecondary w-100 text-center"
                >
                  <span data-v-eb166be6>No Data</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/**/}
        <div data-v-2a590218 data-v-eb166be6 className="authPopup">
          <div
            data-v-2a590218
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            className="modal fade modalHistory"
          >
            <div data-v-2a590218 className="modal-dialog modal-auth">
              <div data-v-2a590218 className="close-page">
                <svg
                  data-v-2a590218
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                >
                  <g
                    data-v-2a590218
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    fill="#ffffff"
                    stroke="#ffffff"
                    className="nc-icon-wrapper"
                  >
                    <g
                      data-v-2a590218
                      className="nc-interact_menu-close-2-o-32"
                    >
                      <path
                        data-v-2a590218
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit={10}
                        d="M2 6h28"
                        transform="translate(0 10.00) rotate(45.00 16 6)"
                      />
                      <path
                        data-v-2a590218
                        data-color="color-2"
                        fill="none"
                        strokeMiterlimit={10}
                        d="M2 16h28"
                        opacity={0}
                      />
                      <path
                        data-v-2a590218
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit={10}
                        d="M2 26h28"
                        transform="translate(0 -10) rotate(-45 16 26)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div data-v-2a590218 className="modal-content bgSecondary8">
                <div data-v-2a590218 className="row h-100">
                  <div data-v-2a590218 className="col-lg-5 d-none d-md-block">
                    <div
                      data-v-2a590218
                      className="leftBackground background-img"
                    />
                  </div>
                  <div
                    data-v-2a590218
                    className="col-lg-7 align-items-center justify-content-center blockformPopup"
                  >
                    <div data-v-2a590218 className="divCourseHistory">
                      <h4 data-v-2a590218>{/**/}</h4>
                      <div data-v-2a590218 className="detailCourseHistory">
                        <div data-v-2a590218 className="d-flex">
                          <span
                            data-v-2a590218
                            className="mr-2 titleCourseHistory"
                          >
                            Time
                          </span>
                          <span data-v-2a590218 className="ml-auto" />
                        </div>
                        <div data-v-2a590218 className="d-flex">
                          <span
                            data-v-2a590218
                            className="mr-2 titleCourseHistory"
                          >
                            Amount
                          </span>
                          {/**/}
                        </div>
                        <div data-v-2a590218 className="d-flex">
                          <span
                            data-v-2a590218
                            className="mr-2 titleCourseHistory"
                          >
                            Txid/Description
                          </span>
                          <span data-v-2a590218 className="ml-auto">
                            {" "}
                          </span>
                        </div>
                        <div data-v-2a590218 className="d-flex">
                          <span
                            data-v-2a590218
                            className="mr-2 titleCourseHistory"
                          >
                            Status
                          </span>
                          <span data-v-2a590218 className="ml-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/}
    </div>
  );
};

export default BinaryWallet;
