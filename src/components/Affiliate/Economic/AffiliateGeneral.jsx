import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
const AffiliateGeneral = () => {
  const [openPopup, setOpenPopup] = useState(false);
  
  return (
    <div data-v-94088026 data-v-2120bbd4 className="bodyContent affiliatePage">
      <div data-v-94088026>
        <div data-v-94088026>
          <div
            data-v-94088026
            className="banner"
            style={{
              backgroundImage:
                'url("https://starisa.azureedge.net/affiliate_bg.png")',
            }}
          >
            {/**/}
            <div data-v-94088026 className="content">
              <div data-v-94088026 className="container h-100">
                <div data-v-94088026 className="row h-100 align-items-center">
                  <div data-v-94088026 className="col-lg-6 col-6-landscape">
                    <p
                      data-v-94088026
                      className="font-30 font-18m font-weight-700 color-white line-height-normal mb-4"
                    >
                      You need to buy VIP license to receive VIP commissions and
                      trading commissions
                    </p>
                    <button
                      data-v-94088026
                      type="button"
                      className="btn button primary btn-green btn-large"
                      onClick={() => setOpenPopup(!openPopup)}
                    >
                      Buy now $100
                    </button>
                  </div>
                  <div
                    data-v-94088026
                    className="col-lg-6 col-6-landscape affiliateInfoMobile"
                  >
                    <div
                      data-v-94088026
                      className="affiliateInfo bgSecondary4 borderPrimary"
                    >
                      <div data-v-94088026 className="linkGroup">
                        <div
                          data-v-94088026
                          className="row flex-column justify-content-center"
                        >
                          <div data-v-94088026 className="col-lg-12">
                            <p
                              data-v-94088026
                              className="font-14 color-light-gray colorSecondary2 mb-2 label"
                            >
                              Registration link
                            </p>
                            <div data-v-94088026 className="inputGroup mb-3">
                              <input
                                data-v-94088026
                                readOnly="readonly"
                                type="text"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                className="form-control w-100"
                              />
                              <div
                                data-v-94088026
                                className="input-append d-flex align-items-center h-100"
                              >
                                <button
                                  data-v-94088026
                                  type="button"
                                  id="button-addon2"
                                  className="btn button primary"
                                >
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>
                          <div data-v-94088026 className="col-lg-6">
                            <p
                              data-v-94088026
                              className="font-14 color-light-gray mb-2 colorSecondary2 label"
                            >
                              Invitation code
                            </p>
                            <div data-v-94088026 className="inputGroup mb-3">
                              <input
                                data-v-94088026
                                readOnly="readonly"
                                type="text"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                className="form-control w-100"
                              />
                              <div
                                data-v-94088026
                                className="input-append d-flex align-items-center h-100"
                              >
                                <button
                                  data-v-94088026
                                  type="button"
                                  id="button-addon2"
                                  className="btn button primary"
                                >
                                  Copy
                                </button>
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
          <div
            data-v-94088026
            className="subBanner bgSecondary4 d-flex align-items-center"
          >
            <div data-v-4d1da48e data-v-94088026 className="container">
              <div data-v-4d1da48e className="row align-items--center">
                <div data-v-4d1da48e className="col">
                  <div
                    data-v-4d1da48e
                    className="d-flex boxContent h-100 align-items-center"
                  >
                    <div data-v-4d1da48e className="d-flex align-items-center">
                      <div data-v-4d1da48e>
                        <div data-v-4d1da48e className="icon iconInvite" />
                      </div>
                      <div data-v-4d1da48e>
                        <div data-v-4d1da48e className="textContent">
                          <p data-v-4d1da48e className="mb-1 title">
                            Invite Friends
                          </p>
                          <p
                            data-v-4d1da48e
                            className="color-white-50 mb-0 des"
                          >
                            Invite friends to register starisa.net through the
                            link
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-4d1da48e className="borderSubBanner" />
                <div data-v-4d1da48e className="col">
                  <div
                    data-v-4d1da48e
                    className="d-flex boxContent h-100 align-items-center"
                  >
                    <div data-v-4d1da48e className="d-flex align-items-center">
                      <div data-v-4d1da48e>
                        <div data-v-4d1da48e className="icon iconSign" />
                      </div>
                      <div data-v-4d1da48e>
                        <div data-v-4d1da48e className="textContent">
                          <p data-v-4d1da48e className="mb-1 title">
                            Friends sign-up
                          </p>
                          <p
                            data-v-4d1da48e
                            className="color-white-50 mb-0 des"
                          >
                            Friends accept the invitation, complete registration
                            and play
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-4d1da48e className="borderSubBanner" />
                <div data-v-4d1da48e className="col">
                  <div
                    data-v-4d1da48e
                    className="d-flex boxContent h-100 align-items-center"
                  >
                    <div data-v-4d1da48e className="d-flex align-items-center">
                      <div data-v-4d1da48e>
                        <div data-v-4d1da48e className="icon iconCommission" />
                      </div>
                      <div data-v-4d1da48e>
                        <div data-v-4d1da48e className="textContent">
                          <p data-v-4d1da48e className="mb-1 title">
                            Get a corresponding proportion of commission
                          </p>
                          <p
                            data-v-4d1da48e
                            className="color-white-50 mb-0 des"
                          >
                            Easily get commission
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-4d48c421 data-v-94088026 className="authPopup">
          <div
            data-v-4d48c421
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            className={`modal ${openPopup ? "" : "fade"} modalBuyNow`}
            style={{ display: openPopup ? "block" : "none" }}
          >
            <div data-v-4d48c421 className="modal-dialog modal-auth">
              <div
                onClick={() => setOpenPopup(false)}
                data-v-4d48c421
                className="close-page"
              >
                <svg
                  data-v-4d48c421
                  data-v-75485923
                  data-v-0f05a894
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <g
                    data-v-4d48c421
                    data-v-75485923
                    data-v-0f05a894
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    fill="#ffffff"
                    stroke="#ffffff"
                    className="nc-icon-wrapper"
                  >
                    <g
                      data-v-4d48c421
                      data-v-75485923
                      data-v-0f05a894
                      className="nc-interact_menu-close-2-o-32"
                    >
                      <path
                        data-v-4d48c421
                        data-v-75485923
                        data-v-0f05a894
                        fill="none"
                        stroke="#ffffff"
                        strokeMiterlimit={10}
                        d="M2 6h28"
                        transform="translate(0 10.00) rotate(45.00 16 6)"
                      />
                      <path
                        data-v-4d48c421
                        data-v-75485923
                        data-v-0f05a894
                        data-color="color-2"
                        fill="none"
                        strokeMiterlimit={10}
                        d="M2 16h28"
                        opacity={0}
                      />
                      <path
                        data-v-4d48c421
                        data-v-75485923
                        data-v-0f05a894
                        fill="none"
                        stroke="#ffffff"
                        strokeMiterlimit={10}
                        d="M2 26h28"
                        transform="translate(0 -10) rotate(-45 16 26)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div data-v-4d48c421 className="modal-content bgSecondary4">
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
                <OutsideClickHandler onOutsideClick={() => setOpenPopup(false)}>
                  <div data-v-4d48c421 className="contentWrapper">
                    <div data-v-4d48c421 className="header borderBtSecondary2">
                      <span
                        data-v-4d48c421
                        className="font-20 font-weight-700 text-capitalize modal-title"
                      >
                        Confirm your participation
                      </span>
                    </div>
                    <div data-v-4d48c421 className="body">
                      <div data-v-4d48c421 className="imgShake mb-3" />
                      <div
                        data-v-4d48c421
                        className="textContent mb-3 colorSecondary"
                      >
                        Pay $100 to become a VIP member. Do you want to pay?
                      </div>
                      <div
                        data-v-4d48c421
                        className="checkbox d-flex align-items-center justify-content-center"
                      >
                        <input
                          data-v-4d48c421
                          type="checkbox"
                          id="customControlInline"
                          className="checkboxInput"
                        />
                        <span
                          data-v-4d48c421
                          htmlFor="customControlInline"
                          className="accept"
                        >
                          I confirm and accept
                          <a
                            data-v-4d48c421
                            href="/faqs"
                            className="term"
                            target="_blank"
                          >
                            Terms of Service
                          </a>
                        </span>
                      </div>
                      <div
                        data-v-4d48c421
                        className="checkbox d-flex align-items-center justify-content-center"
                      >
                        <input
                          data-v-4d48c421
                          type="checkbox"
                          id="acceptAgencyObligations"
                          className="checkboxInput"
                        />
                        <span
                          data-v-4d48c421
                          htmlFor="acceptAgencyObligations"
                          className="accept"
                        >
                          I have read and accept
                          <a
                            data-v-4d48c421
                            href="https://starisa.azureedge.net/Agency_Obligations/wl_Agency Obligations_en.pdf"
                            target="_blank"
                            className="term"
                          >
                            VIP Obligations
                          </a>
                        </span>
                      </div>
                      <button
                        data-v-4d48c421
                        disabled="disabled"
                        className="btn button primary btn-large btn-radius w-100 font-weight-700"
                      >
                        Confirm
                      </button>
                      {/**/}
                    </div>
                  </div>
                </OutsideClickHandler>
              </div>
            </div>
          </div>
        </div>
        <div data-v-f9a96a2e data-v-94088026 className="authPopup">
          <div
            data-v-f9a96a2e
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
            className="modal fade modalBuyNowError"
          >
            <div data-v-f9a96a2e className="modal-dialog modal-auth">
              <div data-v-f9a96a2e className="close-page">
                <svg
                  data-v-f9a96a2e
                  data-v-75485923
                  data-v-0f05a894
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <g
                    data-v-f9a96a2e
                    data-v-75485923
                    data-v-0f05a894
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    fill="#ffffff"
                    stroke="#ffffff"
                    className="nc-icon-wrapper"
                  >
                    <g
                      data-v-f9a96a2e
                      data-v-75485923
                      data-v-0f05a894
                      className="nc-interact_menu-close-2-o-32"
                    >
                      <path
                        data-v-f9a96a2e
                        data-v-75485923
                        data-v-0f05a894
                        fill="none"
                        stroke="#ffffff"
                        strokeMiterlimit={10}
                        d="M2 6h28"
                        transform="translate(0 10.00) rotate(45.00 16 6)"
                      />
                      <path
                        data-v-f9a96a2e
                        data-v-75485923
                        data-v-0f05a894
                        data-color="color-2"
                        fill="none"
                        strokeMiterlimit={10}
                        d="M2 16h28"
                        opacity={0}
                      />
                      <path
                        data-v-f9a96a2e
                        data-v-75485923
                        data-v-0f05a894
                        fill="none"
                        stroke="#ffffff"
                        strokeMiterlimit={10}
                        d="M2 26h28"
                        transform="translate(0 -10) rotate(-45 16 26)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div data-v-f9a96a2e className="modal-content bgSecondary4">
                <div data-v-f9a96a2e className="contentWrapper">
                  <div data-v-f9a96a2e className="header borderBtSecondary2">
                    <span
                      data-v-f9a96a2e
                      className="font-20 font-weight-700 text-capitalize"
                    >
                      Your balance is not enough
                    </span>
                  </div>
                  <div data-v-f9a96a2e className="body">
                    <div data-v-f9a96a2e className="imgShake mb-30-px">
                      <img
                        data-v-f9a96a2e
                        src="/img/not_enought_balance.3776b590.svg"
                        alt=""
                      />
                    </div>
                    <div data-v-f9a96a2e className="textContent" />
                    <p data-v-f9a96a2e />
                    <a
                      data-v-f9a96a2e
                      href="/user/balance"
                      className="btn button primary wbtn btn-green btn-large w-100 font-weight-700"
                    >
                      Deposit now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div
        style={{ display: openPopup === true ? "block" : "none" }}
        class="modal-backdrop fade show"
      ></div>
    </div>
  );
};

export default AffiliateGeneral;
