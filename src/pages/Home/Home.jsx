import React from "react";
import styles from "./Home.module.css";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "../Signup/Signup.css";
import "../Login/Login.css";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import MainSignUp from "../Signup/MainSignUp";
import MainLogin from "../Login/MainLogin";
import MainRegisterWithEmail from "../RegisterWithEmail/MainRegisterWithEmail";

const Home = (props) => {
  return (
    <div className={styles["home__container"]}>
      <Header />
      {props?.is_sign_up === true && (
        <MainSignUp {...props} />
      )}
      {props?.is_log_in === true && (
        <MainLogin {...props} />
      )}
      {
        props?.is_register_with_email=== true && 
        <MainRegisterWithEmail {...props} />
      }
      <div className={styles["bg__1__container"]}></div>
      <section className={styles["main__banner"]}>
        <div className={styles["main__banner__content"]}>
          <div className={styles["row"]}>
            <Fade left>
              <div className={"col-lg-5 col-md-12 col-sm-12"}>
                <div
                  className={"aos-init aos-animate"}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                  data-aos-once="true"
                  data-aos-offset="0"
                  data-aos-delay="50"
                >
                  <div className="main-banner-content-text">
                    <div className={styles["main__banner__title"]}>
                      A Better Way To
                      <br />
                      Trade And Earn
                    </div>
                  </div>
                  <div className={styles["main__banner__desc"]}>
                    FiboWin is a trading platform that was developed based on
                    cutting-edge technologies and the latest innovations to
                    provide an extraordinary experience for traders.
                  </div>
                </div>
                <Link
                  className={
                    "mx-auto btn-start button primary borderRounded font-20 text-decoration-none cl main-banner-link"
                  }
                  to={"/login"}
                >
                  GET STARTED FOR FREE
                </Link>
              </div>
            </Fade>
            <Fade right>
              <div
                className={
                  "col-lg-7 col-md-12 col-sm-12 d-flex justify-content-end"
                }
              >
                <img
                  src="https://fibowin.azureedge.net/home/section-1.png"
                  width={516}
                  height={381}
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-easing="ease"
                  data-aos-once="true"
                  data-aos-offset={0}
                  data-aos-delay={100}
                  alt={"Can't open"}
                  className="main-banner-image aos-init aos-animate"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className={styles["info"]}>
        <div
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-easing="ease"
          data-aos-once="true"
          data-aos-offset={0}
          data-aos-delay={50}
          className="container-fluid content aos-init aos-animate"
        >
          <img
            src="	https://fibowin4.com/img/logo-light-footer.40788a88.svg"
            alt="Botrade"
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className={styles["h2__c"]}>
            It's simple to become a pro trader on FiboWin
          </h2>
          <p className={styles["p__c"]}>
            At FiboWin, we strive to make the trading process as simple as
            possible so that anyone, regardless of expertise, may begin earning.
          </p>
        </div>
        <img
          data-v-30c61b0e
          src="https://fibowin.azureedge.net/home/section-2.png"
          data-aos="fade-left"
          data-aos-duration={2000}
          data-aos-easing="ease"
          data-aos-once="true"
          data-aos-offset={0}
          alt={""}
          data-aos-delay={200}
          className="imgRight aos-init aos-animate"
        />
      </section>
      <section className={"introduce"}>
        <div className={"container-fluid introduce-content"}>
          <div
            className={
              "swiper-container-introduce swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
            }
          >
            <div
              className={styles["swiper__wrapper"]}
              id={"swiper-wrapper-6bbf228c463a4189"}
            >
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 3"
                style={{ width: "290px", marginRight: "60px" }}
              >
                <div className="introduce-group">
                  <img
                    width={22}
                    height={22}
                    src="	https://fibowin4.com/img/check-icon.2312d98e.svg"
                    className="security-item-icon"
                    style={{ marginBottom: 10 }}
                    alt={"Can't open"}
                  />
                  <h3 className={styles["introduce__title"]}>
                    Free demo account
                  </h3>
                  <p className={styles["introduce__text"]}>
                    Test your trading strategy as much as you want with $1,000
                    demo account.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 3"
                style={{ width: "290px", marginRight: "60px" }}
              >
                <div className="introduce-group">
                  <img
                    width={22}
                    height={22}
                    src="	https://fibowin4.com/img/check-icon.2312d98e.svg"
                    className="security-item-icon"
                    style={{ marginBottom: 10 }}
                    alt={"Can't open"}
                  />
                  <h3 className={styles["introduce__title"]}>
                    Free demo account
                  </h3>
                  <p className={styles["introduce__text"]}>
                    Test your trading strategy as much as you want with $1,000
                    demo account.
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 3"
                style={{ width: "290px", marginRight: "60px" }}
              >
                <div className="introduce-group">
                  <img
                    width={22}
                    height={22}
                    src="	https://fibowin4.com/img/check-icon.2312d98e.svg"
                    className="security-item-icon"
                    style={{ marginBottom: 10 }}
                    alt={"Can't open"}
                  />
                  <h3 className={styles["introduce__title"]}>
                    Free demo account
                  </h3>
                  <p className={styles["introduce__text"]}>
                    Test your trading strategy as much as you want with $1,000
                    demo account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["trade__faster"]}>
        <div className={"container-fluid trade-faster-content"}>
          <div className={"row"}>
            <div
              className={
                "col-lg-6 col-md-12 col-sm-12 d-flex flex-column align-items-start justify-content-center content"
              }
            >
              <h2
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={50}
                className="trade-faster-title aos-init aos-animate"
              >
                Trade <span className="highlight">faster.</span>
                <br />
                Earn <span className="highlight">bigger.</span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={100}
                className="trade-faster-text aos-init aos-animate"
              >
                Trade faster and trade everywhere on FiboWin. Traders can make
                better trading decisions and earn bigger profit using powerful
                indicators developed by FiboWin.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 trade-faster-img-wrapper">
              <img
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={100}
                src="https://fibowin.azureedge.net/home/section-3.png"
                alt=""
                className="trade-faster-img aos-init aos-animate"
              />
            </div>
          </div>
          <img
            src="https://fibowin.azureedge.net/home/section-3-bg-left.png"
            alt=""
            className="trade-faster-img-left"
          />
        </div>
      </section>
      <section className={styles["option"]}>
        <div className={"container-fluid"}>
          <div>
            <div
              data-aos="flip-right"
              data-aos-duration={1000}
              data-aos-easing="ease"
              data-aos-once="true"
              data-aos-offset={0}
              data-aos-delay={50}
              className="content aos-init aos-animate"
              id={styles["content"]}
            >
              <h2 className={styles["h2__v"]}>
                The most suitable place to earn
              </h2>
              <p className={styles["h2__p"]}>
                FiboWin provides exceptional trading experience to our customers
                by simplified the trading process so our traders can focus on
                making better decisions to increase their profits.
              </p>
            </div>
          </div>
          <Reveal effect="fadeInUp">
            <div className={"row"}>
              <div
                data-aos="fade-up"
                data-aos-duration={1100}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={50}
                className="col-lg-4 optionBox aos-init aos-animate"
              >
                <div className={styles["img__c"]}>
                  <img
                    alt={"Can't open"}
                    src="https://fibowin.azureedge.net/home/01.png"
                  />
                </div>
                <h3 className={styles["h3__c"]}>High security</h3>
                <p className={styles["p3__c"]}>
                  We apply top technologies in the world to protect your assets.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={50}
                className="col-lg-4 optionBox aos-init aos-animate"
              >
                <div className={styles["img__c"]}>
                  <img alt="" src="https://fibowin.azureedge.net/home/02.png" />
                </div>
                <h3 className={styles["h3__c"]}>
                  Fast Deposits and Withdrawals
                </h3>
                <p className={styles["p3__c"]}>
                  On our platform, depositing and withdrawing using popular
                  cryptocurrency has never been easier.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={50}
                className="col-lg-4 optionBox aos-init aos-animate"
              >
                <div className={styles["img__c"]}>
                  <img alt="" src="https://fibowin.azureedge.net/home/03.png" />
                </div>
                <h3 className={styles["h3__c"]}>Easy-to-use Indicators</h3>
                <p className={styles["p3__c"]}>
                  New traders can now attain the same win rate as professional
                  traders thanks to our highly effective indicators.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="joinfibowinNow d-flex align-items-end">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-lg-flex align-items-center">
              <div
                data-aos="fade-up-right"
                data-aos-duration={1200}
                data-aos-easing="ease"
                data-aos-once="true"
                data-aos-offset={0}
                data-aos-delay={50}
                className="content aos-init aos-animate"
              >
                <h3 className={styles["h31__c"]}>Start trading today</h3>
                <p className={styles["p31__c"]}>
                  Make money everywhere on FiboWin!
                </p>
                <a
                  href="/login"
                  className=" btn-start button default borderRounded font-14 text-decoration-none cl a-eae-a"
                >
                  GET STARTED FOR FREE
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-easing="ease"
              data-aos-once="true"
              data-aos-offset={0}
              data-aos-delay={50}
              className="col-lg-5 aos-init aos-animate"
            >
              <div className="imgBg">
                <img
                  alt=""
                  className={styles["img__2"]}
                  src="https://fibowin.azureedge.net/home/section-4.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container-fluid footerFAQs">
          <div className="position-relative">
            <div className="py-3 py-sm-5 blockRow border-bottom pb-0">
              <div className="block logo">
                <p className="mb-lg-2 mb-1">
                  <img
                    src="https://fibowin4.com/img/logo.8ac7641c.svg"
                    alt="Botrade"
                    style={{ width: "242px", height: "auto" }}
                  />
                </p>
              </div>
              <div className="block pl-sm-4" style={{ flex: "0.5 1 0%" }}>
                <h4>Hỗ trợ</h4>
                <ul>
                  <li>
                    <p>
                      <a
                        href="https://fibowin.azureedge.net//Agency_Obligations/wl_Agency Obligations_vi.pdf"
                        download="agencyObligations.pdf"
                        target="_blank"
                      >
                        Nghĩa vụ thành viên VIP
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/faqs/privacy-policy">Privacy Policy</a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="block pl-sm-4">
                <h4>Bảo mật</h4>
                <ul>
                  <li>
                    <p>
                      <a href="/faqs/terms-of-use" className="txtContent">
                        Điều khoản và điều kiện
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="/faqs/risks-disclosure" className="txtContent">
                        Cảnh báo rủi ro
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        href="/faqs/liability-and-indemnity"
                        className="txtContent"
                      >
                        Miễn trừ trách nhiệm
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="block pl-sm-4">
                <div className="dropdown language">
                  <button
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="btn dropdown-toggle colorSecondary dropdownMenuButton bgPrimary1 position-relative"
                  >
                    <img
                      width={18}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAAdhJREFUWAntmMsuxFAYx/+nV1MxmUywIWLjEgm7YWUvNnY2EqMLsfUInsHWwoZnsLLzAjYIIqYxIRHXjtBpe+qcGUQTjeqpaKTfprfv8vv+PZem5HB0aIlA2kQGLQA1ydHoSJBBtjZSENxLmYXjYISUsg3IGHNA0SGUK5gpBY0pGfpwui8l1Wxls4DycoeoaKH41ADVQQmd0yqKMxqUXhIqInKRGmD3yptyEkHZTE9FJUl3xTkNWn+4t+Ks9pGqNK+DNsI7qHPmw95xP3ziniTai9U+goHtLig9cqw6bp2itvAI/zoMHSc4LEOcCObj1gNY1QboPf02wrv0YS0mg+PJEwHyQLdGYZk2qB0N6d8yn6oN7+rnyvEa3BID8mDnmOJuy+GnX9rNxnNL7S8fxrwpBMhrdExEj8PCeKI5GEIXA2RsRkUNJfx8YVT+GLAwoYBo7UX5Zd+FtWTjYsWGc+K1OGU2yzW2gIuYUIvGpILmqYfr9Wc0dttQHOZp7xFdbF3sWTWYwsznvJmYMdE6+F5NH5PhHDKwIGJrY+3rQxLziZ7p77mijkIKOgc+yxsBxysydhE4nkJsgPAMv2w5oKjAuYL/WkH2iVGT+A8aBMGDaKepx7eY6Nor+sqCnmPgaisAAAAASUVORK5CYII="
                      alt=""
                      className="mr-2 mb-1"
                    />
                    <span className="colorSecondary">Tiếng Việt</span>
                  </button>
                  <div
                    aria-labelledby="dropdownMenuButton"
                    className="dropdown-menu"
                  >
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,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"
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>English</span>
                    </div>
                    <div
                      className="dropdown-item pointer"
                      style={{ display: "none" }}
                    >
                      <img
                        width={18}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAAdhJREFUWAntmMsuxFAYx/+nV1MxmUywIWLjEgm7YWUvNnY2EqMLsfUInsHWwoZnsLLzAjYIIqYxIRHXjtBpe+qcGUQTjeqpaKTfprfv8vv+PZem5HB0aIlA2kQGLQA1ydHoSJBBtjZSENxLmYXjYISUsg3IGHNA0SGUK5gpBY0pGfpwui8l1Wxls4DycoeoaKH41ADVQQmd0yqKMxqUXhIqInKRGmD3yptyEkHZTE9FJUl3xTkNWn+4t+Ks9pGqNK+DNsI7qHPmw95xP3ziniTai9U+goHtLig9cqw6bp2itvAI/zoMHSc4LEOcCObj1gNY1QboPf02wrv0YS0mg+PJEwHyQLdGYZk2qB0N6d8yn6oN7+rnyvEa3BID8mDnmOJuy+GnX9rNxnNL7S8fxrwpBMhrdExEj8PCeKI5GEIXA2RsRkUNJfx8YVT+GLAwoYBo7UX5Zd+FtWTjYsWGc+K1OGU2yzW2gIuYUIvGpILmqYfr9Wc0dttQHOZp7xFdbF3sWTWYwsznvJmYMdE6+F5NH5PhHDKwIGJrY+3rQxLziZ7p77mijkIKOgc+yxsBxysydhE4nkJsgPAMv2w5oKjAuYL/WkH2iVGT+A8aBMGDaKepx7eY6Nor+sqCnmPgaisAAAAASUVORK5CYII="
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>Tiếng Việt</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,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"
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>日本</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="/img/kr.27eb9a27.png"
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>한국어</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKJQTFRF3ikQ3ioQ4DMP3isQ8pcG8Y4H3y8P6F8M3zEP8pYG8pgG4DYP4TkP/MwC4TcP6GAL/94A6moK74gI74YI5EkN9q4E+sID/M4B/NAB968E5UwN4DQP3y8Q4kAO+sAD+LcE4j4O5lYM/9wA51gM9KAG+8sC63AK+8kC8I4H5EoN40MO3ywQ40QO8I0H9aQF3zAP3y0Q5lQN5VEN+b0D9qsF6GIL9jwvAAAAAKFJREFUeJxjYCAdMDIyEVLCDCFZWNkIKGQHkxycXNz41fHw8kHs5mZgYsTtMmZmfgFBZmawCmYhYZwKRUTFxAUkxCSlQBxpVmEZnCpl5QQEBOQVIBw+fE5UVBIQUManAAZUVNXUNaBsTS1tnOq0uXQYFHQhbCY9PX2cCplBwW0Ac4YhEU4w0DEixqVAYGyC19NwIKNsSqSJDLjjbxSMAkoAAM6jB660TI8sAAAAAElFTkSuQmCC"
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>中国</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAHgAAAAB3TwmwAAABOUlEQVRYCWPkMJqb8J+BsZ+RkUGAYRCB//8ZPjAy/C9kZDea936wOQ4WTiBHMg1Wx4EcCXIbE8y1g5UedSClMTPoQ5DxLrfuf0p9SUv9gz4EqepA3mh/BtEZzVQNUBZqmQZ23EyE415n1FLFaJJCEF8IiSI5jjfGH6vj8OnHqgEoSHQIUhpC5OonOhcrfbmE4sl7PHoofErlUQxD4pAUxUj66MYcdSClQU1UJuGwNcGwBz3NoSsgJA8y88fhM+jaMPhERbFQVRaGRkoFhCoziTKCoANBPsUWgkSZjkcRh50pUeYychjPw9tY2DXTk8HWWAKPVeRLHTrzgsE9YzteAwg6EK9uOkgSjGI6uAGvFaMOxBs8REiOhiARgYRXyeAPwf8M/z/i9cIASoLcxsT4n6FgMDoS5CaQ2wCkDU+xLHuv8gAAAABJRU5ErkJggg=="
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>ប្រទេសកម្ពុជា</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAADCgAwAEAAAAAQAAACQAAAAAbZ9/dAAAANVJREFUWEftmC0SwjAQRr+ETklNq5AIBDgM1+EIGBxnqOsgOQiC+1BRh2Bo+pNlUipxMZ/Ic0nMm8nuZrOqvT/kdb4AtoPSGgyIc8AyRVGVUM32INJ+oJJkPuZAhgEqy6Cls3RyHu8k1kKzXOs/vJtqzErmNSXq6UZuwbquqQV5A3CGXlCJe3PH4CI/cguud6eYJCFEwVCiYChRMBT+Qk3/1MV2KxD+JKFv+ek/Tc1mz50kIrx+fgSi0feQcZy3eJhGH8sUurhdAWN+AxsSJpfMIK9KfAEzc1IDpT78RgAAAABJRU5ErkJggg=="
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>Thai</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAYAAABe3VzdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAADCgAwAEAAAAAQAAACQAAAAAbZ9/dAAAALBJREFUWEft17ENAjEMhWHbOoGuckNHxQhsxQQMwQTsQccENMxAF4mG9nToiJGj0NG5eYX/ylKaT4qiyPy6XO1xOFKd38QihJDVSrJe0e58Ir5v91aniXgY+jFGtiwk40hS5xkO57nJbYJyrf9yG66ul8BoCYyWwGgJjAYP5BttrM+Q8dM+2MBSCjQwH0m0BEZLYLQERktgNDHD/encJszcBrQazhd3VW0DEvKHU1X6ApckNnNwql6RAAAAAElFTkSuQmCC"
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>Indonesian</span>
                    </div>
                    <div className="dropdown-item pointer">
                      <img
                        width={18}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABuklEQVRoQ2NkGOKAcYi7n2HUAwMdg6MxMOAxcFZMJ/A/w/8WBgZGrYF2DGn2/7/2/9//SsYzYtr3GRgYFUjTPDhU/2dguMd4Rkzn/+BwDnmuGPUAeeFGPV2jMUC9sCTPpNEYIC/cqKdr6McAs1ba0K4HRj2AJTnHBVgyxPlbMhhoyIJlL9x4zLBww3GGxRuPUy/xQ01ipGYM8PNyMqydlMngYKaO1aEHTt1kCM6bzvDx83eqeYSqHti7oJjB3lQNr+NAnnBJ7Bt8HgAlm3mtCUQ5LKl6AcOiDdRJTlSLAWJCH+a7g6dvMTgn9BLlWUKKqOaBtycmMIDyADHgw6dvDCKWhcQoJahmQDwAysTCFgUEHUeMAqp5YMgnoSGfiUHRTUwsUDMDg+ykWhICGQbKxOsmZ+GsC0COD8qdNngrMlimAyWn+AArtKbEMaqV/ciZm6oxQEypQW01Q98Do+NC1E4TJJo39LuUo0mIxCintvLRJETtECXVvKEfA6dFdR4zMjLIkOrzwaAePMEBnmL6z9DGwMigMRgcRbwb/l9j/MdQMTpLSXyI0UblaAzQJlyJN3U0BogPK9qoBAB7taalmsAf3gAAAABJRU5ErkJggg=="
                        alt=""
                        className="mr-2 mb-1"
                      />
                      <span>Lao</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3 py-sm-5 blockRow mb-0">
              <div className="block">
                <p className="txtContent fullText">
                  Cảnh báo rủi ro: Giao dịch và đầu tư vào các tùy chọn kỹ thuật
                  số có mức độ rủi ro đáng kể và không phù hợp và / hoặc thích
                  hợp cho tất cả khách hàng. Vui lòng đảm bảo rằng bạn cân nhắc
                  cẩn thận các mục tiêu đầu tư, mức độ kinh nghiệm và khẩu vị
                  rủi ro trước khi mua hoặc bán bất kỳ tài sản kỹ thuật số nào.
                  Bạn nên nhận thức và hiểu đầy đủ tất cả các rủi ro liên quan
                  đến giao dịch và đầu tư vào tài sản kỹ thuật số, bạn không nên
                  đầu tư các khoản tiền mà bạn không thể để mất. Bạn được cấp
                  các quyền hạn chế không độc quyền để sử dụng tài sản trí tuệ
                  có trong trang web này cho mục đích sử dụng cá nhân, phi
                  thương mại, không thể chuyển nhượng liên quan đến các dịch vụ
                  được cung cấp trên trang web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
