import React, { useContext } from "react";
import "./Binary.css";
import ChartIndex from "../Chart/ChartIndex";
import AnalysBet from "../AnalysBet/AnalysBet";
import { MainContext } from "../../../pages/Index/Index";
import { useMediaQuery } from "react-responsive";

const Binary = () => {
  const {openHistoryBet }= useContext(MainContext)
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      data-v-0dc9f329
      id="leftContent"
      className={`leftContent ${isDesktopScreen ? "h-100" : ""} ${openHistoryBet=== false ? "hideTransaction" : ""}`}
    >
      <div
        data-v-0dc9f329
        id="candle-wrap"
        className="postion-relative bgSecondary8 chartBox"
      >
        <div className="h-100">
          <div
            data-v-0dc9f329
            id="candle-wrap"
            className="postion-relative bgSecondary8 chartBox"
          >
            <div data-v-60e92d8a className="indicatorsPopup">
              <div data-v-60e92d8a className="position-relative">
                <button
                  data-v-60e92d8a
                  type="button"
                  className="btnIndicator d-flex align-items-center justify-content-center"
                >
                  <img data-v-60e92d8a src="/img/mgicon.07237b56.svg" />
                </button>
                <div data-v-60e92d8a>{/**/}</div>
              </div>
            </div>
            <div id="chart-instance" className="chart-instance" data-highcharts-chart="7">
                <ChartIndex />
            </div>
          </div>
        </div>
      </div>
      { 
        isDesktopScreen &&
        <AnalysBet />
      }
    </div>
  );
};

export default Binary
