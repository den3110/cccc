import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../api/auth/login";
import Cookies from "js-cookie";
import login2fa from "../../api/auth/login_with_2fa";

const MainLogin = (props) => {
  const [twoFa, setTwoFa] = useState(false);
  const [token2fa, settToken2fa] = useState();
  const [code2fa, setcode2fa]= useState("")
  const [captcha, setCaptcha] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: "https://captcha.cedrus.dev/captcha/starisa-web",
        method: "get",
      });
      const result = await res.data;
      setCaptcha(result);
    })();
  }, []);

  const handleSubmit = async () => {
    const result = await login({
      email: email,
      password,
      captcha: captcha?.captchaCode?.captcha_output,
      captcha_geetest: {
        captcha_output: captcha?.captchaCode?.captcha_output,
        gen_time: captcha?.captchaCode?.gen_time,
        lot_number: captcha?.captchaCode?.lot_number,
        pass_token: captcha?.captchaCode?.pass_token,
      },
      client_id: "starisa-web",
      grant_type: "password",
    });
    if (result?.ok === false) {
      enqueueSnackbar(result?.m,{
        variant: "errorComponent",
      });
    } else {
      if (result?.d?.require2Fa === true) {
        setTwoFa(true);
        settToken2fa(result?.d?.t)
      } else {
        props?.setIsAuthenticated(true)
        Cookies.set("accessToken", result.d.refresh_token);
        Cookies.set("refreshToken", result.d.refresh_token);
        navigate("/index", { replace: true });
      }
    }
  };

  const handleSubmit2Fa= async (e)=> {
    e.preventDefault()
    const result= await login2fa({client_id: "starisa-web", code: code2fa, td_code: "", td_p_codde: "", token: token2fa})
    if(result?.ok=== false ) {
       enqueueSnackbar(result?.m,{
        variant: "errorComponent",
      });
    }
    else if(result?.ok=== true) {
      props?.setIsAuthenticated(true)
      Cookies.set("accessToken", result.d.access_token);
      Cookies.set("refreshToken", result.d.refresh_token);
      navigate("/index", { replace: true });
    }
  }
  return (
    <>
      <div className={"boxAuthentication show"}>
        <div
          style={{
            transform:
              props?.transition === true
                ? "translateX(0)"
                : "translateX(467px)",
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
                src="https://fibowin4.com/img/logo.8ac7641c.svg"
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
            {twoFa === true && (
              <>
                <form data-v-0bf909cc data-v-14042e34 id="loginForm" >
                  <h4
                    data-v-0bf909cc
                    className="font-24 colorSecondary font-weight-bold mb-4"
                  >
                    Xác minh bảo mật
                  </h4>
                  {/**/}
                  <div
                    data-v-0bf909cc
                    className="md-field md-theme-default d-block pt-0 mt-0"
                  >
                    <label data-v-0bf909cc className="color-white-50">
                      Mã Google Authentication
                    </label>
                    <div data-v-0bf909cc className="position-relative">
                      <input
                        value={code2fa}
                        onChange={(e)=> setcode2fa(e.target.value)}
                        data-v-0bf909cc
                        type="tel"
                        className="
                    md-input
                    borderRounded
                    font-14
                    px-10-px
                    borderSecondary1
                "
                      />
                      <span data-v-0bf909cc className="paste">
                        Paste
                      </span>
                    </div>
                  </div>
                  <div data-v-0bf909cc className="form-group text-center mt-3">
                    <button
                      onClick={handleSubmit2Fa}
                      data-v-0bf909cc
                      className="button btn-large wbtn btn-radius w-100 siginButton"
                    >
                      Gửi
                    </button>
                  </div>
                </form>
              </>
            )}
            {twoFa === false && (
              <div className={"loginForm mt-0"}>
                <h2
                  className="
                              font-24
                              colorSecondary
                              font-weight-bold
                              mb-lg-5 mb-3
                              mt-3
                          "
                >
                  Đăng nhập vào Tài khoản của bạn
                </h2>
                <div className="md-field md-theme-default md-has-value md-has-placeholder mb-2">
                  <label
                    className="position-static"
                    htmlFor="md-input-k0xkm4usa"
                  >
                    Địa chỉ Email *
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    aria-autocomplete="none"
                    autoComplete="false"
                    id="md-input-k0xkm4usa"
                    name="email"
                    placeholder="Điền Email..."
                    className="md-input 
                        borderRounded
                        font-14
                        px-10-px
                        borderSecondary1
                    "
                  />
                  <small className="md-error" />
                </div>
                <div className="md-field md-theme-default md-has-placeholder md-has-password mb-2 position-relative">
                  <label htmlFor="md-input-ukmayd2kq">Mật khẩu *</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword === false ? "password" : "text"}
                    aria-autocomplete="none"
                    autoComplete="false"
                    id="md-input-ukmayd2kq"
                    name="password"
                    placeholder="Điền mật khẩu..."
                    className="md-input 
                                  password
                                  borderRounded
                                  font-14
                                  px-10-px
                                  borderSecondary1
                              "
                  />
                  <small className="md-error" /> {/**/} {/**/}{" "}
                  <button
                    type="button"
                    className="md-button md-icon-button md-dense md-input-action md-toggle-password md-theme-default"
                    tabIndex={-1}
                  >
                    <div className="md-ripple">
                      <div className="md-button-content">
                        <i
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="md-icon md-icon-font md-icon-image md-theme-default"
                        >
                          {showPassword === false && (
                            <svg
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
                                fill="none"
                              />{" "}
                              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                            </svg>
                          )}
                          {showPassword === true && (
                            <svg
                              height={24}
                              viewBox="0 0 24 24"
                              width={24}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 0h24v24H0z" fill="none" />{" "}
                              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                            </svg>
                          )}
                        </i>
                      </div>{" "}
                      <div />
                    </div>
                  </button>
                </div>
                <div className="form-group text-right mb-4">
                  <Link
                    style={{ color: "#ffffff66" }}
                    to="/forgot-password"
                    className="colorPrimary font-14 txt-forgot-password"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="form-group text-center">
                  <button
                    onClick={handleSubmit}
                    style={{ fontSize: 14 }}
                    className="
                                      button
                                      primary
                                      bgSecondary2
                                      w-100
                                      borderRounded
                                      p-10-px
                                      border-0
                                  "
                  >
                    Đăng nhập
                  </button>
                </div>
                <div data-v-14042e34>
                  <div
                    data-v-14042e34
                    data-text="Or continue with"
                    className="divider__with-text mt-4 mb-4"
                  />
                  <div data-v-14042e34 className="social-group">
                    <a data-v-526f49c4 data-v-14042e34>
                      <button
                        data-v-526f49c4
                        type="button"
                        className="btn d-flex align-items-center btn-block btn-facebook"
                      >
                        <svg
                          data-v-526f49c4
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 11.339 21.332"
                        >
                          <path
                            data-v-526f49c4
                            id="Path_71950"
                            data-name="Path 71950"
                            d="M25.162,21.893l.588-3.831H22.074V15.575a1.916,1.916,0,0,1,2.16-2.07h1.671V10.243a20.347,20.347,0,0,0-2.967-.259c-3.028,0-5.007,1.835-5.007,5.157v2.92H14.566v3.831h3.366v9.262a13.374,13.374,0,0,0,4.142,0V21.893Z"
                            transform="translate(-14.566 -9.984)"
                            fill="#fff"
                          />
                        </svg>
                        <span data-v-526f49c4>Facebook</span>
                      </button>
                    </a>
                    <a data-v-350c6a32 data-v-14042e34>
                      <button
                        data-v-350c6a32
                        type="button"
                        className="btn d-flex align-items-center btn-block btn-google"
                      >
                        <svg
                          data-v-350c6a32
                          width="18px"
                          height="18px"
                          viewBox="0 0 18 18"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            data-v-350c6a32
                            id="Google-Button"
                            stroke="none"
                            strokeWidth={1}
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              data-v-350c6a32
                              id="btn_google_signin_light_focus_web"
                              transform="translate(-15.000000, -15.000000)"
                            >
                              <g
                                data-v-350c6a32
                                id="logo_googleg_48dp"
                                transform="translate(15.000000, 15.000000)"
                              >
                                <path
                                  data-v-350c6a32
                                  d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                                  id="Shape"
                                  fill="#4285F4"
                                />
                                <path
                                  data-v-350c6a32
                                  d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                                  id="Shape"
                                  fill="#34A853"
                                />
                                <path
                                  data-v-350c6a32
                                  d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                                  id="Shape"
                                  fill="#FBBC05"
                                />
                                <path
                                  data-v-350c6a32
                                  d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                                  id="Shape"
                                  fill="#EA4335"
                                />
                                <polygon
                                  data-v-350c6a32
                                  id="Shape"
                                  points="0 0 18 0 18 18 0 18"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span data-v-350c6a32>Google</span>
                      </button>
                    </a>
                    {/**/}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div data-v-14042e34>
            <div data-v-14042e34 className="colorSecondary2 font-14 mb-1">
              <div data-v-14042e34 className="d-inline-block">
                Cần tài khoản{" "}
                <div className="text-domain d-inline-block">Fibowin</div>?
              </div>
              &nbsp;
              <Link data-v-14042e34 to="/register" className="colorPrimary">
                Đăng ký
              </Link>
            </div>
            <p data-v-14042e34 className="colorSecondary2 font-14 mb-0">
              Không nhận được email xác nhận?
              <Link
                data-v-14042e34
                to="/register-resend-verify-email"
                className="colorPrimary"
              >
                Yêu cầu một email mới.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLogin;
