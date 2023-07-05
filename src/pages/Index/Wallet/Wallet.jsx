import React from "react";
import "./Wallet.css";
import { Route, Routes, Navigate } from "react-router-dom";
import UserBalance from "../../../components/Wallet/UserBalance/UserBalance";
import BinaryWallet from "../../../components/Wallet/BinaryWallet/BinaryWallet";
import TradeHistory from "../../../components/Wallet/TradeHistory/TradeHistory";
import UserPage from "../../UserPage/UserPage";

const Wallet = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Navigate to={"/user/balance"} replace={true} />}
      />
      <Route path="/profile" element={<UserPage />} />
      <Route path={"/balance"} element={<UserBalance />} />
      <Route path={"/binary-wallet"} element={<BinaryWallet />} />
      <Route path={"/trade-history"} element={<TradeHistory />} />
    </Routes>
  );
};

export default Wallet;
