import React, { useContext } from "react";
import "./Binary.css";
import ChartIndex from "../Chart/ChartIndex";
import AnalysBet from "../AnalysBet/AnalysBet";
import { MainContext } from "../../../pages/Index/Index";

const Binary = () => {
  const {openHistoryBet }= useContext(MainContext)

  return (
    <div
      data-v-0dc9f329
      id="leftContent"
      className={`leftContent h-100 ${openHistoryBet=== false ? "hideTransaction" : ""}`}
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
      <AnalysBet />
    </div>
  );
};

export default Binary
