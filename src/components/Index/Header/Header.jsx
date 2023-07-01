import React, { useState } from "react";
import "./Header.css";
import SettingIcons from "../../../assets/icons/SettingIcons";
import UserIcons from "../../../assets/icons/UserIcons";
import NotificationsIcons from "../../../assets/icons/NotificationsIcons";
import MenuIcons from "../../../assets/icons/MenuIcons";
import Settings from "../../Settings/Settings";
import OutsideClickHandler from "react-outside-click-handler";
import { useContext } from "react";
import { MainContext } from "../../../pages/Index/Index";
import { Link, useLocation } from "react-router-dom";
import ArrowDownIcons from "../../../assets/icons/ArrowDownIcons";
import { UserProviderContext } from "../../UserProvider/UserProvider";
import UserBalance from "../../Popup/UserBalance/UserBalance";
import numberWithCommas from "../../../function/number_separators";
import { useMediaQuery } from "react-responsive";
import MenuMobileIcons from "../../../assets/icons/MenuMobileIcons";

const Header = (props) => {
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1025px)" });
  const [openSetting, setOpenSetting] = useState(false);
  const [openBalance, setOpenBalance] = useState(false);
  const { setOpenHistoryBet } = useContext(MainContext);
  const { userBalance } = useContext(UserProviderContext);
  const { setOpenMenuMobile } = props;

  const location = useLocation();

  return (
    <div data-v-03c925ae data-v-2120bbd4 className="headerMaster">
      <div
        data-v-03c925ae
        className="px-0 boxHeader navbar fixed-top bgSecondary3 d-flex align-items-center py-2-px index"
      >
        <div data-v-03c925ae className="headerWapper w-100 px-30-px">
          <div
            data-v-03c925ae
            className="d-flex justify-content-between align-items-center w-100 "
          >
            <div
              data-v-03c925ae
              id="leftNav"
              className="h-100 d-flex align-items-center"
            >
              {/**/}
              {isDesktopScreen && (
                <Link
                  data-v-03c925ae
                  to="/index"
                  className="ml-1 logoMobile customBgLogo d-flex align-items-stretch router-link-exact-active router-link-active"
                  aria-current="page"
                >
                  <img
                    data-v-03c925ae
                    width={162}
                    height={50}
                    alt=""
                    src="	https://starisa2.net/img/logo-footer.2b873662.svg"
                  />
                  {/**/}
                  {/**/}
                </Link>
              )}
              {isMobileScreen && (
                <div
                  onClick={() => setOpenMenuMobile((prev) => !prev)}
                  data-v-03c925ae
                  className="mobile menuMobileIcon"
                >
                  <span data-v-03c925ae className="mobileIcon hide">
                    <MenuMobileIcons />
                  </span>
                </div>
              )}
            </div>
            <div data-v-03c925ae id="rightNav" className="d-flex">
              {/**/}
              <div
                data-v-03c925ae
                className="pr-0 d-flex align-items-center pr-lg-2"
              >
                <ul data-v-03c925ae className="nav infoMem align-items-center">
                  <li data-v-03c925ae className="nav-streak">
                    <a
                      data-v-03c925ae
                      href="/streak-challenge"
                      className="nav-link p-0"
                    >
                      <div data-v-03c925ae className="nav-streak-rewards ">
                        <span
                          data-v-03c925ae
                          className="nav-streak-rewards-label d-block"
                        >
                          Prize Pool
                        </span>
                        <span
                          data-v-03c925ae
                          className="nav-streak-rewards-value d-block"
                        >
                          $29.57K
                        </span>
                      </div>
                    </a>
                  </li>
                  <li
                    data-v-03c925ae
                    className="balance header-balance mr-lg-4"
                    style={{ borderRadius: "10px" }}
                  >
                    <OutsideClickHandler
                      onOutsideClick={() => setOpenBalance(false)}
                    >
                      <div data-v-03c925ae className="dropdown pointer">
                        <Link
                          data-v-03c925ae
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="buttonBalance d-flex align-items-center"
                          onClick={() => setOpenBalance(!openBalance)}
                        >
                          <div
                            data-v-03c925ae
                            className="mr-0 d-flex flex-column mr-lg-2"
                          >
                            <span
                              data-v-03c925ae
                              className="mb-1 text-left font-8 color-white"
                            >
                              Demo account
                            </span>
                            <div
                              data-v-03c925ae
                              className="d-flex align-items-center"
                            >
                              <span
                                data-v-03c925ae
                                className="colorWhite font-16"
                              >
                                <b data-v-03c925ae>
                                  $
                                  {numberWithCommas(
                                    userBalance?.d?.demoBalance
                                  ) ?? "_"}
                                </b>
                              </span>
                            </div>
                          </div>
                          <span data-v-03c925ae className="arrow">
                            <ArrowDownIcons />
                          </span>
                        </Link>
                        <UserBalance open={openBalance} />
                      </div>
                    </OutsideClickHandler>
                  </li>
                  {
                    isDesktopScreen && 
                    <li
                      data-v-03c925ae
                      className="mr-2 qDeposit position-relative"
                    >
                      <button
                        data-v-03c925ae
                        className="px-4 btn button btn-border btn-qDeposit primary"
                        style={{ borderRadius: "10px" }}
                      >
                        <span data-v-03c925ae className="colorSecondary">
                          Quick Deposit
                        </span>
                      </button>
                      {/**/}
                    </li>
                  }
                  {isDesktopScreen && (
                    <li data-v-03c925ae className="settings position-relative">
                      {
                        <OutsideClickHandler
                          onOutsideClick={() => setOpenSetting(false)}
                        >
                          <div
                            data-v-03c925ae
                            className="buttonSetting d-block align-items-center pointer pc"
                            onClick={() => setOpenSetting(!openSetting)}
                          >
                            <span data-v-03c925ae className="icon">
                              <SettingIcons />
                            </span>
                            <span data-v-03c925ae>Settings</span>
                          </div>
                          {openSetting === true && (
                            <div
                              data-v-7a073fd5
                              data-v-03c925ae
                              className="position-absolute top-0"
                            >
                              <Settings />
                              {/**/}
                            </div>
                          )}
                        </OutsideClickHandler>
                      }
                    </li>
                  )}
                  {isDesktopScreen && (
                    <li data-v-03c925ae className="px-2">
                      <Link
                        data-v-03c925ae
                        to="/user/profile"
                        className="p-0 nav-link"
                        id="profileLink"
                      >
                        <div
                          data-v-03c925ae
                          className="buttonColumn d-block align-items-center pointer pc"
                        >
                          <span
                            data-v-03c925ae
                            className="text-center d-block w-100"
                          >
                            <UserIcons />
                          </span>
                          <span data-v-03c925ae className="font-14 txtProfile ">
                            Profile
                          </span>
                        </div>
                      </Link>
                    </li>
                  )}
                  <li data-v-03c925ae className="settings  px-md-2 px-0 pl-2">
                    <div data-v-03c925ae className={isDesktopScreen ? "notification-dropdown" : "notification-dropdown-button mobile"}>
                      <div className="notification-dropdown-button">
                        <span className="notification-dropdown-button-icon">
                          <NotificationsIcons />
                        </span>
                        {
                          isDesktopScreen && 
                          <span className="notification-dropdown-button-text colorSecondary2">
                            Notification
                          </span>
                        }
                        <span className="notification-dropdown-button-number">
                          34
                        </span>
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                  </li>
                  <>
                    {isDesktopScreen && (
                      <>
                        {location.pathname === "/index" && (
                          <>
                            <li data-v-03c925ae className="px-2">
                              <span
                                data-v-03c925ae
                                className="line bgSecondary3"
                              />
                            </li>

                            <li data-v-03c925ae className="position-relative">
                              <div
                                data-v-03c925ae
                                className="buttonToggle pointer bgSecondary4"
                                onClick={() =>
                                  setOpenHistoryBet((prev) => !prev)
                                }
                              >
                                <MenuIcons />
                                <span
                                  data-v-03c925ae
                                  className="totalCount colorSecondary bgDanger text-uppercase"
                                  style={{ display: "none" }}
                                >
                                  {/*  */}
                                </span>
                              </div>
                            </li>
                          </>
                        )}
                      </>
                    )}
                  </>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-55ad9b88 data-v-03c925ae>
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
      {/**/}
    </div>
  );
};

export default Header;
