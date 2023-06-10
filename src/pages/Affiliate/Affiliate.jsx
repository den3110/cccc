import React from "react";
import "./Affiliate.css";
import { Navigate, Route, Routes } from "react-router-dom";
import AffiliateGeneral from "../../components/Affiliate/Economic/AffiliateGeneral";
import { useContext } from "react";
import { MainContext } from "../Index/Index";
import { useEffect } from "react";

const Affiliate = () => {
  const {setClassIndex }= useContext(MainContext)
  useEffect(()=> {
    setClassIndex("Affiliate")
  }, [])
  
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={"/affiliate/general"} />} />
      <Route path={"/general"} element={<AffiliateGeneral />} />
    </Routes>
  );
};

export default Affiliate;
