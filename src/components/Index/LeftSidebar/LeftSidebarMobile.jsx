import React from "react";
import "./LeftSidebarMobile.css"
import { Link } from "react-router-dom";

const LeftSidebarMobile = (props) => {
  const {openMenuMobile, setOpenMenuMobile }= props
  
  return (
    <div
      data-v-7b375aca
      data-v-2120bbd4
      id="leftSidebar"
      className={`${openMenuMobile ? "active" : "inActive"} anim mobile`}
    >
      <div data-v-7b375aca className="menuProfile bgSecondary8">
        <div data-v-7b375aca className="bodySidebar">
          <div data-v-7b375aca className="groupIcon">
            <Link onClick={()=> setOpenMenuMobile(false)} 
              data-v-7b375aca
              className="swapMenu pt-2 pr-2 pb-2 mr-2"
              // onClick={()=> setOpenMenuMobile(false)}
            >
              <img
                data-v-7b375aca
                src="https://starisa2.net/img/e-remove.9960a6ec.svg"
                alt=""
                className="ml-2"
              />
            </Link>
            <Link onClick={()=> setOpenMenuMobile(false)} 
              // onClick={()=> setOpenMenuMobile(false)}
              data-v-7b375aca
              to="/index"
              className="logoSidebar router-link-exact-active router-link-active"
              aria-current="page"
            >
              <img
                data-v-7b375aca
                width={151}
                height={60}
                src="https://starisa2.net/img/logo-footer.2b873662.svg"
                alt=""
              />
            </Link>
          </div>
          <div data-v-7b375aca className="wrap-btn-deposit">
            <button
              data-v-7b375aca
              className="btn button btn-border btn-qDeposit primary ml-2"
            >
              <span
                data-v-7b375aca
                className="colorSecondary icon fs1rem txtDeposit"
              >
                Nạp
              </span>
            </button>
          </div>
          <h3 data-v-7b375aca className="font-18 px-4 colorSecondary">
            <b data-v-7b375aca>Kiếm tiền</b>
          </h3>
          <ul data-v-7b375aca className="listMenu mb-3 pl-0">
            <li data-v-7b375aca className="swapMenu">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                to="/index"
                className="nav-link button router-link-exact-active primary"
                aria-current="page"
              >
                <div data-v-7b375aca className="leftNav">
                  <svg
                    data-v-7b375aca
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.776"
                    height="20.801"
                    viewBox="0 0 19.776 20.801"
                  >
                    <g
                      data-v-7b375aca
                      id="bracket-arrow"
                      transform="translate(0 21.189) rotate(-90)"
                    >
                      <g
                        data-v-7b375aca
                        id="Path_30752"
                        data-name="Path 30752"
                        transform="translate(2.447 0)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          data-v-7b375aca
                          d="M9.5,13.385l3.226-3.5L9.5,6.391V1.5l7.743,8.388L9.5,18.276Z"
                          stroke="none"
                        />
                        <path
                          data-v-7b375aca
                          d="M 9.499995231628418 18.2755241394043 L 17.24255561828613 9.887763977050781 L 9.499995231628418 1.500003933906555 L 9.499995231628418 6.390714168548584 L 12.72606468200684 9.887763977050781 L 9.499995231628418 13.38481426239014 L 9.499995231628418 18.2755241394043 M 9.499653816223145 19.77558326721191 C 9.316328048706055 19.77558326721191 9.131294250488281 19.74194717407227 8.953784942626953 19.67254447937012 C 8.378564834594727 19.44763374328613 7.99999475479126 18.89314460754395 7.99999475479126 18.2755241394043 L 7.99999475479126 13.38481426239014 C 7.99999475479126 13.00788402557373 8.141904830932617 12.64477443695068 8.397475242614746 12.3677339553833 L 10.68527698516846 9.887763977050781 L 8.397475242614746 7.407793998718262 C 8.141904830932617 7.130753993988037 7.99999475479126 6.767643928527832 7.99999475479126 6.390714168548584 L 7.99999475479126 1.500003933906555 C 7.99999475479126 0.8823840022087097 8.378564834594727 0.3278939723968506 8.953784942626953 0.1029839739203453 C 9.131258964538574 0.03359496966004372 9.316363334655762 -5.543701263377443e-05 9.499653816223145 -5.543701263377443e-05 C 9.910433769226074 -5.543701263377443e-05 10.31252574920654 0.1687753796577454 10.60219478607178 0.4825839698314667 L 18.34475517272949 8.870344161987305 C 18.87515449523926 9.444933891296387 18.87515449523926 10.33059406280518 18.34475517272949 10.90518379211426 L 10.60219478607178 19.29294395446777 C 10.31255149841309 19.60672569274902 9.910395622253418 19.77558326721191 9.499653816223145 19.77558326721191 Z"
                          stroke="none"
                          className="fill-color"
                        />
                      </g>
                      <g
                        data-v-7b375aca
                        id="Path_30753"
                        data-name="Path 30753"
                        transform="translate(1.389 1.685)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          data-v-7b375aca
                          d="M6.687,14.905.5,8.2,6.687,1.5V5.408L4.109,8.2,6.687,11Z"
                          stroke="none"
                        />
                        <path
                          data-v-7b375aca
                          d="M 6.686956405639648 14.90506172180176 L 6.686956405639648 10.99697208404541 L 4.10905647277832 8.202531814575195 L 6.686956405639648 5.408092021942139 L 6.686956405639648 1.500001788139343 L 0.4999963045120239 8.202531814575195 L 6.686956405639648 14.90506172180176 M 6.687297821044922 16.40512084960938 C 6.276517391204834 16.40512084960938 5.874425888061523 16.23628997802734 5.584756374359131 15.92248153686523 L -0.6022037267684937 9.219951629638672 C -1.132603645324707 8.64536190032959 -1.132603645324707 7.759701728820801 -0.6022037267684937 7.185111999511719 L 5.584756374359131 0.4825818240642548 C 5.87440013885498 0.1688009202480316 6.276555061340332 -5.759948908234946e-05 6.687297821044922 -5.759948908234946e-05 C 6.870623588562012 -5.759948908234946e-05 7.055656909942627 0.03357908129692078 7.233166217803955 0.1029818132519722 C 7.808386325836182 0.3278918266296387 8.186956405639648 0.882381796836853 8.186956405639648 1.500001788139343 L 8.186956405639648 5.408092021942139 C 8.186956405639648 5.785021781921387 8.045045852661133 6.148131847381592 7.78947639465332 6.425171852111816 L 6.149843215942383 8.202531814575195 L 7.78947639465332 9.979891777038574 C 8.045045852661133 10.25693225860596 8.186956405639648 10.620041847229 8.186956405639648 10.99697208404541 L 8.186956405639648 14.90506172180176 C 8.186956405639648 15.52268218994141 7.808386325836182 16.07717132568359 7.233166217803955 16.30208206176758 C 7.055692195892334 16.3714714050293 6.870587825775146 16.40512084960938 6.687297821044922 16.40512084960938 Z"
                          stroke="none"
                          className="fill-color"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div data-v-7b375aca className="rightNav">
                  Giao dịch
                </div>
              </Link>
            </li>
            {/**/}
            {/**/}
            <li data-v-7b375aca className="swapMenu">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                to="/affiliate/general"
                className="nav-link button"
              >
                <div data-v-7b375aca className="leftNav">
                  <svg
                    data-v-7b375aca
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={21}
                    height={23}
                    viewBox="0 0 21 23"
                  >
                    <defs data-v-7b375aca>
                      <clipPath data-v-7b375aca id="clip-path">
                        <rect
                          data-v-7b375aca
                          width={21}
                          height={23}
                          fill="none"
                        />
                      </clipPath>
                    </defs>
                    <g
                      data-v-7b375aca
                      id="network-connection"
                      clipPath="url(#clip-path)"
                    >
                      <g
                        data-v-7b375aca
                        id="network-connection-2"
                        data-name="network-connection"
                        transform="translate(-0.1 0.5)"
                      >
                        <line
                          data-v-7b375aca
                          id="Line_1252"
                          data-name="Line 1252"
                          y1="3.29"
                          x2="5.265"
                          transform="translate(7.968 5.855)"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={2}
                          className="stroke-color"
                        />
                        <line
                          data-v-7b375aca
                          id="Line_1253"
                          data-name="Line 1253"
                          x2="5.265"
                          y2="3.29"
                          transform="translate(7.968 12.855)"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          strokeWidth={2}
                          className="stroke-color"
                        />
                        <circle
                          data-v-7b375aca
                          id="Ellipse_1366"
                          data-name="Ellipse 1366"
                          cx="3.5"
                          cy="3.5"
                          r="3.5"
                          transform="translate(13.1 0.5)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          fill="none"
                          className="stroke-color"
                        />
                        <circle
                          data-v-7b375aca
                          id="Ellipse_1367"
                          data-name="Ellipse 1367"
                          cx="3.5"
                          cy="3.5"
                          r="3.5"
                          transform="translate(13.1 14.5)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          fill="none"
                          className="stroke-color"
                        />
                        <circle
                          data-v-7b375aca
                          id="Ellipse_1368"
                          data-name="Ellipse 1368"
                          cx="3.5"
                          cy="3.5"
                          r="3.5"
                          transform="translate(1.1 7.5)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit={10}
                          fill="none"
                          className="stroke-color"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div data-v-7b375aca className="rightNav">
                  Thành viên VIP
                </div>
              </Link>
            </li>
            <li data-v-7b375aca className="swapMenu new">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                to="/streak-challenge"
                className="nav-link button"
              >
                <div data-v-7b375aca className="leftNav">
                  <img
                    data-v-7b375aca
                    src="https://starisa2.net/img/rocket.61e9530d.png"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div data-v-7b375aca className="rightNav">
                  Streak challenge
                </div>
              </Link>
            </li>
          </ul>
          <h3 data-v-7b375aca className="font-18 px-4 colorSecondary">
            <b data-v-7b375aca>Quản lý hồ sơ</b>
          </h3>
          <ul data-v-7b375aca className="listMenu mb-3 pl-0">
            <li data-v-7b375aca className="swapMenu">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                to="/user/profile"
                className="nav-link button"
              >
                <div
                  data-v-7b375aca
                  className="leftNav d-flex align-items-center"
                >
                  <div
                    data-v-7b375aca
                    className="avatar user-avatar rounded-circle"
                  >
                    {/**/}
                  </div>
                </div>
                <span data-v-7b375aca className="rightNav textNickName">
                  datistx
                </span>
              </Link>
            </li>
            <li data-v-7b375aca className="swapMenu">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                to="/user/trade-history"
                className="nav-link button"
              >
                <div data-v-7b375aca className="leftNav">
                  <svg
                    data-v-7b375aca
                    id="speedometer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.809"
                    height="17.809"
                    viewBox="0 0 17.809 17.809"
                  >
                    <path
                      data-v-7b375aca
                      id="Path_30761"
                      data-name="Path 30761"
                      d="M9.995,9.995a2.226,2.226,0,0,0,0-3.149C9.125,5.978,1,1,1,1S5.978,9.125,6.846,9.995A2.226,2.226,0,0,0,9.995,9.995Z"
                      transform="translate(0.484 0.484)"
                      className="fill-color"
                    />
                    <path
                      data-v-7b375aca
                      id="Path_30762"
                      data-name="Path 30762"
                      d="M8.9,0a1.484,1.484,0,1,0,0,2.968A5.936,5.936,0,1,1,2.968,8.9,1.484,1.484,0,1,0,0,8.9,8.9,8.9,0,1,0,8.9,0Z"
                      className="fill-color"
                    />
                  </svg>
                </div>
                <div data-v-7b375aca className="rightNav">
                  Bảng điều khiển
                </div>
              </Link>
            </li>
            <li data-v-7b375aca className="swapMenu">
              <div data-v-7b375aca className="nav-link pointer button">
                <div data-v-7b375aca className="leftNav">
                  <svg
                    data-v-7b375aca
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.633"
                    height="21.223"
                    viewBox="0 0 22.633 21.223"
                  >
                    <g
                      data-v-7b375aca
                      id="transfer"
                      transform="translate(-25.599 -35.35) rotate(-30)"
                    >
                      <g
                        data-v-7b375aca
                        id="Group_13372"
                        data-name="Group 13372"
                        transform="translate(0 51.198)"
                      >
                        <path
                          data-v-7b375aca
                          id="Path_30757"
                          data-name="Path 30757"
                          d="M17.79,55.881,13.3,51.386a.642.642,0,0,0-1.1.454v1.926H7.7a.642.642,0,0,0,0,1.284h5.137a.642.642,0,0,0,.642-.642V53.39l2.945,2.945L13.484,59.28V58.261a.642.642,0,0,0-.642-.642H5.778V55.693a.642.642,0,0,0-1.1-.454L.188,59.734a.642.642,0,0,0,0,.908l4.495,4.495a.642.642,0,0,0,.454.188.634.634,0,0,0,.246-.049.642.642,0,0,0,.4-.593V62.756h4.495a.642.642,0,1,0,0-1.284H5.136a.642.642,0,0,0-.642.642v1.018L1.55,60.187l2.945-2.945v1.018a.642.642,0,0,0,.642.642H12.2V60.83a.642.642,0,0,0,1.1.454l4.495-4.495A.642.642,0,0,0,17.79,55.881Z"
                          transform="translate(0 -51.198)"
                          fill="#ffffff"
                          className="fill-color"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div data-v-7b375aca className="rightNav position-relative">
                  <span data-v-7b375aca>Lệnh</span>
                  <span
                    data-v-7b375aca
                    className="totalCount text-uppercase"
                    style={{ display: "none" }}
                  >
                    0
                  </span>
                </div>
              </div>
            </li>
            <li data-v-7b375aca className="swapMenu">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                to="/user/balance"
                className="nav-link button"
              >
                <div data-v-7b375aca className="leftNav">
                  <svg
                    data-v-7b375aca
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.815"
                    height="16.846"
                    viewBox="0 0 19.815 16.846"
                    className="iconWallet"
                  >
                    <g
                      data-v-7b375aca
                      id="_000000ff"
                      data-name="#000000ff"
                      transform="translate(-42.663 -106.619)"
                    >
                      <path
                        data-v-7b375aca
                        id="Path_30756"
                        data-name="Path 30756"
                        d="M45.072,106.675a3.344,3.344,0,0,1,.674-.054H58.933a5.487,5.487,0,0,1,1.171.061,2.972,2.972,0,0,1,2.374,2.926q0,5.458,0,10.916a2.985,2.985,0,0,1-2.939,2.94H46.391a5.837,5.837,0,0,1-1.532-.1,3,3,0,0,1-2.11-2.16,3.184,3.184,0,0,1-.085-.815q0-5.389,0-10.777a2.946,2.946,0,0,1,.652-1.866,2.985,2.985,0,0,1,1.756-1.066m-.426,2.89q0,5.454,0,10.908a1,1,0,0,0,1.007,1.008H59.49a1,1,0,0,0,1-.96c0-.671.008-1.343,0-2.014-1.494,0-2.988,0-4.482,0a3.467,3.467,0,0,1,.048-6.934H60.5q0-1,0-2.01a.99.99,0,0,0-.957-.961q-6.944,0-13.887,0a1,1,0,0,0-1,.963m9.934,5.193a1.5,1.5,0,0,0,.825,1.627,2.538,2.538,0,0,0,1.159.143c1.311,0,2.622,0,3.933,0,0-.99,0-1.98,0-2.97-1.5,0-2.994,0-4.491,0A1.492,1.492,0,0,0,54.58,114.758Z"
                        className="fill-color"
                      />
                    </g>
                  </svg>
                </div>
                <div data-v-7b375aca className="rightNav">
                  Ví
                </div>
              </Link>
            </li>
          </ul>
          <h3 data-v-7b375aca className="font-18 px-4 colorSecondary">
            <b data-v-7b375aca>Cài đặt &amp; Trợ giúp</b>
          </h3>
          <ul data-v-7b375aca className="listMenu mb-3 pl-0">
            {/**/}
            <li data-v-7b375aca className="swapMenu">
              <Link onClick={()=> setOpenMenuMobile(false)} 
                data-v-7b375aca
                href="/user/balance"
                className="nav-link button"
              >
                <div data-v-7b375aca className="leftNav">
                <svg
                    data-v-7b375aca
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <g
                      data-v-7b375aca
                      id="gear"
                      transform="translate(-2.004 -1.995)"
                    >
                      <path
                        data-v-7b375aca
                        id="Path_30727"
                        data-name="Path 30727"
                        d="M18.111,9.362,16.772,9.25a6.245,6.245,0,0,0-.814-1.96l.871-1.03a1.28,1.28,0,0,0-1.8-1.8L14,5.326a6.234,6.234,0,0,0-1.963-.816L11.92,3.17a1.28,1.28,0,0,0-2.552,0L9.256,4.51a6.245,6.245,0,0,0-1.96.814l-1.03-.868a1.28,1.28,0,0,0-1.8,1.8l.871,1.029a6.239,6.239,0,0,0-.816,1.961l-1.341.112a1.281,1.281,0,0,0,0,2.552l1.341.112a6.238,6.238,0,0,0,.814,1.96l-.871,1.03a1.28,1.28,0,0,0,1.8,1.8L7.3,15.95a6.239,6.239,0,0,0,1.961.816l.112,1.341a1.281,1.281,0,0,0,2.552,0l.112-1.341a6.238,6.238,0,0,0,1.96-.814l1.03.871a1.28,1.28,0,0,0,1.8-1.8l-.871-1.029a6.233,6.233,0,0,0,.816-1.961l1.341-.112a1.281,1.281,0,0,0,0-2.552Zm-7.467,4.445a3.168,3.168,0,1,1,3.168-3.168A3.168,3.168,0,0,1,10.644,13.806Z"
                        fill="#ffffff"
                        className="fill-color"
                      />
                    </g>
                  </svg>
                </div>
                <div data-v-7b375aca className="rightNav">
                  Cài đặt
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div data-v-6a5ed9d0 data-v-7b375aca>
        {/**/}
      </div>
    </div>
  );
};

export default LeftSidebarMobile;
