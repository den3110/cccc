import React from "react";
import { useContext } from "react";
import { MainContext } from "../Index/Index";
import { useEffect } from "react";
import "./index.css";
import NavigationAffiliateVip from "../../components/Affiliate/Vip/Navigation/Navigation";

const UpgradeVip = () => {
  const { setClassIndex } = useContext(MainContext);
  useEffect(() => {
    setClassIndex("upgradeVip");
  }, []);

  return (
    <section data-v-2120bbd4 className="upgrade-angency">
      <div data-v-9b54ed4a className="backgroundDark">
        <div data-v-9b54ed4a className="container">
          <NavigationAffiliateVip />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center header-image">
              <img
                src="https://starisa2.net/img/UpgradeAgency.a3b236c2.svg"
                alt="title"
                width={241}
                height={62}
              />
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-5">
            {/**/}
            <div
              data-v-6df7537c
              className="upgrade-process-2 buy-vip-container"
            >
              <div data-v-6df7537c className="header">
                <div data-v-6df7537c className="box-header media">
                  <img
                    data-v-6df7537c
                    src="https://starisa2.net/img/rank1.8341c746.png"
                    width={60}
                    alt="rank"
                  />
                  <div
                    data-v-6df7537c
                    className="media-body align-self-center ml-2"
                  >
                    <h2 data-v-6df7537c>OceanT</h2>
                    <p data-v-6df7537c>Cấp 1</p>
                  </div>
                </div>
              </div>
              <div data-v-6df7537c className="content">
                <div
                  data-v-6df7537c
                  className="d-flex justify-content-between mb-4"
                >
                  <span data-v-6df7537c className="label">
                    Nâng Cấp bậc VIP
                  </span>
                  <div data-v-6df7537c className="media">
                    <span
                      data-v-6df7537c
                      className="minus pointer noselect disabled"
                    >
                      -
                    </span>
                    <span data-v-6df7537c className="level media-body">
                      Cấp 2
                    </span>
                    <span data-v-6df7537c className="plus pointer noselect">
                      +
                    </span>
                  </div>
                </div>
                <div
                  data-v-6df7537c
                  className="d-flex justify-content-between mb-4"
                >
                  <div data-v-6df7537c className="dropdown dropup">
                    <span
                      data-v-6df7537c
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="pointer"
                    >
                      <span data-v-6df7537c className="label mr-2">
                        Phí nâng cấp
                      </span>
                      <svg
                        data-v-6df7537c
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 17 17"
                      >
                        <g
                          data-v-6df7537c
                          id="c-question"
                          transform="translate(0.396 0.396)"
                        >
                          <g
                            data-v-6df7537c
                            id="Ellipse_1825"
                            data-name="Ellipse 1825"
                            transform="translate(1.104 1.104)"
                            fill="none"
                            stroke="#facc00"
                            strokeLinecap="square"
                            strokeMiterlimit={10}
                            strokeWidth="1.5"
                          >
                            <circle
                              data-v-6df7537c
                              cx={7}
                              cy={7}
                              r={7}
                              stroke="#facc00"
                            />
                            <circle
                              data-v-6df7537c
                              cx={7}
                              cy={7}
                              r="7.75"
                              fill="#facc00"
                            />
                          </g>
                          <g
                            data-v-6df7537c
                            id="question"
                            transform="translate(0.26 2.819)"
                          >
                            <path
                              data-v-6df7537c
                              id="Path_30768"
                              data-name="Path 30768"
                              d="M7.218,6.93a2.78,2.78,0,0,1,.228-1.41,2.976,2.976,0,0,1,.8-.862c.753-.595,1.073-.9,1.073-1.541,0-.708-.528-.993-1.239-.993a3.986,3.986,0,0,0-1.906.525l-.479-1A5.021,5.021,0,0,1,8.177,1a2.685,2.685,0,0,1,1.775.548,1.863,1.863,0,0,1,.656,1.512,2.034,2.034,0,0,1-.5,1.4,6.163,6.163,0,0,1-.876.787,3.352,3.352,0,0,0-.71.69,1.71,1.71,0,0,0-.18.993H7.218Z"
                              transform="translate(0)"
                              fill="#000"
                            />
                            <circle
                              data-v-6df7537c
                              id="Ellipse_1827"
                              data-name="Ellipse 1827"
                              cx="0.779"
                              cy="0.779"
                              r="0.779"
                              transform="translate(6.982 8.013)"
                              fill="#000"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <div
                      data-v-6df7537c
                      aria-labelledby="dropdownMenuButton"
                      className="dropdown-menu"
                    >
                      <p data-v-6df7537c className="m-1">
                        Giá nâng cấp VIP sẽ được tính bằng USDT dựa trên ngày
                        hiện tại trong tuần.
                      </p>
                    </div>
                  </div>
                  <div data-v-6df7537c className="text-right">
                    <span data-v-6df7537c className="txtUsdt">
                      $7.14
                    </span>
                  </div>
                </div>
                <div data-v-6df7537c className="d-flex justify-content-between">
                  <span data-v-6df7537c className="label">
                    Số lượng F1 đã mua thành viên VIP
                  </span>
                  <span data-v-6df7537c className="txtAli">
                    <span data-v-6df7537c className="label">
                      0
                    </span>
                    /3
                  </span>
                </div>
              </div>
              <div data-v-6df7537c className="footer">
                <div
                  data-v-6df7537c
                  className="checkbox d-flex align-items-center"
                >
                  <input
                    data-v-6df7537c
                    type="checkbox"
                    id="chbox2"
                    className="checkboxInput"
                  />
                  <span
                    data-v-6df7537c
                    htmlFor="chbox2"
                    className="text-checkbox"
                  >
                    Tôi xác nhận và đồng ý
                    <a
                      data-v-6df7537c
                      href="/faqs/general-provitions"
                      className="term"
                    >
                      Điều khoản về dịch vụ
                    </a>
                  </span>
                </div>
                <div data-v-6df7537c className="text-center">
                  <button
                    data-v-6df7537c
                    disabled="disabled"
                    className="btn button-buy"
                  >
                    Nâng Cấp bậc
                  </button>
                </div>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-7 main-text">
            Cấp bậc VIP mặc định của bạn sau khi trở thành thành viên VIP là Cấp
            1. Để có thể nâng cấp Cấp bậc VIP, bạn phải trả phí nâng cấp và có
            đủ số lượng F1 đã mua thành viên VIP. Vào lúc 00:00:00 (UTC) Chủ
            nhật hàng tuần, Cấp bậc VIP mà bạn đã nâng cấp sẽ hết hạn, Cấp bậc
            mới của bạn sẽ được cập nhật dựa trên Khối lượng giao dịch hàng tuần
            của F1 và F1 đã mua Số lượng thành viên VIP trong 7 ngày qua.
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeVip;
