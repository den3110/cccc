import React from "react";
import { useContext } from "react";
import { UserProviderContext } from "../../UserProvider/UserProvider";
import numberWithCommas from "../../../function/number_separators";

const UserBalance = ({open}) => {
    const {userBalance }= useContext(UserProviderContext)
  

  return (
    <div data-v-03c925ae className="dropdown-menu sub-menu" style={{display: open ? "block" : "none"}}>
      <div data-v-03c925ae className="boxItemRadio pointer">
        <div data-v-03c925ae className="d-flex align-items-center">
          <div data-v-03c925ae className="flexLeft">
            <div data-v-03c925ae className="boxSelectAccount d-flex">
              <span data-v-03c925ae className="mr-2 radioButton" />
              <div data-v-03c925ae>
                <div data-v-03c925ae className="d-flex flex-column">
                  <span
                    data-v-03c925ae
                    className="mb-1 color-white-50 font-12 font-10m"
                  >
                    Live account
                  </span>
                  <div data-v-03c925ae className="d-flex align-items-center">
                    <span
                      data-v-03c925ae
                      className="font-18 font-12m font-weight-700 price color-white d-flex"
                    >
                      <span data-v-03c925ae className="font-arial">
                        $
                      </span>
                      <span data-v-03c925ae>{numberWithCommas(userBalance?.d?.availableBalance) ?? "_"}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-03c925ae
            className="flexRight d-flex justify-content-end align-items-center"
          >
            <a
              data-v-03c925ae
              href="#"
              className="buttonDeposit font-12 font-10m"
            >
              <svg
                data-v-03c925ae
                xmlns="http://www.w3.org/2000/svg"
                width={46}
                height={29}
                viewBox="0 0 46 29"
              >
                <g
                  data-v-03c925ae
                  id="Group_13378"
                  data-name="Group 13378"
                  transform="translate(-230 -71)"
                >
                  <g data-v-03c925ae id="Group_13375" data-name="Group 13375">
                    <g data-v-03c925ae id="Group_13376" data-name="Group 13376">
                      <rect
                        data-v-03c925ae
                        id="Rectangle_4298"
                        data-name="Rectangle 4298"
                        width={46}
                        height={29}
                        rx={4}
                        transform="translate(230 71)"
                        fill="#5DC1B9"
                      />
                    </g>
                  </g>
                  <g data-v-03c925ae id="Group_13377" data-name="Group 13377">
                    <g
                      data-v-03c925ae
                      id="conversion"
                      transform="translate(246.725 78.133)"
                    >
                      <path
                        data-v-03c925ae
                        id="Path_13963"
                        data-name="Path 13963"
                        d="M15.692,7.459H1V6.123H14.079L10.072,2.116l.945-.944,5.147,5.147a.668.668,0,0,1-.472,1.14Z"
                        transform="translate(-1 -1.172)"
                        stroke="#fff"
                        className="fill-color"
                      />
                      <path
                        data-v-03c925ae
                        id="Path_13964"
                        data-name="Path 13964"
                        d="M6.342,34.287,1.2,29.14A.668.668,0,0,1,1.668,28H16.359v1.336H3.28l4.007,4.007Z"
                        transform="translate(-1 -19.042)"
                        stroke="#fff"
                        className="fill-color"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div data-v-03c925ae className="boxItemRadio pointer">
        <div data-v-03c925ae className="d-flex align-items-center">
          <div data-v-03c925ae className="flexLeft">
            <div data-v-03c925ae className="boxSelectAccount d-flex">
              <span data-v-03c925ae className="mr-2 radioButton active" />
              <div data-v-03c925ae>
                <div data-v-03c925ae className="d-flex flex-column">
                  <span
                    data-v-03c925ae
                    className="mb-1 color-white-50 font-12 font-10m"
                  >
                    Demo account
                  </span>
                  <div data-v-03c925ae className="d-flex align-items-center">
                    <span
                      data-v-03c925ae
                      className="font-18 font-12m font-weight-700 price color-white d-flex"
                    >
                      <span data-v-03c925ae className="font-arial">
                        $
                      </span>
                      <span data-v-03c925ae>{numberWithCommas(userBalance?.d?.demoBalance) || "_"}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-03c925ae
            className="flexRight d-flex justify-content-end align-items-center"
          >
            <a data-v-03c925ae href="#">
              <svg
                data-v-03c925ae
                xmlns="http://www.w3.org/2000/svg"
                width="17.795"
                height="18.488"
                viewBox="0 0 17.795 18.488"
                id="refill-balance"
              >
                <g
                  data-v-03c925ae
                  id="refresh-01"
                  transform="translate(-1 0.081)"
                >
                  <path
                    data-v-03c925ae
                    id="Path_26259"
                    data-name="Path 26259"
                    d="M18.8,7.366,17.555-.081,14.993,2.481a8.8,8.8,0,1,0,2.9,10.641.8.8,0,0,0-1.468-.642,7.215,7.215,0,1,1-2.573-8.854l-2.5,2.5Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBalance;
