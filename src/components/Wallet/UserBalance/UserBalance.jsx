import React from "react";
import Navigation from "../Navigation/Navigation";

const UserBalance = () => {
  return (
    <div
      data-v-04d6ffed
      data-v-2120bbd4
      sticky-container
      id="balance-page"
      className="w-100 balance-page"
    >
      <div
        data-v-5866bac8
        data-v-04d6ffed
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
      <div data-v-04d6ffed className="mb-3" style={{ height: "55px" }}>
        <div />
        <div data-v-04d6ffed sticky-offset="{ top: 56 }" sticky-side="both">
          <div
            data-v-1acdca7e
            data-v-04d6ffed
            className="balance-link mb-4 bgSecondary4"
          >
            <div data-v-1acdca7e className="container">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-b4549eec
        data-v-04d6ffed
        className="container mb-5 main-account"
      >
        <div data-v-b4549eec className="row">
          <div
            data-v-b4549eec
            className="col d-flex justify-content-between align-items-baseline flexColumnMobile"
          >
            <h4 data-v-b4549eec className="colorSecondary main-account-title">
              <b data-v-b4549eec>Main balance:</b>
            </h4>
          </div>
        </div>
        <div data-v-b4549eec className="boxBalance">
          <div data-v-b4549eec className="row">
            <div data-v-b4549eec className="col-lg-6 col-my-sm-8 mb-3">
              <div
                data-v-b4549eec
                className="boxCoin bgSecondary4 borderRounded borderSecondary2"
              >
                <div
                  data-v-b4549eec
                  className="boxCoin-body borderBtSecondary2 align-content-center d-flex p-3"
                >
                  <div
                    data-v-b4549eec
                    className="leftBox d-flex flex-column flex-sm-row"
                  >
                    <div data-v-b4549eec className="d-flex align-items-center">
                      <span data-v-b4549eec className="mr-2">
                        <img
                          data-v-b4549eec
                          src="https://starisa.net/img/icon-usdt.f667059b.svg"
                          width={44}
                          height={44}
                          alt=""
                        />
                      </span>
                      {/**/}
                    </div>
                    <div data-v-b4549eec className="d-flex flex-column">
                      <span
                        data-v-b4549eec
                        className="text-uppercase font-weight-bold colorSecondary coin-symbol"
                      >
                        USDT
                        <span data-v-b4549eec className="colorSecondary2" />
                      </span>
                      <span
                        data-v-b4549eec
                        className="text-capitalize colorSecondary2 coin-name"
                      >
                        Tether
                      </span>
                    </div>
                  </div>
                  <div data-v-b4549eec className="rightBox">
                    <div
                      data-v-b4549eec
                      className="d-flex flex-column align-items-end"
                    >
                      <span
                        data-v-b4549eec
                        className="font-weight-bold colorSecondary coin-value-1"
                      >
                        0
                      </span>
                      <span
                        data-v-b4549eec
                        className="colorSecondary2 coin-value-2"
                      >
                        ~$0
                      </span>
                    </div>
                  </div>
                </div>
                <div data-v-b4549eec className="boxCoinFooter p-3 d-flex">
                  <div data-v-b4549eec>
                    <img
                      data-v-b4549eec
                      src="https://starisa.net/img/icon-deposit.afd6195e.svg"
                      alt=""
                      className="mr-1"
                    />
                    <a
                      data-v-b4549eec
                      href="#"
                      className="colorSecondary font-12 decoration-none"
                    >
                      Deposit
                    </a>
                  </div>
                  <div data-v-b4549eec>
                    <img
                      data-v-b4549eec
                      src="https://starisa.net/img/icon-withdraw.bc763a24.svg"
                      alt=""
                      className="mr-1"
                    />
                    <a
                      data-v-b4549eec
                      href="#"
                      className="colorSecondary font-12 decoration-none"
                    >
                      Withdraw
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        {/**/}
      </div>
      <div
        data-v-2e072a90
        data-v-04d6ffed
        className="container pb-2 pb-lg-4 transaction-history"
      >
        <h4
          data-v-2e072a90
          className="font-24 colorSecondary mb-4 transaction-history-title"
        >
          <b data-v-2e072a90>Transaction History</b>
        </h4>
        <div
          data-v-2e072a90
          className="history-nav"
          style={{ borderRadius: "4px 4px 0px 0px" }}
        >
          <ul data-v-2e072a90 className="nav nav-tabs">
            <li data-v-2e072a90 className="item active">
              <a data-v-2e072a90 href="#usdt">
                USDT
              </a>
            </li>
            <li data-v-2e072a90 className="item">
              <a data-v-2e072a90 href="#win_coms">
                <span data-v-2e072a90 className="win_coms" />
                Commission
              </a>
            </li>
          </ul>
        </div>
        <div data-v-2e072a90 className="boxResult bgSecondary4 mb-3">
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
            data-v-2e072a90
            className="list-unstyled borderTopUnset m-0  borderSecondary2 bgSecondary4 boxResult-content empty overflow-hidden"
            style={{ borderRadius: "0px 0px 4px 4px" }}
          >
            <li
              data-v-2e072a90
              className="item borderSecondary2 p-3 borderTopUnset"
            >
              <div data-v-2e072a90 className="block d-flex px-3">
                <div
                  data-v-2e072a90
                  className="block-col colorSecondary w-100 text-center"
                >
                  <span data-v-2e072a90>No Data</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/**/}
        <div data-v-7bb1ec37 data-v-2e072a90 className="authPopup">
          <div
            data-v-7bb1ec37
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            className="modal fade modalHistory"
          >
            <div data-v-7bb1ec37 className="modal-dialog modal-auth">
              <div data-v-7bb1ec37 className="close-page">
                <svg
                  data-v-7bb1ec37
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                >
                  <g
                    data-v-7bb1ec37
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    fill="#ffffff"
                    stroke="#ffffff"
                    className="nc-icon-wrapper"
                  >
                    <g
                      data-v-7bb1ec37
                      className="nc-interact_menu-close-2-o-32"
                    >
                      <path
                        data-v-7bb1ec37
                        fill="none"
                        stroke="#fff"
                        strokeMiterlimit={10}
                        d="M2 6h28"
                        transform="translate(0 10.00) rotate(45.00 16 6)"
                      />
                      <path
                        data-v-7bb1ec37
                        data-color="color-2"
                        fill="none"
                        strokeMiterlimit={10}
                        d="M2 16h28"
                        opacity={0}
                      />
                      <path
                        data-v-7bb1ec37
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
              <div data-v-7bb1ec37 className="modal-content bgSecondary8">
                <div data-v-7bb1ec37 className="row h-100">
                  <div data-v-7bb1ec37 className="col-lg-5 d-none d-md-block">
                    <div
                      data-v-7bb1ec37
                      className="leftBackground background-img"
                    />
                  </div>
                  <div
                    data-v-7bb1ec37
                    className="col-lg-7 align-items-center justify-content-center blockformPopup"
                  >
                    <div data-v-7bb1ec37 className="divCourseHistory">
                      <h4 data-v-7bb1ec37>{/**/}</h4>
                      <div data-v-7bb1ec37 className="detailCourseHistory">
                        <div data-v-7bb1ec37 className="d-flex">
                          <span
                            data-v-7bb1ec37
                            className="titleCourseHistory mr-2"
                          >
                            Time
                          </span>
                          <span data-v-7bb1ec37 className="ml-auto" />
                        </div>
                        <div data-v-7bb1ec37 className="d-flex">
                          <span
                            data-v-7bb1ec37
                            className="titleCourseHistory  mr-2"
                          >
                            Amount
                          </span>
                          {/**/}
                        </div>
                        <div data-v-7bb1ec37 className="d-flex txDescription">
                          <span
                            data-v-7bb1ec37
                            className="titleCourseHistory mr-2"
                          >
                            Txid/Description
                          </span>
                          {/**/}
                          {/**/}
                          {/**/}
                        </div>
                        <div data-v-7bb1ec37 className="d-flex">
                          <span
                            data-v-7bb1ec37
                            className="titleCourseHistory  mr-2"
                          >
                            Memo
                          </span>
                          {/**/}
                        </div>
                        <div data-v-7bb1ec37 className="d-flex">
                          <span
                            data-v-7bb1ec37
                            className="titleCourseHistory  mr-2"
                          >
                            Status
                          </span>
                          <span data-v-7bb1ec37 className="ml-auto" />
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
    </div>
  );
};

export default UserBalance;
