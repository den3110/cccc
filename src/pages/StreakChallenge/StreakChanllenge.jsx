import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";
import winning_jackpot from "../../api/jackpot/winning-jackpot";
import Pagination from "./Pagination";
import moment from "moment/moment";
import { useCallback } from "react";
import user_winning_jackpot from "../../api/jackpot/user-winning-jackpot";

const StreakChanllenge = () => {
  const [dataWinning, setDataWinning] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [toggle, setToggle] = useState(false);
  // const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [size, setSize] = useState(5);
  const fetchApiAll = useCallback(
    async (page, size) => {
      try {
        const result = await winning_jackpot({ page: page, size });
        setDataWinning(result);
        setTotalPages(Math.floor(result.d.t / 5));
      } catch (error) {
        setDataWinning([]);
      }
    },
    []
  );

  const fetchApiUser = useCallback(
    async (page, size) => {
      try {
        const result = await user_winning_jackpot({ page: page, size });
        setDataWinning(result);
        setTotalPages(Math.floor(result.d.t / 5));
      } catch (error) {
        setDataWinning([]);
      }
    },
    []
  );

  useEffect(() => {
    if(toggle=== false ) {
      fetchApiAll(currentPage, size);
    }
    else if(toggle=== true) {
      fetchApiUser(currentPage, size)
    }
  }, [fetchApiAll, currentPage, size, toggle, fetchApiUser]);
  // eslint-disable-next-line
  const handleChangePage = () => {};
  // eslint-disable-next-line
  const handleChangeSize = () => {};

  return (
    <div data-v-2120bbd4 id="community-jackpot" className="community-jackpot">
      <h1 className="community-jackpot-title">Streak Challenge</h1>
      <div className="prize-pool">
        <h3 className="prize-pool-label">
          <span>Prize Pool</span>
        </h3>
        <p className="prize-pool-value mb-0">$21,816.89</p>
        <span className="prize-pool-mega-fund">$109.08</span>
      </div>
      <Link to="/index" className="nav-link go-trade">
        Trade &amp; Win Challenge
      </Link>
      <ScrollLink
        to="info-guide"
        spy={true}
        smooth={true}
        ignoreCancelEvents={true}
        duration={200}
        ease="linear"
        offset={0}
        hashSpy={true}
        isDynamic={true}
      >
        <p className="link-to-info mb-0">More Information</p>
      </ScrollLink>
      <div className="bg">
        <div data-v-d4cd400a className="latest-winner">
          <div data-v-d4cd400a className="container">
            <h3 data-v-d4cd400a className="latest-winner-subtitle">
              Meet The Latest Winners
            </h3>
            <h2 data-v-d4cd400a className="latest-winner-title">
              Latest Winners
            </h2>
            <div data-v-d4cd400a className="latest-winner-mega">
              <div className="loading">
                <div className="loading__ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                  >
                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                  </svg>
                </div>
                <div className="loading__ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                  >
                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                  </svg>
                </div>
              </div>
              <h4 data-v-d4cd400a className="latest-winner-mega-title">
                mega jackpot winner
              </h4>
              <div data-v-d4cd400a className="latest-winner-mega-body">
                <p data-v-d4cd400a className="latest-winner-mega-name">
                  hzz***
                </p>
                <p data-v-d4cd400a className="latest-winner-mega-text">
                  Won Mega Prizes 07/04/2023
                </p>
              </div>
              <span data-v-d4cd400a className="latest-winner-mega-prize">
                $109.33
              </span>
            </div>
            <div data-v-d4cd400a className="latest-winner-table">
              <ul data-v-d4cd400a className="nav nav-tabs">
                <li onClick={()=> {
                  fetchApiAll(1, size)
                  setToggle(false)
                }} data-v-d4cd400a className="item">
                  <Link data-v-d4cd400a className={!toggle ? "nav-link active" : "nav-link"}>
                    Winning History
                  </Link>
                </li>
                <li onClick={()=> {
                  fetchApiUser(1, size)
                  setToggle(true)
                }} data-v-d4cd400a className="item">
                  <Link data-v-d4cd400a className={toggle ? "nav-link active" : "nav-link"}>
                    Your history
                  </Link>
                </li>
              </ul>
              <div data-v-d4cd400a className="latest-winner-list">
                <div className="loading">
                  <div className="loading__ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      style={{ enableBackground: "new 0 0 100 100" }}
                      xmlSpace="preserve"
                    >
                      <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                    </svg>
                  </div>
                  <div className="loading__ring">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      style={{ enableBackground: "new 0 0 100 100" }}
                      xmlSpace="preserve"
                    >
                      <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                    </svg>
                  </div>
                </div>
                {/*  */}
                <div
                  data-v-d4cd400a
                  className="latest-winner-item latest-winner-item--header"
                >
                  <div data-v-d4cd400a className="latest-winner-item-col">
                    Time
                  </div>
                  <div data-v-d4cd400a className="latest-winner-item-col">
                    Nickname
                  </div>
                  <div data-v-d4cd400a className="latest-winner-item-col">
                    Streak
                  </div>
                  <div data-v-d4cd400a className="latest-winner-item-col">
                    Prize
                  </div>
                </div>
                {dataWinning?.d?.c?.length > 0 &&
                  dataWinning?.d?.c?.map((item, key) => (
                    <div
                      key={key}
                      data-v-d4cd400a
                      className="latest-winner-item win"
                    >
                      <div data-v-d4cd400a className="latest-winner-item-col">
                        {moment(item.item).format("MM/DD/YYYY")}
                      </div>
                      <div data-v-d4cd400a className="latest-winner-item-col">
                        {item.nickname}
                      </div>
                      <div data-v-d4cd400a className="latest-winner-item-col">
                        <span
                          data-v-d4cd400a
                          className={item.type === "WIN" ? "win" : "lose"}
                        >
                          {item.streakname}
                        </span>
                      </div>
                      <div data-v-d4cd400a className="latest-winner-item-col">
                        ${item.prize.toFixed(2)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {
              totalPages > 0 && 
              <div data-v-d4cd400a className="d-flex justify-content-center">
                <div
                  data-v-6169587e
                  data-v-d4cd400a
                  id="paging"
                  className="paging text-center mb-4"
                >
                  <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                  />
                </div>
              </div>
            }
          </div>
        </div>
        <div id="info-guide" className="info-guide">
          <div className="container info-guide-inner">
            <div className="info-guide-header">
              <h3 className="info-guide-subtitle">Guidelines</h3>
              <h2 className="info-guide-title">How To Join Challenge</h2>
            </div>
            <div className="info-guide-body">
              <div className="info-guide-slider">
                <div className="swiper-container swiper-community-jackpot swiper-container-horizontal">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active">
                      <div className="swiper-slide-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="79.343"
                          height="84.019"
                          viewBox="0 0 79.343 84.019"
                          className="swiper-slide-icon"
                        >
                          <g
                            id="Group_21270"
                            data-name="Group 21270"
                            transform="translate(-354.969 -2485.583)"
                          >
                            <g
                              id="页面1"
                              transform="translate(361.869 2487.832)"
                            >
                              <g
                                id="_1_未登录"
                                data-name="1_未登录"
                                transform="translate(-5.258 -2.249)"
                              >
                                <g id="编组-7" transform="translate(0 0)">
                                  <g id="编组备份" transform="translate(0 0)">
                                    <g id="Group-6" transform="translate(0 0)">
                                      <g id="分组" transform="translate(0 0)">
                                        <path
                                          id="合并形状-copy-2"
                                          d="M2.553,30.776a24.9,24.9,0,0,0,6.33.813A25.189,25.189,0,0,0,33.953,6.282V3.848h2.435A38.337,38.337,0,1,1-1.642,42.183,38.688,38.688,0,0,1-.424,32.524l.61-2.369Z"
                                          transform="translate(1.642 1.859)"
                                          fill="#fff"
                                          stroke="#fff"
                                          strokeWidth="3.283"
                                          fillRule="evenodd"
                                        />
                                        <path
                                          id="_1"
                                          data-name={1}
                                          d="M14.653,0l-4.2,22.419H6.782L10.155,4.471,5.361,8.155l.829-4.5L10.984,0Z"
                                          transform="translate(5.025 0)"
                                          fill="#fff"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g id="skill" transform="translate(370 2512.416)">
                              <path
                                id="Path_35025"
                                data-name="Path 35025"
                                d="M10.275,5.284c9.074,0,15.306-4.7,19.678-4.7S43.509,3.1,43.509,23.213,31.155,46.279,26.346,46.279C3.825,46.281-5.8,5.284,10.275,5.284Z"
                                transform="translate(0.09)"
                                fill="#efefef"
                              />
                              <g
                                id="Group_21244"
                                data-name="Group 21244"
                                transform="translate(33.355 24.623)"
                              >
                                <path
                                  id="Path_35026"
                                  data-name="Path 35026"
                                  d="M0,0H2.624V1.312H0Z"
                                  transform="translate(5.335 1.855) rotate(-45)"
                                  fill="#a4afc1"
                                />
                                <path
                                  id="Path_35027"
                                  data-name="Path 35027"
                                  d="M0,0H2.624V1.312H0Z"
                                  transform="translate(0 7.188) rotate(-45)"
                                  fill="#a4afc1"
                                />
                                <path
                                  id="Path_35028"
                                  data-name="Path 35028"
                                  d="M0,0H1.312V2.624H0Z"
                                  transform="translate(5.333 6.02) rotate(-45)"
                                  fill="#a4afc1"
                                />
                              </g>
                              <path
                                id="Path_35029"
                                data-name="Path 35029"
                                d="M16.755,8.062A1.316,1.316,0,0,1,18.067,6.75h2.65a2.624,2.624,0,1,0,4.539,0h2.65a1.316,1.316,0,0,1,1.312,1.312v2.65a2.624,2.624,0,1,1,0,4.539V17.9a1.316,1.316,0,0,1-1.312,1.312H18.045A1.312,1.312,0,0,1,16.733,17.9Z"
                                transform="translate(4.595 1.923)"
                                fill="#2fdf84"
                              />
                              <circle
                                id="Ellipse_2092"
                                data-name="Ellipse 2092"
                                cx="4.264"
                                cy="4.264"
                                r="4.264"
                                transform="translate(13.479 16.544)"
                                fill="#f3f3f1"
                              />
                              <path
                                id="Path_35030"
                                data-name="Path 35030"
                                d="M25.772,32.261V28a5.246,5.246,0,0,0-5.248-5.248H12A5.246,5.246,0,0,0,6.75,28v4.264Z"
                                transform="translate(1.481 6.913)"
                                fill="#f3f3f1"
                              />
                              <path
                                id="Path_35031"
                                data-name="Path 35031"
                                d="M19.685,17.9l.022-9.835a1.3,1.3,0,0,1,.983-1.245c.012-.021.016-.046.028-.067h-2.65a1.316,1.316,0,0,0-1.312,1.312L16.733,17.9a1.311,1.311,0,0,0,1.312,1.316H21A1.312,1.312,0,0,1,19.685,17.9Z"
                                transform="translate(4.595 1.923)"
                                fill="#00b871"
                              />
                              <path
                                id="Path_35032"
                                data-name="Path 35032"
                                d="M13.7,17.014a4.253,4.253,0,0,1,2.788-3.985,4.264,4.264,0,1,0,0,7.971A4.253,4.253,0,0,1,13.7,17.014Z"
                                transform="translate(2.729 3.794)"
                                fill="#d5dbe1"
                              />
                              <path
                                id="Path_35033"
                                data-name="Path 35033"
                                d="M14.949,22.75H12A5.246,5.246,0,0,0,6.75,28v4.264H9.7V28A5.246,5.246,0,0,1,14.949,22.75Z"
                                transform="translate(1.481 6.913)"
                                fill="#d5dbe1"
                              />
                              <path
                                id="Path_35034"
                                data-name="Path 35034"
                                d="M28.135,20.431H21.221V18.463h6.914a.332.332,0,0,0,.328-.328v-2.65a.983.983,0,0,1,1.481-.849,1.64,1.64,0,1,0,0-2.842.983.983,0,0,1-1.481-.849V8.3a.332.332,0,0,0-.328-.328H26.807c.01.109.016.219.016.328a3.608,3.608,0,1,1-7.215,0c0-.109.005-.219.016-.328H18.3a.332.332,0,0,0-.328.328V11.9H16V8.3A2.3,2.3,0,0,1,18.3,6h2.65a.984.984,0,0,1,.849,1.481,1.64,1.64,0,1,0,2.842,0A.984.984,0,0,1,25.485,6h2.65a2.3,2.3,0,0,1,2.3,2.3V9.622a3.608,3.608,0,1,1,0,7.186v1.326A2.3,2.3,0,0,1,28.135,20.431Z"
                                transform="translate(4.366 1.689)"
                              />
                              <path
                                id="Path_35035"
                                data-name="Path 35035"
                                d="M15.248,22.5A5.248,5.248,0,1,1,20.5,17.248,5.253,5.253,0,0,1,15.248,22.5Zm0-8.527a3.28,3.28,0,1,0,3.28,3.28A3.283,3.283,0,0,0,15.248,13.968Z"
                                transform="translate(2.495 3.56)"
                              />
                              <path
                                id="Path_35036"
                                data-name="Path 35036"
                                d="M26.99,32.5H25.022V28.231a4.269,4.269,0,0,0-4.264-4.264H12.231a4.269,4.269,0,0,0-4.264,4.264V32.5H6V28.231A6.239,6.239,0,0,1,12.231,22h8.527a6.239,6.239,0,0,1,6.231,6.231Z"
                                transform="translate(1.248 6.679)"
                              />
                              <path
                                id="Path_35037"
                                data-name="Path 35037"
                                d="M2,28.5H43.98v1.968H2Z"
                                transform="translate(0 8.706)"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="swiper-slide-label">Sign up</span>
                        <span className="swiper-slide-text">
                          Register to starisa2.net
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide swiper-slide-next">
                      <div className="swiper-slide-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="81.189"
                          height="86.019"
                          viewBox="0 0 81.189 86.019"
                          className="swiper-slide-icon"
                        >
                          <g
                            id="Group_21271"
                            data-name="Group 21271"
                            transform="translate(-555.047 -2483.583)"
                          >
                            <g
                              id="页面1"
                              transform="translate(554.33 2483.583)"
                            >
                              <g
                                id="_1_未登录"
                                data-name="1_未登录"
                                transform="translate(2.358 0)"
                              >
                                <g id="编组-7" transform="translate(0)">
                                  <g id="编组备份">
                                    <g id="Group-6-Copy-3">
                                      <g id="分组-2">
                                        <path
                                          id="合并形状-copy"
                                          d="M2.654,31.43a25.5,25.5,0,0,0,6.484.833A25.8,25.8,0,0,0,34.817,6.341V3.848h2.494A39.267,39.267,0,1,1-1.642,43.114,39.627,39.627,0,0,1-.394,33.22l.625-2.426Z"
                                          transform="translate(1.642 1.997)"
                                          fill="#fff"
                                          stroke="#fff"
                                          strokeWidth="3.283"
                                          fillRule="evenodd"
                                        />
                                        <path
                                          id="_2"
                                          data-name={2}
                                          d="M19.806,5.661c0,3.1-2.069,4.957-3.355,6.3L9.3,19.413h8.215l-.721,3.55H3.627l.721-3.55L14.005,9.4c1.286-1.343,1.881-2.175,1.881-3.55a2.022,2.022,0,0,0-2.132-2.3c-1.411,0-2.728.768-3.23,2.974H6.605C7.358,2.175,10.086,0,14.162,0,17.643,0,19.806,2.047,19.806,5.661Z"
                                          transform="translate(4.377)"
                                          fill="#fff"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g
                              id="increase"
                              transform="translate(571.916 2511.971)"
                            >
                              <g
                                id="Group_21245"
                                data-name="Group 21245"
                                transform="translate(2.384 0.583)"
                              >
                                <path
                                  id="Path_35038"
                                  data-name="Path 35038"
                                  d="M35.847,41.978c-9.163,0-15.455,4.746-19.87,4.746S2.29,44.186,2.29,23.876,14.764.583,19.62.583C42.361.583,52.074,41.978,35.847,41.978Z"
                                  transform="translate(-2.29 -0.583)"
                                  fill="#efefef"
                                  opacity="0.715"
                                />
                              </g>
                              <g
                                id="Group_21246"
                                data-name="Group 21246"
                                transform="translate(35.116 3.785)"
                              >
                                <path
                                  id="Path_35039"
                                  data-name="Path 35039"
                                  d="M28.987,6.974a1.987,1.987,0,1,1,1.987-1.987A1.989,1.989,0,0,1,28.987,6.974Zm0-2.649a.662.662,0,1,0,.662.662A.663.663,0,0,0,28.987,4.325Z"
                                  transform="translate(-27 -3)"
                                  fill="#a4afc1"
                                />
                              </g>
                              <g
                                id="Group_21247"
                                data-name="Group 21247"
                                transform="translate(9.617 27.297)"
                              >
                                <path
                                  id="Path_35040"
                                  data-name="Path 35040"
                                  d="M13.711,32.009H7.75v-10.6a.663.663,0,0,1,.662-.662h4.636a.663.663,0,0,1,.662.662Z"
                                  transform="translate(-7.75 -20.75)"
                                  fill="#f3f3f1"
                                />
                              </g>
                              <g
                                id="Group_21248"
                                data-name="Group 21248"
                                transform="translate(20.214 21.999)"
                              >
                                <path
                                  id="Path_35041"
                                  data-name="Path 35041"
                                  d="M21.711,33.308H15.75v-15.9a.663.663,0,0,1,.662-.662h4.636a.663.663,0,0,1,.662.662Z"
                                  transform="translate(-15.75 -16.75)"
                                  fill="#f3f3f1"
                                />
                              </g>
                              <g
                                id="Group_21249"
                                data-name="Group 21249"
                                transform="translate(30.811 16.7)"
                              >
                                <path
                                  id="Path_35042"
                                  data-name="Path 35042"
                                  d="M29.711,34.607H23.75V13.412a.663.663,0,0,1,.662-.662h4.636a.663.663,0,0,1,.662.662Z"
                                  transform="translate(-23.75 -12.75)"
                                  fill="#2fdf84"
                                />
                              </g>
                              <g
                                id="Group_21250"
                                data-name="Group 21250"
                                transform="translate(9.617 27.297)"
                              >
                                <path
                                  id="Path_35043"
                                  data-name="Path 35043"
                                  d="M11.393,20.75H8.412a.663.663,0,0,0-.662.662v10.6h2.98v-10.6A.663.663,0,0,1,11.393,20.75Z"
                                  transform="translate(-7.75 -20.75)"
                                  fill="#d5dbe1"
                                />
                              </g>
                              <g
                                id="Group_21251"
                                data-name="Group 21251"
                                transform="translate(20.214 21.999)"
                              >
                                <path
                                  id="Path_35044"
                                  data-name="Path 35044"
                                  d="M19.393,16.75h-2.98a.663.663,0,0,0-.662.662v15.9h2.98v-15.9A.663.663,0,0,1,19.393,16.75Z"
                                  transform="translate(-15.75 -16.75)"
                                  fill="#d5dbe1"
                                />
                              </g>
                              <g
                                id="Group_21252"
                                data-name="Group 21252"
                                transform="translate(30.811 16.7)"
                              >
                                <path
                                  id="Path_35045"
                                  data-name="Path 35045"
                                  d="M27.393,12.75h-2.98a.663.663,0,0,0-.662.662V34.607h2.98V13.412A.663.663,0,0,1,27.393,12.75Z"
                                  transform="translate(-23.75 -12.75)"
                                  fill="#00b871"
                                />
                              </g>
                              <g
                                id="Group_21253"
                                data-name="Group 21253"
                                transform="translate(10.236 9.375)"
                              >
                                <path
                                  id="Path_35046"
                                  data-name="Path 35046"
                                  d="M0,0H15.924V1.987H0Z"
                                  transform="translate(0 11.258) rotate(-45)"
                                />
                              </g>
                              <g
                                id="Group_21254"
                                data-name="Group 21254"
                                transform="translate(16.571 9.083)"
                              >
                                <path
                                  id="Path_35047"
                                  data-name="Path 35047"
                                  d="M19.623,13.623H17.636V8.987H13V7h5.63a.994.994,0,0,1,.993.993Z"
                                  transform="translate(-13 -7)"
                                />
                              </g>
                              <g
                                id="Group_21255"
                                data-name="Group 21255"
                                transform="translate(2 37.563)"
                              >
                                <path
                                  id="Path_35048"
                                  data-name="Path 35048"
                                  d="M2,28.5H44.389v1.987H2Z"
                                  transform="translate(-2 -28.5)"
                                />
                              </g>
                              <g
                                id="Group_21256"
                                data-name="Group 21256"
                                transform="translate(8.623 26.304)"
                              >
                                <path
                                  id="Path_35049"
                                  data-name="Path 35049"
                                  d="M13.954,33.246H7.993A.994.994,0,0,1,7,32.253v-10.6A1.658,1.658,0,0,1,8.656,20h4.636a1.658,1.658,0,0,1,1.656,1.656v10.6A.994.994,0,0,1,13.954,33.246ZM8.987,31.259h3.974V21.987H8.987Z"
                                  transform="translate(-7 -20)"
                                />
                              </g>
                              <g
                                id="Group_21257"
                                data-name="Group 21257"
                                transform="translate(19.22 21.005)"
                              >
                                <path
                                  id="Path_35050"
                                  data-name="Path 35050"
                                  d="M21.954,34.545H15.993A.994.994,0,0,1,15,33.552v-15.9A1.658,1.658,0,0,1,16.656,16h4.636a1.658,1.658,0,0,1,1.656,1.656v15.9A.994.994,0,0,1,21.954,34.545Zm-4.967-1.987h3.974V17.987H16.987Z"
                                  transform="translate(-15 -16)"
                                />
                              </g>
                              <g
                                id="Group_21258"
                                data-name="Group 21258"
                                transform="translate(29.818 15.706)"
                              >
                                <path
                                  id="Path_35051"
                                  data-name="Path 35051"
                                  d="M29.954,35.844H23.993A.994.994,0,0,1,23,34.85V13.656A1.658,1.658,0,0,1,24.656,12h4.636a1.658,1.658,0,0,1,1.656,1.656V34.85A.994.994,0,0,1,29.954,35.844Zm-4.967-1.987h3.974V13.987H24.987Z"
                                  transform="translate(-23 -12)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span className="swiper-slide-label">Trade</span>
                        <span className="swiper-slide-text">
                          Trade and earn more profits
                        </span>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="swiper-slide-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="80.96"
                          height="85.92"
                          viewBox="0 0 80.96 85.92"
                          className="swiper-slide-icon"
                        >
                          <g
                            id="Group_21272"
                            data-name="Group 21272"
                            transform="translate(-760.16 -2483.682)"
                          >
                            <g
                              id="页面1"
                              transform="translate(759.443 2483.682)"
                            >
                              <g
                                id="_1_未登录"
                                data-name="1_未登录"
                                transform="translate(2.358 0)"
                              >
                                <g id="编组-7" transform="translate(0)">
                                  <g id="编组备份">
                                    <g
                                      id="Group-6-Copy-4"
                                      transform="translate(0)"
                                    >
                                      <g id="分组-3" transform="translate(0 0)">
                                        <path
                                          id="合并形状"
                                          d="M2.642,31.447a25.424,25.424,0,0,0,6.465.83A25.725,25.725,0,0,0,34.71,6.433V3.946H37.2A39.152,39.152,0,1,1-1.642,43.1,39.51,39.51,0,0,1-.4,33.232l.623-2.419Z"
                                          transform="translate(1.642 2.031)"
                                          fill="#fff"
                                          stroke="#fff"
                                          strokeWidth="3.283"
                                          fillRule="evenodd"
                                        />
                                        <path
                                          id="_3"
                                          data-name={3}
                                          d="M18.81,5.345A6.25,6.25,0,0,1,15.39,11.2c1.38.791,1.976,1.929,1.976,4.016a7.46,7.46,0,0,1-7.4,7.685c-3.921,0-6.337-2.119-6.337-5.345a6.969,6.969,0,0,1,.094-1.138H7.548a4.394,4.394,0,0,0-.063.7,2.224,2.224,0,0,0,2.51,2.277c1.976,0,3.482-1.9,3.482-4.016a2.256,2.256,0,0,0-2.51-2.467h-.6l.659-3.415h.627a3.581,3.581,0,0,0,3.262-3.7,2.032,2.032,0,0,0-2.1-2.277,3.353,3.353,0,0,0-3.2,2.751H5.7C6.669,1.992,9.43,0,13.351,0A5.185,5.185,0,0,1,18.81,5.345Z"
                                          transform="translate(4.353 0)"
                                          fill="#fff"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                            <g id="money" transform="translate(778 2511.971)">
                              <g
                                id="Group_21228"
                                data-name="Group 21228"
                                transform="translate(2.369 0.583)"
                              >
                                <path
                                  id="Path_35009"
                                  data-name="Path 35009"
                                  d="M10.028,40.308c8.793,0,14.831,4.555,19.068,4.555s13.135-2.436,13.135-21.927S30.26.583,25.6.583C3.777.583-5.544,40.308,10.028,40.308Z"
                                  transform="translate(-2.29 -0.583)"
                                  fill="#efefef"
                                />
                              </g>
                              <g
                                id="Group_21229"
                                data-name="Group 21229"
                                transform="translate(7.085 7.469)"
                              >
                                <path
                                  id="Path_35010"
                                  data-name="Path 35010"
                                  d="M7.907,9.814A1.907,1.907,0,1,1,9.814,7.907,1.909,1.909,0,0,1,7.907,9.814Zm0-2.542a.636.636,0,1,0,.636.636A.637.637,0,0,0,7.907,7.271Z"
                                  transform="translate(-6 -6)"
                                  fill="#a4afc1"
                                />
                              </g>
                              <g
                                id="Group_21230"
                                data-name="Group 21230"
                                transform="translate(15.665 8.422)"
                              >
                                <path
                                  id="Path_35011"
                                  data-name="Path 35011"
                                  d="M25.78,12.47c4.4,2.581,7.945,9.928,7.945,15.254,0,3.814-1.907,7.627-6.356,7.627H19.106c-4.449,0-6.356-3.814-6.356-7.627,0-5.326,3.547-12.674,7.945-15.254L16.538,9.013a1.27,1.27,0,0,1,.788-2.263H29.148a1.27,1.27,0,0,1,.788,2.263Z"
                                  transform="translate(-12.75 -6.75)"
                                  fill="#f3f3f1"
                                />
                              </g>
                              <g
                                id="Group_21231"
                                data-name="Group 21231"
                                transform="translate(15.665 8.422)"
                              >
                                <path
                                  id="Path_35012"
                                  data-name="Path 35012"
                                  d="M15.61,27.725c0-5.326,3.547-12.674,7.945-15.254L19.4,9.013a1.27,1.27,0,0,1,.788-2.263h-2.86a1.27,1.27,0,0,0-.788,2.263l4.157,3.458C16.3,15.051,12.75,22.4,12.75,27.725c0,3.814,1.907,7.627,6.356,7.627h2.86C17.517,35.352,15.61,31.538,15.61,27.725Z"
                                  transform="translate(-12.75 -6.75)"
                                  fill="#d5dbe1"
                                />
                              </g>
                              <g
                                id="Group_21232"
                                data-name="Group 21232"
                                transform="translate(18.018 7.469)"
                              >
                                <path
                                  id="Path_35013"
                                  data-name="Path 35013"
                                  d="M25.709,13.419l-1.192-1.49,4.321-3.458a.3.3,0,0,0,.1-.352.291.291,0,0,0-.294-.212H16.824a.291.291,0,0,0-.294.212.3.3,0,0,0,.1.351l4.322,3.459-1.192,1.49L15.441,9.961A2.223,2.223,0,0,1,16.824,6H28.648a2.224,2.224,0,0,1,1.381,3.962Z"
                                  transform="translate(-14.601 -6)"
                                />
                              </g>
                              <g
                                id="Group_21233"
                                data-name="Group 21233"
                                transform="translate(18.525 13.189)"
                              >
                                <path
                                  id="Path_35014"
                                  data-name="Path 35014"
                                  d="M15,10.5H30.254v1.907H15Z"
                                  transform="translate(-15 -10.5)"
                                />
                              </g>
                              <g
                                id="Group_21234"
                                data-name="Group 21234"
                                transform="translate(19.442 13.319)"
                              >
                                <path
                                  id="Path_35015"
                                  data-name="Path 35015"
                                  d="M26.563,35.26H17.982a7.351,7.351,0,0,1-2.261-.338l.589-1.815a5.393,5.393,0,0,0,1.673.245h8.581c3.988,0,5.4-3.595,5.4-6.674,0-5.258-3.563-12.137-7.475-14.433l.966-1.644c4.482,2.633,8.415,10.144,8.415,16.078C33.872,30.95,31.612,35.26,26.563,35.26Z"
                                  transform="translate(-15.721 -10.602)"
                                />
                              </g>
                              <g
                                id="Group_21235"
                                data-name="Group 21235"
                                transform="translate(22.975 22.088)"
                              >
                                <path
                                  id="Path_35016"
                                  data-name="Path 35016"
                                  d="M22.161,26.4H18.5V24.492h3.661a.795.795,0,0,0,0-1.589h-.966a2.7,2.7,0,0,1,0-5.4h3.661v1.907H21.195a.795.795,0,0,0,0,1.589h.966a2.7,2.7,0,0,1,0,5.4Z"
                                  transform="translate(-18.5 -17.5)"
                                />
                              </g>
                              <g
                                id="Group_21236"
                                data-name="Group 21236"
                                transform="translate(25.199 20.181)"
                              >
                                <path
                                  id="Path_35017"
                                  data-name="Path 35017"
                                  d="M20.25,16h1.907v3.814H20.25Z"
                                  transform="translate(-20.25 -16)"
                                />
                              </g>
                              <g
                                id="Group_21237"
                                data-name="Group 21237"
                                transform="translate(25.199 29.079)"
                              >
                                <path
                                  id="Path_35018"
                                  data-name="Path 35018"
                                  d="M20.25,23h1.907v3.814H20.25Z"
                                  transform="translate(-20.25 -23)"
                                />
                              </g>
                              <g
                                id="Group_21238"
                                data-name="Group 21238"
                                transform="translate(2 36.071)"
                              >
                                <path
                                  id="Path_35019"
                                  data-name="Path 35019"
                                  d="M2,28.5H42.678v1.907H2Z"
                                  transform="translate(-2 -28.5)"
                                />
                              </g>
                              <g
                                id="Group_21239"
                                data-name="Group 21239"
                                transform="translate(8.038 18.592)"
                              >
                                <path
                                  id="Path_35020"
                                  data-name="Path 35020"
                                  d="M14.695,17.928h3.814V14.75H14.059a7.309,7.309,0,1,0,0,14.619h4.449V26.191H14.695a4.131,4.131,0,1,1,0-8.263Z"
                                  transform="translate(-6.75 -14.75)"
                                  fill="#2fdf84"
                                />
                              </g>
                              <g
                                id="Group_21240"
                                data-name="Group 21240"
                                transform="translate(8.038 18.592)"
                              >
                                <path
                                  id="Path_35021"
                                  data-name="Path 35021"
                                  d="M9.61,22.059A7.309,7.309,0,0,1,16.92,14.75h-2.86a7.309,7.309,0,1,0,0,14.619h2.86A7.309,7.309,0,0,1,9.61,22.059Z"
                                  transform="translate(-6.75 -14.75)"
                                  fill="#00b871"
                                />
                              </g>
                              <g
                                id="Group_21241"
                                data-name="Group 21241"
                                transform="translate(7.085 17.639)"
                              >
                                <path
                                  id="Path_35022"
                                  data-name="Path 35022"
                                  d="M19.03,30.525H14.263a8.263,8.263,0,1,1,0-16.525H19.03a.954.954,0,0,1,.953.953v3.178a.954.954,0,0,1-.953.953H14.9a3.178,3.178,0,1,0,0,6.356H19.03a.954.954,0,0,1,.953.953v3.178A.954.954,0,0,1,19.03,30.525ZM14.263,15.907a6.356,6.356,0,0,0,0,12.712h3.814V27.347H14.9a5.085,5.085,0,0,1,0-10.17h3.178V15.907Z"
                                  transform="translate(-6 -14)"
                                />
                              </g>
                              <g
                                id="Group_21242"
                                data-name="Group 21242"
                                transform="translate(15.347 18.592)"
                              >
                                <path
                                  id="Path_35023"
                                  data-name="Path 35023"
                                  d="M12.5,14.75h1.907v3.178H12.5Z"
                                  transform="translate(-12.5 -14.75)"
                                />
                              </g>
                              <g
                                id="Group_21243"
                                data-name="Group 21243"
                                transform="translate(15.347 30.033)"
                              >
                                <path
                                  id="Path_35024"
                                  data-name="Path 35024"
                                  d="M12.5,23.75h1.907v3.178H12.5Z"
                                  transform="translate(-12.5 -23.75)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <span className="swiper-slide-label">Win Prizes</span>
                        <span className="swiper-slide-text">
                          The more you trade, the better chance you can win
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
              </div>
              <div className="info-guide-content">
                <h4>About the Challenge</h4>
                <p>
                  The Streak Challenge (the Challenge) is an incentive program
                  which enables traders to reap rewards for both their losses
                  and wins. 0.05% of the total trading volume on our platform is
                  sent towards the Streak Challenge progressive jackpot every
                  minute. Every time someone wins the Challenge, 0,1% out of
                  this juicy jackpot will be paid out to them. Learn how to beat
                  the Challenge:
                </p>
                <h5>Terms and Conditions:</h5>
                <p>
                  Users can only trade Up or trade Down in a session and must
                  trade in continuous bet sessions. Each trade in a session must
                  be at least $10. The number of winning streak or losing streak
                  must be 9. In the case that multiple users win the jackpot in
                  the same session, the prize will be divided equally between
                  these winning users. Users have to complete KYC on our system
                  to be eligible to participate in this challenge. Additionally,
                  there will be one special daily Mega prize 5X received amount
                  selected randomly from jackpot-winning users on the current
                  day. If there is no jackpot-winning user in the current day,
                  there will be no Mega prize. Please note that rewards will be
                  distributed to the account’s Wallet in about 48 hours.
                </p>
                <p>
                  We reserve the right to change or modify any of the terms and
                  conditions contained in the Terms and Conditions or any policy
                  or guideline of our platform, at any time and at our sole
                  discretion. Any changes or modifications will be effective
                  immediately upon posting the revisions on our platform or
                  notifying you of such changes or modifications via email.
                </p>
                <p>
                  The Community Jackpot program and its benefits are offered at
                  our sole discretion. We reserve the right to modify or
                  terminate the Jackpot prizes and how we evaluate and reward
                  your eligible trades.
                </p>
                <p>
                  We may, at our sole discretion, modify or terminate your right
                  to receive the Jackpot prizes upon discovery of any fraudulent
                  and dishonest acts conducted by you in order to earn more
                  Jackpot prizes under this promotional offer. You will be
                  disqualified from participating further in the Community
                  Jackpot program or permanently banned from using our services
                  without prior notice from our end for such occurrences. Our
                  decision shall be final and we will not enter into any
                  discussion regarding this matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakChanllenge;
