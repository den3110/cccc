import React from "react";
import "./AnalysBet.css";

const AnalysBet = () => {
  return (
    <div data-v-0dc9f329 id="analysis-wrapper" className="analysis-wrapper">
      <ul
        data-v-0dc9f329
        className="nav nav-pills tab-last-result d-flex w-100"
      >
        <li data-v-0dc9f329 id="community" className="nav-item">
          <a data-v-0dc9f329 className="nav-link text-capitalize active">
            Indicators
          </a>
        </li>
        <li data-v-0dc9f329 id="community" className="nav-item">
          <a data-v-0dc9f329 className="nav-link text-capitalize">
            Last results
          </a>
        </li>
        <li data-v-0dc9f329 className="navOverview" style={{ display: "none" }}>
          <div data-v-24a935a7 data-v-0dc9f329 className="ml-3">
            <div data-v-24a935a7>
              <div
                data-v-03d91928
                className="overviewInfo d-flex align-items-center my-auto"
              >
                <div data-v-03d91928 className="badgeItem">
                  <svg
                    data-v-03d91928
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.413"
                    height="12.844"
                    viewBox="0 0 25.413 12.844"
                  >
                    <g
                      data-v-03d91928
                      id="trend-up"
                      transform="translate(4.658 -8)"
                    >
                      <path
                        data-v-03d91928
                        id="Path_26233"
                        data-name="Path 26233"
                        d="M25.755,8H16.122l4.249,4.249-6.623,6.623L7.893,12.283a.8.8,0,0,0-1.129-.071L.342,17.831,1.4,19.04l5.822-5.095,5.893,6.629a.806.806,0,0,0,.576.27h.023a.8.8,0,0,0,.568-.235l7.225-7.225,4.249,4.249Z"
                        transform="translate(-5)"
                        fill="#1DBF75"
                      />
                    </g>
                  </svg>
                  <span data-v-03d91928 className="ml-1 ml-lg-3">
                    44
                  </span>
                </div>
                <div data-v-03d91928 className="badgeItem ml-2">
                  <svg
                    data-v-03d91928
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.587"
                    height="11.921"
                    viewBox="0 0 23.587 11.921"
                  >
                    <g
                      data-v-03d91928
                      id="trend-down"
                      transform="translate(-0.342 -8)"
                    >
                      <path
                        data-v-03d91928
                        id="Path_26234"
                        data-name="Path 26234"
                        d="M23.929,19.921H14.988l3.944-3.944L12.785,9.831,7.35,15.945a.744.744,0,0,1-1.048.066L.342,10.8l.981-1.122,5.4,4.729L12.2,8.25A.747.747,0,0,1,12.731,8h.022a.743.743,0,0,1,.527.218l6.705,6.705,3.944-3.944Z"
                        fill="#FA2843"
                      />
                    </g>
                  </svg>
                  <span data-v-03d91928 className="ml-1 ml-lg-3">
                    49
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div data-v-3162dcc5 data-v-0dc9f329 className="wrap-gauge-meter active">
        <div data-v-3162dcc5 className="wrap-gauge-meter-inner">
          <div data-v-3162dcc5 className="gauge-meter">
            <div data-v-3162dcc5 className="gauge-meter-sub gauge-meter--os">
              <div data-v-3162dcc5 className="v-popover gauge-meter-popover">
                <div className="trigger" style={{ display: "inline-block" }}>
                  <h3 data-v-3162dcc5 className="gauge-meter-title">
                    Oscillators
                    <span data-v-3162dcc5 className="gauge-meter-title-icon">
                      <svg
                        data-v-3162dcc5
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        className="colorSecondary"
                      >
                        <g
                          data-v-3162dcc5
                          id="c-question"
                          transform="translate(3.068 -8.774)"
                        >
                          <g
                            data-v-3162dcc5
                            id="Ellipse_1825"
                            data-name="Ellipse 1825"
                            transform="translate(-2.068 9.774)"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit={10}
                            strokeWidth={1}
                          >
                            <circle
                              data-v-3162dcc5
                              cx={10}
                              cy={10}
                              r={10}
                              stroke="none"
                            />
                            <circle
                              data-v-3162dcc5
                              cx={10}
                              cy={10}
                              r="10.5"
                              fill="none"
                            />
                          </g>
                          <g
                            data-v-3162dcc5
                            id="question"
                            transform="translate(3.497 13.43)"
                          >
                            <path
                              data-v-3162dcc5
                              id="Path_30768"
                              data-name="Path 30768"
                              d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                              transform="translate(-5.694 -1)"
                              fill="currentColor"
                            />
                            <ellipse
                              data-v-3162dcc5
                              id="Ellipse_1827"
                              data-name="Ellipse 1827"
                              cx="1.363"
                              cy="1.284"
                              rx="1.363"
                              ry="1.284"
                              transform="translate(2.252 11.56)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </h3>
                </div>{" "}
              </div>
              <h4 data-v-3162dcc5 className="gauge-meter-sub-title">
                Sell
              </h4>
              <div data-v-3162dcc5 className="gauge-meter-border">
                <div
                  data-v-3162dcc5
                  className="gauge-meter-background rank-2"
                />
                <ul data-v-3162dcc5 className="gauge-meter-label-list">
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--strong-sell"
                  >
                    strong
                    <br data-v-3162dcc5 />
                    sell
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--sell active"
                  >
                    sell
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--neutral"
                  >
                    neutral
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--buy"
                  >
                    buy
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--strong-buy"
                  >
                    strong
                    <br data-v-3162dcc5 />
                    buy
                  </li>
                </ul>
                <ul data-v-3162dcc5 className="gauge-meter-status-list mb-0">
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--sell"
                    >
                      5
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Sell
                    </span>
                  </li>
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--neutral"
                    >
                      2
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Neutral
                    </span>
                  </li>
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--buy"
                    >
                      2
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Buy
                    </span>
                  </li>
                </ul>
                <div
                  data-v-3162dcc5
                  className="gauge-meter-pane"
                  data-highcharts-chart={0}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    id="highcharts-gj2uu9e-0"
                    dir="ltr"
                    className="highcharts-container "
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "70px",
                      height: "35px",
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none",
                    }}
                  >
                    <svg
                      version="1.1"
                      className="highcharts-root"
                      style={{
                        fontFamily:
                          '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={70}
                      height={35}
                      viewBox="0 0 70 35"
                    >
                      <desc>Created with Highcharts 8.2.2</desc>
                      <defs>
                        <clipPath id="highcharts-gj2uu9e-2-">
                          <rect
                            x={0}
                            y={0}
                            width={70}
                            height={35}
                            fill="none"
                          />
                        </clipPath>
                        <linearGradient
                          x1={1}
                          y1={0}
                          x2={0}
                          y2={0}
                          id="highcharts-gj2uu9e-3"
                        >
                          <stop offset={0} stopColor="#fff" stopOpacity={1} />
                          <stop offset={1} stopColor="#000" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <rect
                        fill="rgba(0,0,0,0)"
                        className="highcharts-background"
                        x={0}
                        y={0}
                        width={70}
                        height={35}
                        rx={0}
                        ry={0}
                      />
                      <rect
                        fill="none"
                        className="highcharts-plot-background"
                        x={0}
                        y={0}
                        width={70}
                        height={35}
                      />
                      <g className="highcharts-pane-group" data-z-index={0} />
                      <rect
                        fill="none"
                        className="highcharts-plot-border"
                        data-z-index={1}
                        x={0}
                        y={0}
                        width={70}
                        height={35}
                      />
                      <g
                        className="highcharts-grid highcharts-yaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 0.5317286445727163 30.67231378165744"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 12.502433660971121 9.93844449083577"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 35 1.75"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 57.49756633902888 9.938444490835774"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 69.46827135542728 30.672313781657444"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 35 36.75 L 35 1.75"
                          opacity={1}
                        />
                      </g>
                      <g
                        className="highcharts-axis highcharts-yaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 0.5317286445727163 30.67231378165744 L -9.31634888554936 28.935832004988136"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 12.502433660971121 9.93844449083577 L 6.074557564105728 2.27800005964599"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 35 1.75 L 35 -8.25"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 57.49756633902888 9.938444490835774 L 63.925442435894276 2.278000059645997"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 69.46827135542728 30.672313781657444 L 79.31634888554936 28.935832004988143"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={2}
                          d="M 35 1.75 L 35 -8.25"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          data-z-index={7}
                          d="M 0 36.74999999999999 A 35 35 0 0 1 69.99998250000147 36.71500000583333 M 35 36.75 A 0 0 0 0 0 35 36.75"
                        />
                      </g>
                      <g className="highcharts-series-group" data-z-index={3}>
                        <g
                          className="highcharts-series highcharts-series-0 highcharts-gauge-series highcharts-color-0 highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(0,0) scale(1 1)"
                          clipPath="url(#highcharts-gj2uu9e-2-)"
                        >
                          <path
                            fill="url(#highcharts-gj2uu9e-3)"
                            d="M 0 -3 L 0.2975 -3 L 29.75 -1.5 L 29.75 1.5 L 0.2975 3 L 0 3 Z"
                            transform="translate(35,36.75) rotate(-128.57142857142856 0 0)"
                            data-z-index={1}
                            className="highcharts-dial"
                          />
                          <circle
                            cx={0}
                            cy={0}
                            r={5}
                            data-z-index={2}
                            className="highcharts-pivot"
                            transform="translate(35,36.75)"
                            fill="#000000"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-0 highcharts-gauge-series highcharts-color-0"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(0,0) scale(1 1)"
                          clipPath="none"
                        />
                      </g>
                      <text
                        x={35}
                        textAnchor="middle"
                        className="highcharts-title"
                        data-z-index={4}
                        style={{
                          color: "#333333",
                          fontSize: "18px",
                          fill: "#333333",
                        }}
                        y={14}
                      />
                      <text
                        x={35}
                        textAnchor="middle"
                        className="highcharts-subtitle"
                        data-z-index={4}
                        style={{ color: "#666666", fill: "#666666" }}
                        y={14}
                      />
                      <text
                        x={0}
                        textAnchor="start"
                        className="highcharts-caption"
                        data-z-index={4}
                        style={{ color: "#666666", fill: "#666666" }}
                        y={47}
                      />
                      <g className="highcharts-legend" data-z-index={7}>
                        <rect
                          fill="none"
                          className="highcharts-legend-box"
                          rx={0}
                          ry={0}
                          x={0}
                          y={0}
                          width={8}
                          height={8}
                          visibility="hidden"
                        />
                        <g data-z-index={1}>
                          <g />
                        </g>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-yaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x={35}
                          style={{
                            color: "rgba(0,0,0,0)",
                            cursor: "default",
                            fontSize: "11px",
                            fill: "rgba(0,0,0,0)",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y="1.75"
                          opacity={1}
                        >
                          0
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-3162dcc5 className="gauge-meter-sub gauge-meter--su">
              <div data-v-3162dcc5 className="v-popover gauge-meter-popover">
                <div className="trigger" style={{ display: "inline-block" }}>
                  <h3 data-v-3162dcc5 className="gauge-meter-title">
                    Summary
                    <span data-v-3162dcc5 className="gauge-meter-title-icon">
                      <svg
                        data-v-3162dcc5
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        className="colorSecondary"
                      >
                        <g
                          data-v-3162dcc5
                          id="c-question"
                          transform="translate(3.068 -8.774)"
                        >
                          <g
                            data-v-3162dcc5
                            id="Ellipse_1825"
                            data-name="Ellipse 1825"
                            transform="translate(-2.068 9.774)"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit={10}
                            strokeWidth={1}
                          >
                            <circle
                              data-v-3162dcc5
                              cx={10}
                              cy={10}
                              r={10}
                              stroke="none"
                            />
                            <circle
                              data-v-3162dcc5
                              cx={10}
                              cy={10}
                              r="10.5"
                              fill="none"
                            />
                          </g>
                          <g
                            data-v-3162dcc5
                            id="question"
                            transform="translate(3.497 13.43)"
                          >
                            <path
                              data-v-3162dcc5
                              id="Path_30768"
                              data-name="Path 30768"
                              d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                              transform="translate(-5.694 -1)"
                              fill="currentColor"
                            />
                            <ellipse
                              data-v-3162dcc5
                              id="Ellipse_1827"
                              data-name="Ellipse 1827"
                              cx="1.363"
                              cy="1.284"
                              rx="1.363"
                              ry="1.284"
                              transform="translate(2.252 11.56)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </h3>
                </div>{" "}
              </div>
              <h4 data-v-3162dcc5 className="gauge-meter-sub-title">
                Sell
              </h4>
              <div data-v-3162dcc5 className="gauge-meter-border">
                <div
                  data-v-3162dcc5
                  className="gauge-meter-background rank-2"
                />
                <ul data-v-3162dcc5 className="gauge-meter-label-list">
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--strong-sell"
                  >
                    strong
                    <br data-v-3162dcc5 />
                    sell
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--sell active"
                  >
                    sell
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--neutral"
                  >
                    neutral
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--buy"
                  >
                    buy
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--strong-buy"
                  >
                    strong
                    <br data-v-3162dcc5 />
                    buy
                  </li>
                </ul>
                <ul data-v-3162dcc5 className="gauge-meter-status-list mb-0">
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--sell"
                    >
                      15
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Sell
                    </span>
                  </li>
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--neutral"
                    >
                      2
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Neutral
                    </span>
                  </li>
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--buy"
                    >
                      4
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Buy
                    </span>
                  </li>
                </ul>
                <div
                  data-v-3162dcc5
                  className="gauge-meter-pane"
                  data-highcharts-chart={1}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    id="highcharts-gj2uu9e-6"
                    dir="ltr"
                    className="highcharts-container "
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "88px",
                      height: "44px",
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none",
                    }}
                  >
                    <svg
                      version="1.1"
                      className="highcharts-root"
                      style={{
                        fontFamily:
                          '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={88}
                      height={44}
                      viewBox="0 0 88 44"
                    >
                      <desc>Created with Highcharts 8.2.2</desc>
                      <defs>
                        <clipPath id="highcharts-gj2uu9e-8-">
                          <rect
                            x={0}
                            y={0}
                            width={88}
                            height={44}
                            fill="none"
                          />
                        </clipPath>
                        <linearGradient
                          x1={1}
                          y1={0}
                          x2={0}
                          y2={0}
                          id="highcharts-gj2uu9e-9"
                        >
                          <stop offset={0} stopColor="#fff" stopOpacity={1} />
                          <stop offset={1} stopColor="#000" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <rect
                        fill="rgba(0,0,0,0)"
                        className="highcharts-background"
                        x={0}
                        y={0}
                        width={88}
                        height={44}
                        rx={0}
                        ry={0}
                      />
                      <rect
                        fill="none"
                        className="highcharts-plot-background"
                        x={0}
                        y={0}
                        width={88}
                        height={44}
                      />
                      <g className="highcharts-pane-group" data-z-index={0} />
                      <rect
                        fill="none"
                        className="highcharts-plot-border"
                        data-z-index={1}
                        x={0}
                        y={0}
                        width={88}
                        height={44}
                      />
                      <g
                        className="highcharts-grid highcharts-yaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 0.6684588674628458 38.55948018265507"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 5.894882233484694 24.200000000000006"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 15.717345173792268 12.494044502764972"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 28.951113693670578 4.853524685420034"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 44 2.200000000000003"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 59.04888630632943 4.853524685420034"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 72.28265482620773 12.494044502764979"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 82.1051177665153 24.20000000000001"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 44 46.2 L 87.33154113253715 38.55948018265508"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 44 46.2 L 44 2.200000000000003"
                          opacity={1}
                        />
                      </g>
                      <g
                        className="highcharts-axis highcharts-yaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 0.6684588674628458 38.55948018265507 L -9.17961866265923 36.82299840598577"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 5.894882233484694 24.200000000000006 L -2.765371804359688 19.200000000000006"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 15.717345173792268 12.494044502764972 L 9.289469076926878 4.833600071575191"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 28.951113693670578 4.853524685420034 L 25.53091226041389 -4.543401522439055"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 44 2.200000000000003 L 44 -7.799999999999997"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 59.04888630632943 4.853524685420034 L 62.469087739586115 -4.543401522439048"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 72.28265482620773 12.494044502764979 L 78.71053092307312 4.833600071575198"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 82.1051177665153 24.20000000000001 L 90.76537180435969 19.200000000000014"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 87.33154113253715 38.55948018265508 L 97.17961866265924 36.82299840598577"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={2}
                          d="M 44 2.200000000000003 L 44 -7.799999999999997"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          data-z-index={7}
                          d="M 0 46.199999999999996 A 44 44 0 0 1 87.99997800000183 46.15600000733333 M 44 46.2 A 0 0 0 0 0 44 46.2"
                        />
                      </g>
                      <g className="highcharts-series-group" data-z-index={3}>
                        <g
                          className="highcharts-series highcharts-series-0 highcharts-gauge-series highcharts-color-0 highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(0,0) scale(1 1)"
                          clipPath="url(#highcharts-gj2uu9e-8-)"
                        >
                          <path
                            fill="url(#highcharts-gj2uu9e-9)"
                            d="M 0 -3 L 0.374 -3 L 37.4 -1.5 L 37.4 1.5 L 0.374 3 L 0 3 Z"
                            transform="translate(44,46.2) rotate(-146.70628210526317 0 0)"
                            data-z-index={1}
                            className="highcharts-dial"
                          />
                          <circle
                            cx={0}
                            cy={0}
                            r={5}
                            data-z-index={2}
                            className="highcharts-pivot"
                            transform="translate(44,46.2)"
                            fill="#000000"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-0 highcharts-gauge-series highcharts-color-0"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(0,0) scale(1 1)"
                          clipPath="none"
                        />
                      </g>
                      <text
                        x={44}
                        textAnchor="middle"
                        className="highcharts-title"
                        data-z-index={4}
                        style={{
                          color: "#333333",
                          fontSize: "18px",
                          fill: "#333333",
                        }}
                        y={14}
                      />
                      <text
                        x={44}
                        textAnchor="middle"
                        className="highcharts-subtitle"
                        data-z-index={4}
                        style={{ color: "#666666", fill: "#666666" }}
                        y={14}
                      />
                      <text
                        x={0}
                        textAnchor="start"
                        className="highcharts-caption"
                        data-z-index={4}
                        style={{ color: "#666666", fill: "#666666" }}
                        y={56}
                      />
                      <g className="highcharts-legend" data-z-index={7}>
                        <rect
                          fill="none"
                          className="highcharts-legend-box"
                          rx={0}
                          ry={0}
                          x={0}
                          y={0}
                          width={8}
                          height={8}
                          visibility="hidden"
                        />
                        <g data-z-index={1}>
                          <g />
                        </g>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-yaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x={44}
                          style={{
                            color: "rgba(0,0,0,0)",
                            cursor: "default",
                            fontSize: "11px",
                            fill: "rgba(0,0,0,0)",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y="2.200000000000003"
                          opacity={1}
                        >
                          0
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-3162dcc5 className="gauge-meter-sub gauge-meter--ma">
              <div data-v-3162dcc5 className="v-popover gauge-meter-popover">
                <div className="trigger" style={{ display: "inline-block" }}>
                  <h3 data-v-3162dcc5 className="gauge-meter-title">
                    Moving Averages
                    <span data-v-3162dcc5 className="gauge-meter-title-icon">
                      <svg
                        data-v-3162dcc5
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        className="colorSecondary"
                      >
                        <g
                          data-v-3162dcc5
                          id="c-question"
                          transform="translate(3.068 -8.774)"
                        >
                          <g
                            data-v-3162dcc5
                            id="Ellipse_1825"
                            data-name="Ellipse 1825"
                            transform="translate(-2.068 9.774)"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeMiterlimit={10}
                            strokeWidth={1}
                          >
                            <circle
                              data-v-3162dcc5
                              cx={10}
                              cy={10}
                              r={10}
                              stroke="none"
                            />
                            <circle
                              data-v-3162dcc5
                              cx={10}
                              cy={10}
                              r="10.5"
                              fill="none"
                            />
                          </g>
                          <g
                            data-v-3162dcc5
                            id="question"
                            transform="translate(3.497 13.43)"
                          >
                            <path
                              data-v-3162dcc5
                              id="Path_30768"
                              data-name="Path 30768"
                              d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                              transform="translate(-5.694 -1)"
                              fill="currentColor"
                            />
                            <ellipse
                              data-v-3162dcc5
                              id="Ellipse_1827"
                              data-name="Ellipse 1827"
                              cx="1.363"
                              cy="1.284"
                              rx="1.363"
                              ry="1.284"
                              transform="translate(2.252 11.56)"
                              fill="currentColor"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </h3>
                </div>{" "}
              </div>
              <h4 data-v-3162dcc5 className="gauge-meter-sub-title">
                Strong sell
              </h4>
              <div data-v-3162dcc5 className="gauge-meter-border">
                <div
                  data-v-3162dcc5
                  className="gauge-meter-background rank-1"
                />
                <ul data-v-3162dcc5 className="gauge-meter-label-list">
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--strong-sell active"
                  >
                    strong
                    <br data-v-3162dcc5 />
                    sell
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--sell"
                  >
                    sell
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--neutral"
                  >
                    neutral
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--buy"
                  >
                    buy
                  </li>
                  <li
                    data-v-3162dcc5
                    className="gauge-meter-label-item gauge-meter-label-item--strong-buy"
                  >
                    strong
                    <br data-v-3162dcc5 />
                    buy
                  </li>
                </ul>
                <ul data-v-3162dcc5 className="gauge-meter-status-list mb-0">
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--sell"
                    >
                      10
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Sell
                    </span>
                  </li>
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--neutral"
                    >
                      0
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Neutral
                    </span>
                  </li>
                  <li data-v-3162dcc5 className="gauge-meter-status-item">
                    <span
                      data-v-3162dcc5
                      className="gauge-meter-status-value gauge-meter-status-value--buy"
                    >
                      2
                    </span>
                    <span data-v-3162dcc5 className="gauge-meter-status-text">
                      Buy
                    </span>
                  </li>
                </ul>
                <div
                  data-v-3162dcc5
                  className="gauge-meter-pane"
                  data-highcharts-chart={2}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    id="highcharts-gj2uu9e-12"
                    dir="ltr"
                    className="highcharts-container "
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: "70px",
                      height: "35px",
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none",
                    }}
                  >
                    <svg
                      version="1.1"
                      className="highcharts-root"
                      style={{
                        fontFamily:
                          '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={70}
                      height={35}
                      viewBox="0 0 70 35"
                    >
                      <desc>Created with Highcharts 8.2.2</desc>
                      <defs>
                        <clipPath id="highcharts-gj2uu9e-14-">
                          <rect
                            x={0}
                            y={0}
                            width={70}
                            height={35}
                            fill="none"
                          />
                        </clipPath>
                        <linearGradient
                          x1={1}
                          y1={0}
                          x2={0}
                          y2={0}
                          id="highcharts-gj2uu9e-15"
                        >
                          <stop offset={0} stopColor="#fff" stopOpacity={1} />
                          <stop offset={1} stopColor="#000" stopOpacity={1} />
                        </linearGradient>
                      </defs>
                      <rect
                        fill="rgba(0,0,0,0)"
                        className="highcharts-background"
                        x={0}
                        y={0}
                        width={70}
                        height={35}
                        rx={0}
                        ry={0}
                      />
                      <rect
                        fill="none"
                        className="highcharts-plot-background"
                        x={0}
                        y={0}
                        width={70}
                        height={35}
                      />
                      <g className="highcharts-pane-group" data-z-index={0} />
                      <rect
                        fill="none"
                        className="highcharts-plot-border"
                        data-z-index={1}
                        x={0}
                        y={0}
                        width={70}
                        height={35}
                      />
                      <g
                        className="highcharts-grid highcharts-yaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 0.5317286445727163 30.67231378165744"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 12.502433660971121 9.93844449083577"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 35 1.75"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 57.49756633902888 9.938444490835774"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-grid-line"
                          d="M 35 36.75 L 69.46827135542728 30.672313781657444"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 35 36.75 L 35 1.75"
                          opacity={1}
                        />
                      </g>
                      <g
                        className="highcharts-axis highcharts-yaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 0.5317286445727163 30.67231378165744 L -9.31634888554936 28.935832004988136"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 12.502433660971121 9.93844449083577 L 6.074557564105728 2.27800005964599"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 35 1.75 L 35 -8.25"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 57.49756633902888 9.938444490835774 L 63.925442435894276 2.278000059645997"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-minor-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          d="M 69.46827135542728 30.672313781657444 L 79.31634888554936 28.935832004988143"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-tick"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={2}
                          d="M 35 1.75 L 35 -8.25"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="rgba(0,0,0,0)"
                          strokeWidth={1}
                          data-z-index={7}
                          d="M 0 36.74999999999999 A 35 35 0 0 1 69.99998250000147 36.71500000583333 M 35 36.75 A 0 0 0 0 0 35 36.75"
                        />
                      </g>
                      <g className="highcharts-series-group" data-z-index={3}>
                        <g
                          className="highcharts-series highcharts-series-0 highcharts-gauge-series highcharts-color-0 highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(0,0) scale(1 1)"
                          clipPath="url(#highcharts-gj2uu9e-14-)"
                        >
                          <path
                            fill="url(#highcharts-gj2uu9e-15)"
                            d="M 0 -3 L 0.2975 -3 L 29.75 -1.5 L 29.75 1.5 L 0.2975 3 L 0 3 Z"
                            transform="translate(35,36.75) rotate(-154.88599500000004 0 0)"
                            data-z-index={1}
                            className="highcharts-dial"
                          />
                          <circle
                            cx={0}
                            cy={0}
                            r={5}
                            data-z-index={2}
                            className="highcharts-pivot"
                            transform="translate(35,36.75)"
                            fill="#000000"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-0 highcharts-gauge-series highcharts-color-0"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(0,0) scale(1 1)"
                          clipPath="none"
                        />
                      </g>
                      <text
                        x={35}
                        textAnchor="middle"
                        className="highcharts-title"
                        data-z-index={4}
                        style={{
                          color: "#333333",
                          fontSize: "18px",
                          fill: "#333333",
                        }}
                        y={14}
                      />
                      <text
                        x={35}
                        textAnchor="middle"
                        className="highcharts-subtitle"
                        data-z-index={4}
                        style={{ color: "#666666", fill: "#666666" }}
                        y={14}
                      />
                      <text
                        x={0}
                        textAnchor="start"
                        className="highcharts-caption"
                        data-z-index={4}
                        style={{ color: "#666666", fill: "#666666" }}
                        y={47}
                      />
                      <g className="highcharts-legend" data-z-index={7}>
                        <rect
                          fill="none"
                          className="highcharts-legend-box"
                          rx={0}
                          ry={0}
                          x={0}
                          y={0}
                          width={8}
                          height={8}
                          visibility="hidden"
                        />
                        <g data-z-index={1}>
                          <g />
                        </g>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-yaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x={35}
                          style={{
                            color: "rgba(0,0,0,0)",
                            cursor: "default",
                            fontSize: "11px",
                            fill: "rgba(0,0,0,0)",
                          }}
                          textAnchor="middle"
                          transform="translate(0,0)"
                          y="1.75"
                          opacity={1}
                        >
                          0
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-v-0dc9f329 id="historyBox" className="historyBox">
        <div data-v-52f11851 data-v-0dc9f329 className="blockResult">
          <div data-v-52f11851 className="row">
            <div data-v-52f11851 className="col">
              <canvas
                data-v-ce6a65e8
                data-v-52f11851
                id="cv_0"
                width={340}
                height={290}
              />
            </div>
            <div data-v-52f11851 className="col">
              <canvas
                data-v-ce6a65e8
                data-v-52f11851
                id="cv_1"
                width={340}
                height={290}
              />
            </div>
            <div data-v-52f11851 className="col">
              <canvas
                data-v-ce6a65e8
                data-v-52f11851
                id="cv_2"
                width={340}
                height={290}
              />
            </div>
            <div data-v-52f11851 className="col">
              <canvas
                data-v-ce6a65e8
                data-v-52f11851
                id="cv_3"
                width={340}
                height={290}
              />
            </div>
            <div data-v-52f11851 className="col">
              <canvas
                data-v-ce6a65e8
                data-v-52f11851
                id="cv_4"
                width={340}
                height={290}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysBet;
