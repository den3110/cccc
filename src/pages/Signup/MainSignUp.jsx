import React from "react";
import { Link } from "react-router-dom";

const MainSignUp = (props) => {
  return (
    <div className={"boxAuthentication show"}>
      <div
        style={{
          transform:
            props?.transition === true ? "translateX(0)" : "translateX(467px)",
        }}
        className={
          "contentAuthentication bgPrimary1 d-flex flex-column align-items-center justify-content-between"
        }
      >
        <div
          className={
            "header d-flex align-items-center justify-content-between w-100"
          }
        >
          <Link to={"/"} className="logoLogin mb-0 router-link-active">
            <img
              src="https://fibowin5.com/img/logo.8ac7641c.svg"
              alt="Botrade"
              style={{ width: "auto", height: "34.24px" }}
            />
          </Link>
          <Link to={"/"} className={"close-page router-link-active"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={44}
              height={44}
              viewBox="0 0 44 44"
            >
              <g
                id="Group_26033"
                data-name="Group 26033"
                transform="translate(-1295 -18)"
              >
                <circle
                  id="Ellipse_1361"
                  data-name="Ellipse 1361"
                  cx={22}
                  cy={22}
                  r={22}
                  transform="translate(1295 18)"
                  fill="#fff"
                  opacity="0.129"
                />
                <g id="e-remove" transform="translate(1309.5 32.5)">
                  <line
                    id="Line_1249"
                    data-name="Line 1249"
                    x2={13}
                    y2={13}
                    transform="translate(1.5 1.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                  <line
                    id="Line_1250"
                    data-name="Line 1250"
                    x1={13}
                    y2={13}
                    transform="translate(1.5 1.5)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <div className={"formWapper w-100"}>
          <h2 className="box-authentication__title mb-4"></h2>
          <div className={"social-group"}>
            <a>
              <button
                type="button"
                className="btn d-flex align-items-center btn-block btn-facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 11.339 21.332"
                >
                  <path
                    id="Path_71950"
                    data-name="Path 71950"
                    d="M25.162,21.893l.588-3.831H22.074V15.575a1.916,1.916,0,0,1,2.16-2.07h1.671V10.243a20.347,20.347,0,0,0-2.967-.259c-3.028,0-5.007,1.835-5.007,5.157v2.92H14.566v3.831h3.366v9.262a13.374,13.374,0,0,0,4.142,0V21.893Z"
                    transform="translate(-14.566 -9.984)"
                    fill="#fff"
                  />
                </svg>
                <span>Sign in with Facebook</span>
              </button>
            </a>
            <a>
              <button
                type="button"
                className="btn d-flex align-items-center btn-block btn-google"
              >
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 18 18"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Google-Button"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="btn_google_signin_light_focus_web"
                      transform="translate(-15.000000, -15.000000)"
                    >
                      <g
                        id="logo_googleg_48dp"
                        transform="translate(15.000000, 15.000000)"
                      >
                        <path
                          d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                          id="Shape"
                          fill="#4285F4"
                        />
                        <path
                          d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                          id="Shape"
                          fill="#34A853"
                        />
                        <path
                          d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                          id="Shape"
                          fill="#FBBC05"
                        />
                        <path
                          d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                          id="Shape"
                          fill="#EA4335"
                        />
                        <polygon id="Shape" points="0 0 18 0 18 18 0 18" />
                      </g>
                    </g>
                  </g>
                </svg>
                <span>Sign in with Google</span>
              </button>
            </a>
          </div>
          <div
            data-text="Or Sign up with"
            className="divider__with-text mb-4 mt-4"
          ></div>
          <Link to="/register-with-email" className>
            <button className="btn btn-outline btn-block btn-signup-with-email">
              Sign up with email
            </button>
          </Link>
        </div>
        <div className="colorSecondary">
          <div className="d-inline-block">
            Có tài khoản{" "}
            <div className="text-domain d-inline-block">Fibowin</div>?
          </div>
          &nbsp;
          <Link to="/login" className="colorBlue4">
            Đăng nhập vào Tài khoản của bạn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSignUp;
