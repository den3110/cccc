import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

const NavigationAffiliateVip = () => {
  return (
    <ul
      data-v-9b54ed4a
      id="pills-tab"
      role="tablist"
      className="nav nav-pills menuHeaderLink"
    >
      <li data-v-9b54ed4a id="general" className="nav-item">
        <NavLink
          data-v-9b54ed4a
          to="/affiliate/general"
          className={({isActive})=> isActive ? "nav-link router-link-exact-active router-link-active" : "nav-link"}
          aria-current="page"
        >
          Tổng quan
        </NavLink>
      </li>
      <li data-v-9b54ed4a id="commission" className="nav-item">
        <NavLink data-v-9b54ed4a to="/affiliate/commission" className={({isActive})=> isActive ? "nav-link router-link-exact-active router-link-active" : "nav-link"}>
          Hoa hồng
        </NavLink>
      </li>
      <li data-v-9b54ed4a id="network_management" className="nav-item">
        <NavLink data-v-9b54ed4a to="/affiliate/management" className={({isActive})=> isActive ? "nav-link router-link-exact-active router-link-active" : "nav-link"}>
          Quản lý hệ thống
        </NavLink>
      </li>
      <li data-v-9b54ed4a id="upgrade-vip" className="nav-item">
        <NavLink data-v-9b54ed4a to="/upgrade-vip" className={({isActive})=> isActive ? "nav-link router-link-exact-active router-link-active" : "nav-link"}>
          Nâng cấp VIP
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationAffiliateVip;
