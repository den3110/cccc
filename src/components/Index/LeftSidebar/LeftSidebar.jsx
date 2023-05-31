import React from "react";
import "./LeftSidebar.css"
import TradeIcons from "../../../assets/icons/TradeIcons";
import VipMembers from "../../../assets/icons/VipMembers";
import TradeIconsActive from "../../../assets/icons/TradeIconsActive";
import WalletIcons from "../../../assets/icons/WalletIcons";
// import WalletIconsActive from "../../../assets/icons/WalletIconsActive";
// import DashboardIconsActive from "../../../assets/icons/DashboardIconsActive";
import DashboardIcons from "../../../assets/icons/DashboardIcons";
import LogoutIcons from "../../../assets/icons/LogoutIcons";
import { data_vertical } from "../../../utils/LeftSideBar/data_vertical";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div data-v-5058a5bc data-v-2120bbd4 id="leftSidebar" className="bgSecondary3 colorSecondary">
      <div
        data-v-5058a5bc
        className="contentSidebar d-flex position-fixed flex-column"
      >
        <div data-v-5058a5bc className="topSidebar">
          <ul data-v-5058a5bc className="nav flex-column">
          {
              data_vertical?.map((item, key)=> 
                <li key={key} data-v-5058a5bc id="trade" className="nav-item bgColor0">
                  <NavLink
                    data-v-5058a5bc
                    to={item?.link}
                    aria-current="page"
                    className={({isActive})=> isActive ? "nav-link d-flex justify-content-center text-center flex-column colorSecondary router-link-exact-active active" : "nav-link d-flex justify-content-center text-center flex-column colorSecondary"}
                  >
                    <span data-v-5058a5bc>
                      {item.icons}
                    </span>
                    <span data-v-5058a5bc className="colorSecondary2">
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              )
            }
           
          </ul>
        </div>
        <div data-v-5058a5bc className="bottomSidebar">
          <ul data-v-5058a5bc className="nav flex-column">
            <li data-v-5058a5bc id="logout" className="nav-item bgColor0">
              <a
                data-v-5058a5bc
                href="javascript:void(0);"
                className="nav-link flex-column text-center d-flex position-relative borderTop colorSecondary"
              >
                <span data-v-5058a5bc className="colorSecondary">
                  <LogoutIcons />
                </span>
                <span data-v-5058a5bc className="colorSecondary2 font-14">
                  Log out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
