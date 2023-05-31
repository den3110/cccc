import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../../components/Index/Header/Header";
import LeftSidebar from "../../components/Index/LeftSidebar/LeftSidebar";
import "./Index.css";
import Binary from "../../components/Index/Binary/Binary";
import Analys from "../../components/Index/Analys/Analys";
import { Route, Routes } from "react-router-dom";
import Trading from "./Trading/Trading";
import Wallet from "./Wallet/Wallet";

// function roundDownToNearest(value, nearest) {
//   return Math.floor(value / nearest) * nearest;
// }

// function roundUpToNearest(value, nearest) {
//   return Math.ceil(value / nearest) * nearest;
// }

function Index() {
  return (
    <>
      <div data-v-049fb53f></div>
      <div data-v-2120bbd4 className="wrapper index">
        <div data-v-2120bbd4="" className="spaceTop"></div>
        <Header />
        <main data-v-2120bbd4 className={"wrapper-main-content primary1"}>
          <LeftSidebar />
          <Routes>
            <Route path={"/index"} element={<Trading />} />
            <Route path={"/user/balance"} element={<Wallet />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Index;
