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
import TradeHistory from "../../components/Wallet/TradeHistory/TradeHistory";
import { useContext } from "react";
import { UserProviderContext } from "../../components/UserProvider/UserProvider";
import AffiliateForVip from "../Affiliate/AffiliateForVip/AffiliateForVip";
import UpgradeVip from "../UpgradeVip/UpgradeVip";
import { useMediaQuery  } from 'react-responsive';
import LeftSidebarMobile from "../../components/Index/LeftSidebar/LeftSidebarMobile";
// function roundDownToNearest(value, nearest) {
//   return Math.floor(value / nearest) * nearest;
// }

// function roundUpToNearest(value, nearest) {
//   return Math.ceil(value / nearest) * nearest;
// }


export const MainContext= createContext()

function Index() {
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1025px)' })
  const isMobileScreeen= useMediaQuery({query: "(max-width: 1025px)"})
  const [openHistoryBet, setOpenHistoryBet]= useState(false)
  const {userOverview }= useContext(UserProviderContext)
  const [classIndex, setClassIndex]= useState("index")
  const [openMenuMobile, setOpenMenuMobile]= useState(false)

  return (
    <MainContext.Provider value={{openHistoryBet, setOpenHistoryBet, classIndex, setClassIndex}}>
      <div data-v-049fb53f></div>
      <div data-v-2120bbd4 className={`wrapper ${classIndex}`}>
        <div data-v-2120bbd4="" className="spaceTop"></div>
        <Header setOpenMenuMobile={setOpenMenuMobile} />
        <main data-v-2120bbd4 className={"wrapper-main-content primary1"}>
            {
              isDesktopScreen && 
              <LeftSidebar />
            }
            {
              isMobileScreeen &&
              <LeftSidebarMobile openMenuMobile={openMenuMobile} setOpenMenuMobile={setOpenMenuMobile} />
            }
          <div data-v-2120bbd4 id="main-content" className="hasSidebar">
            <Routes>
              <Route path={"/index"} element={<Trading />} />
              <Route path={"/user/*"} element={<Wallet />} />
              <Route path={"/affiliate/*"} element={userOverview?.d?.rank && userOverview?.d?.rank > 0 ? <AffiliateForVip /> : <Affiliate />} />
              <Route path={"/trade-history"} element={<TradeHistory />} />
              <Route path={"/upgrade-vip"} element={<UpgradeVip />} />
            </Routes>
          </div>
        </main>
      </div>
    </MainContext.Provider>
  );
}

export default Index;
