import React from "react";
import "./AffiliateForVip.css"
import { useContext } from "react";
import { MainContext } from "../../Index/Index";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AffiliateVipGeneral from "../../../components/Affiliate/Vip/General/AffiliateVipGeneral";
import AffiliateVipCommission from "../../../components/Affiliate/Vip/Commission/AffiliateVipCommission";
import AffiliateVipManagement from "../../../components/Affiliate/Vip/Management/AffiliateVipManagement";

const AffiliateForVip = () => {
  const {setClassIndex }= useContext(MainContext)
  useEffect(()=> {
    setClassIndex("Affiliate")
  }, [])
  
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/affiliate/general"} />} />
      <Route path={"/general"} element={<AffiliateVipGeneral />} />
      <Route path={"/commission"} element={<AffiliateVipCommission />} />
      <Route path={"/management"} element={<AffiliateVipManagement />} />
      <Route path={"/upgrade-vip"} element={<AffiliateVipGeneral />} />
    </Routes>
  );
};

export default AffiliateForVip;
