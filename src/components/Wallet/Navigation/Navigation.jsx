import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul data-v-1acdca7e className="nav nav-pills">
      <li data-v-1acdca7e className="nav-item">
        <NavLink
          data-v-1acdca7e
          to="/user/balance"
          aria-current="page"
          className={({isActive})=> isActive ? "nav-link d-flex align-items-center text-center position-relative router-link-exact-active router-link-active" : "nav-link d-flex align-items-center text-center position-relative"}
        >
          Main wallet
        </NavLink>
      </li>
      <li data-v-1acdca7e className="nav-item">
        <NavLink
          data-v-1acdca7e
          to="/user/binary-wallet"
          className={({isActive})=> isActive ? "nav-link d-flex align-items-center text-center position-relative router-link-exact-active router-link-active" : "nav-link d-flex align-items-center text-center position-relative"}
        >
          Exchange wallet
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
