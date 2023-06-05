import React from "react";
import Header from "../../components/Index/Header/Header";
import LeftSidebar from "../../components/Index/LeftSidebar/LeftSidebar";
import "./Index.css";
// import Binary from "../../components/Index/Binary/Binary";
// import Analys from "../../components/Index/Analys/Analys";
import { Route, Routes } from "react-router-dom";
import Trading from "./Trading/Trading";
import Wallet from "./Wallet/Wallet";
import { createContext } from "react";
import { useState } from "react";
import Affiliate from "../Affiliate/Affiliate";

// function roundDownToNearest(value, nearest) {
//   return Math.floor(value / nearest) * nearest;
// }

// function roundUpToNearest(value, nearest) {
//   return Math.ceil(value / nearest) * nearest;
// }


export const MainContext= createContext()

function Index() {
  const [openHistoryBet, setOpenHistoryBet]= useState(false)

  return (
    <MainContext.Provider value={{openHistoryBet, setOpenHistoryBet}}>
      <div data-v-049fb53f></div>
      <div data-v-2120bbd4 className="wrapper index">
        <div data-v-2120bbd4="" className="spaceTop"></div>
        <Header />
        <main data-v-2120bbd4 className={"wrapper-main-content primary1"}>
          <LeftSidebar />
          <div data-v-2120bbd4 id="main-content" className="hasSidebar">
            <Routes>
              <Route path={"/index"} element={<Trading />} />
              <Route path={"/user/balance"} element={<Wallet />} />
              <Route path={"/affiliate/general"} element={<Affiliate />} />
            </Routes>
          </div>
        </main>
      </div>
    </MainContext.Provider>
  );
}

export default Index;
