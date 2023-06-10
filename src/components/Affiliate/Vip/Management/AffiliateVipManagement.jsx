import React from "react";
import "./index.css"
import NavigationAffiliateVip from "../Navigation/Navigation";

const AffiliateVipManagement = () => {

  return (
    <div
      data-v-22362ac0
      data-v-2120bbd4
      className="affiliateMamnagement bgPrimary1"
    >
      <div data-v-9b54ed4a data-v-22362ac0 className="backgroundDark">
        <div data-v-9b54ed4a className="container">
          <NavigationAffiliateVip />
        </div>
      </div>
      <div data-v-22362ac0 className="wraperContent">
        <div data-v-22362ac0 className="container pl-lg-0 px-0">
          <div data-v-22362ac0>
            <div data-v-22362ac0 className="filterDiv">
              <h1
                data-v-22362ac0
                className="font-30 color-white font-weight-700 text-capitalize mb-4"
              >
                Quản lý Thành viên VIP
              </h1>
              <div data-v-22362ac0 className="d-block">
                <div
                  data-v-22362ac0
                  className="position-relative colFirst mr-5 d-inline-block"
                  style={{ verticalAlign: "middle" }}
                >
                  <p
                    data-v-22362ac0
                    className="color-white-50 mb-1 aff-test-type"
                  >
                    Tìm kiếm bằng{" "}
                  </p>
                  <button
                    data-v-22362ac0
                    className="btn search btnSearchType mr-3 active button primary"
                  >
                    Cấp bậc
                  </button>
                  <button data-v-22362ac0 className="btn search btnSearchType">
                    Biệt danh
                  </button>
                </div>
                <div
                  data-v-22362ac0
                  className="d-inline-block w-50"
                  style={{ verticalAlign: "middle" }}
                >
                  <div data-v-22362ac0>
                    <p
                      data-v-22362ac0
                      className="color-white-50 mb-1 aff-text-type"
                    >
                      Xem Người bạn giới thiệu bằng Cấp bậc{" "}
                    </p>
                    <div data-v-22362ac0 className="d-flex">
                      <div data-v-22362ac0 className="dropdown mr-2">
                        <button
                          data-v-22362ac0
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="btn btnSearchType dropdown active dropdown-toggle"
                        >
                          Cấp 1
                        </button>
                        <div
                          data-v-22362ac0
                          aria-labelledby="dropdownMenuButton"
                          className="dropdown-menu"
                        >
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 1
                          </a>
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 2
                          </a>
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 3
                          </a>
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 4
                          </a>
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 5
                          </a>
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 6
                          </a>
                          <a data-v-22362ac0 href="#" className="dropdown-item">
                            Cấp 7
                          </a>
                        </div>
                      </div>
                      <button
                        data-v-22362ac0
                        className="btn button ml-3 btnSearch bgPrimary primary"
                      >
                        <span data-v-22362ac0 className="colorSecondary">
                          Tìm kiếm
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-22362ac0 className="container paddingResult">
              <div data-v-22362ac0 className="mb-3 d-flex">
                <h1
                  data-v-22362ac0
                  className="font-30 color-white font-weight-700 text-capitalize "
                >
                  Kết quả tìm kiếm
                </h1>
                <div
                  data-v-22362ac0
                  className="ml-auto d-flex scrollRange align-items-center"
                >
                  <span data-v-22362ac0 className="textTime mr-4">
                    Khoảng thời gian:
                  </span>
                  <button data-v-22362ac0 className="btn btnTime mr-3">
                    Hôm qua
                  </button>
                  <button data-v-22362ac0 className="btn btnTime mr-3">
                    7 ngày gần nhất
                  </button>
                  <button
                    data-v-22362ac0
                    className="btn btnTime mr-3 active button primary"
                  >
                    30 ngày gần nhất
                  </button>
                  <button data-v-22362ac0 className="btn btnTime">
                    Tất cả
                  </button>
                </div>
              </div>
              <div data-v-22362ac0 className="search-result">
                <div
                  data-v-22362ac0
                  className="table-responsive table-pc"
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
                  <table
                    data-v-22362ac0
                    className="table overflow-hidden table-bordered mb-0"
                  >
                    <thead data-v-22362ac0>
                      <tr data-v-22362ac0>
                        <th data-v-22362ac0>Biệt danh</th>
                        <th data-v-22362ac0>Cấp bậc</th>
                        <th data-v-22362ac0>Tổng KLGD</th>
                        <th data-v-22362ac0>HH nhận</th>
                      </tr>
                    </thead>
                    <tbody data-v-22362ac0>
                      <tr data-v-22362ac0>
                        <td data-v-22362ac0 colSpan={9} className="text-center">
                          Không có dữ liệu
                        </td>
                      </tr>
                    </tbody>
                    {/**/}
                  </table>
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

export default AffiliateVipManagement;
