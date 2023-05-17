import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import register from "../../api/auth/register";
import { useSnackbar } from "notistack";
import "./RegisterWithEmail.css"

const MainRegisterWithEmail = (props) => {
  const [captcha, setCaptcha] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [code, setCode] = useState("");
  const [toggle, setToggle] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
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
    const result = await register({
      email: email,
      nickName,
      password,
      confirmPassword: password,
      referrerCode: code,
      captcha: captcha?.captchaCode?.captcha_output,
      captcha_geetest: captcha?.captchaCode,
    });
    console.log(result);
    if (result?.ok === false) {
      enqueueSnackbar(result?.m, {
        variant: "error",
      });
    }
    if(result?.ok=== true) {
      setToggle(true) 
    }
  };
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
          {toggle === false && (
            <div className={"formWapper w-100"}>
              <div className={"loginForm mt-4"}>
                <h2
                  className="
                        font-24
                        colorSecondary
                        font-weight-bold
                        mb-4
                    "
                >
                  Tạo tài khoản Fibowin
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
                    type="password"
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
                        <i className="md-icon md-icon-font md-icon-image md-theme-default">
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
                        </i>
                      </div>{" "}
                      <div />
                    </div>
                  </button>
                </div>
                <div className="md-field md-theme-default md-has-value md-has-placeholder mb-2">
                  <label
                    className="position-static"
                    htmlFor="md-input-k0xkm4usa"
                  >
                    Biệt danh *
                  </label>
                  <input
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                    type="text"
                    aria-autocomplete="none"
                    autoComplete="false"
                    id="md-input-k0xkm4usa"
                    name="email"
                    placeholder="Điền Nickname..."
                    className="md-input 
                  borderRounded
                  font-14
                  px-10-px
                  borderSecondary1
              "
                  />
                  <small className="md-error" />
                </div>
                <div className="md-field md-theme-default md-has-value md-has-placeholder mb-2">
                  <label
                    className="position-static"
                    htmlFor="md-input-k0xkm4usa"
                  >
                    Mã giới thiệu / Mã khuyến mãi
                  </label>
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    type="text"
                    aria-autocomplete="none"
                    autoComplete="false"
                    id="md-input-k0xkm4usa"
                    name="email"
                    placeholder="Điền Mã giới thiệu..."
                    className="md-input 
                  borderRounded
                  font-14
                  px-10-px
                  borderSecondary1
              "
                  />
                  <small className="md-error" />
                </div>
                <div className="form-group text-center text-center mt-5">
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
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          )}
          {toggle === true && (
            <>
              <div data-v-a44fc498 className="formWapper w-100">
                {/**/}
                <div data-v-7ab8dd07 data-v-a44fc498>
                  <h2
                    data-v-7ab8dd07
                    className="font-weight-bold mb-5 font-24 colorSecondary"
                  >
                    Đăng ký thành công.
                  </h2>
                  <p data-v-7ab8dd07 className="colorSecondary">
                    Một liên kết xác nhận đã được gửi tới&nbsp;
                    <a
                      data-v-7ab8dd07
                      href="mailto:datistpham1@gmail.com"
                      className="colorBlue4"
                    >
                      datistpham1@gmail.com
                    </a>
                    .
                  </p>
                  <p data-v-7ab8dd07 className="colorSecondary">
                    Vui lòng chờ ít phút để nhận liên kết xác nhận và kích hoạt
                    tài khoản của bạn.
                  </p>
                  <p data-v-7ab8dd07>
                    <button
                      data-v-7ab8dd07
                      className="btn btn-radius btn-block btn-resendemail"
                    >
                      Yêu cầu một email mới.
                    </button>
                  </p>
                  <p data-v-7ab8dd07 className="colorSecondary" />
                </div>
                <div data-v-a44fc498 style={{ display: "none" }}>
                  <div
                    className="grecaptcha-badge"
                    data-style="bottomright"
                    style={{
                      width: "256px",
                      height: "60px",
                      display: "block",
                      transition: "right 0.3s ease 0s",
                      position: "fixed",
                      bottom: "14px",
                      right: "-186px",
                      boxShadow: "gray 0px 0px 5px",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="grecaptcha-logo">
                      <iframe
                        title="reCAPTCHA"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeEkukaAAAAALI6fsd1mVukHEuuVaRT4ckaXy-i&co=aHR0cHM6Ly9maWJvd2luNC5jb206NDQz&hl=en&v=wqcyhEwminqmAoT8QO_BkXCr&size=invisible&cb=3z55vtc1rehu"
                        width={256}
                        height={60}
                        role="presentation"
                        name="a-nf6yclmcgjjk"
                        frameBorder={0}
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                      />
                    </div>
                    <div className="grecaptcha-error" />
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: "250px",
                        height: "40px",
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: "0px",
                        resize: "none",
                        display: "none",
                      }}
                      defaultValue={""}
                    />
                  </div>
                  <iframe style={{ display: "none" }} />
                </div>
                {/**/}
              </div>
            </>
          )}

          <div data-v-a44fc498="" class="colorSecondary">
            <div data-v-a44fc498="" class="d-inline-block">
              Có tài khoản <div class="text-domain d-inline-block">Fibowin</div>
              ?
            </div>
            &nbsp;
            <Link data-v-a44fc498="" to="/login" class="colorBlue4">
              Đăng nhập vào Tài khoản của bạn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainRegisterWithEmail;
