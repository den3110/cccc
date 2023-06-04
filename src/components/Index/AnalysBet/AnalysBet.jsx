import React, { useContext, useEffect, useRef, useState } from "react";
import "./AnalysBet.css";
// import { Tab, Tabs } from "react-bootstrap";
import Chart from "highcharts-react-official";
import $ from "jquery";
import { TradingContext } from "../../../pages/Index/Trading/Trading";
import { SocketContainerContext } from "../../../utils/SocketContainer/SocketContainer";

function convertTextValueMeter(t) {
  return t >= -90 && t <= -54
    ? { cl: "rank-1", text: "Strong sell", index: 1 }
    : t > -54 && t <= -18
    ? { cl: "rank-2", text: "Sell", index: 2 }
    : t > -18 && t <= 17
    ? { cl: "rank-3", text: "Neutral", index: 3 }
    : t > 17 && t <= 53
    ? { cl: "rank-4", text: "Buy", index: 4 }
    : t > 53
    ? { cl: "rank-5", text: "Strong Buy", index: 5 }
    : void 0;
}
const AnalysBet = () => {
  const gaugeMeterSu = {
    chart: {
      type: "gauge",
      plotBorderWidth: null,
      backgroundColor: "rgba(0,0,0,0)",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      height: 60,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
      events: {
        render(t) {
          let td = t.target.series[0].points[0].y;
          let n = convertTextValueMeter(td);
          $(".gauge-meter--su .gauge-meter-background")
            .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
            .addClass(n.cl);
          $(".gauge-meter--su .gauge-meter-label-item").removeClass("active");
          $(
            ".gauge-meter--su .gauge-meter-label-item:nth-child(" +
              n.index +
              ")"
          ).addClass("active");
        },
      },
      animation: {
        duration: 1500,
        easing: "easeOutBounce",
      },
    },

    title: {
      text: "",
    },

    pane: [
      {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "105%"],
        size: 120,
      },
    ],

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: true,
    },

    yAxis: [
      {
        min: -90,
        max: 90,
        minorTickPosition: "outside",
        tickPosition: "outside",
        labels: {
          rotation: "auto",
          distance: 0,
          style: {
            color: "rgba(0,0,0,0)",
          },
        },
        pane: 0,
        title: "",
        minorTickColor: "rgba(0,0,0,0)",
        lineColor: "rgba(0,0,0,0)",
        tickColor: "rgba(0,0,0,0)",
      },
    ],

    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: false,
        },
        dial: {
          radius: "85%",
          baseLength: "1%",
          rearLength: 0,
          backgroundColor: {
            linearGradient: {
              x1: 1,
              y1: 0,
              x2: 0,
              y2: 0,
            },
            stops: [
              [0, "#fff"],
              [1, "#000"],
            ],
          },
          baseWidth: 6,
          topWidth: 3,
        },
      },
    },

    series: [
      {
        name: "Summary",
        data: [10],
        yAxis: 0,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 89,
          },
          chartOptions: {
            chart: {
              height: 44,
            },
            pane: [
              {
                size: 60,
              },
            ],
          },
        },
      ],
    },
    // ,
    // watch: {
    //   chartOptions: {
    //     handler(val) {
    //       if (this.$refs.chartStock.chart) {
    //         var chartInstance = chartGet;
    //         this.$refs.chartStock.chart.redraw();
    //         chartGet.redraw();
    //       }
    //     },
    //     deep: true,
    //   },
    // },
  };

  const gaugeMeterMa = {
    chart: {
      type: "gauge",
      plotBorderWidth: null,
      backgroundColor: "rgba(0,0,0,0)",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      height: 50,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
      events: {
        render(t) {
          let td = t.target.series[0].points[0].y;
          let n = convertTextValueMeter(td);
          $(".gauge-meter--ma .gauge-meter-background")
            .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
            .addClass(n.cl);
          $(".gauge-meter--ma .gauge-meter-label-item").removeClass("active");
          $(
            ".gauge-meter--ma .gauge-meter-label-item:nth-child(" +
              n.index +
              ")"
          ).addClass("active");
        },
      },
      animation: {
        duration: 1000,
        easing: "easeOutBounce",
      },
    },

    title: {
      text: "",
    },

    pane: [
      {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "105%"],
        size: 100,
      },
    ],

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: true,
    },

    yAxis: [
      {
        min: -90,
        max: 90,
        minorTickPosition: "outside",
        tickPosition: "outside",
        labels: {
          rotation: "auto",
          distance: 0,
          style: {
            color: "rgba(0,0,0,0)",
          },
        },
        pane: 0,
        title: "",
        minorTickColor: "rgba(0,0,0,0)",
        lineColor: "rgba(0,0,0,0)",
        tickColor: "rgba(0,0,0,0)",
      },
    ],

    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: false,
        },
        dial: {
          radius: "85%",
          baseLength: "1%",
          rearLength: 0,
          backgroundColor: {
            linearGradient: {
              x1: 1,
              y1: 0,
              x2: 0,
              y2: 0,
            },
            stops: [
              [0, "#fff"],
              [1, "#000"],
            ],
          },
          baseWidth: 6,
          topWidth: 3,
        },
      },
    },

    series: [
      {
        name: "ma",
        data: [5],
        yAxis: 0,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 71,
          },
          chartOptions: {
            chart: {
              height: 35,
            },
            pane: [
              {
                size: 50,
              },
            ],
          },
        },
      ],
    },
  };
  const gaugeMeterOs = {
    chart: {
      type: "gauge",
      plotBorderWidth: null,
      backgroundColor: "rgba(0,0,0,0)",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      height: 50,
      spacingBottom: 0,
      spacingTop: 0,
      spacingLeft: 0,
      spacingRight: 0,
      events: {
        render(t) {
          let td = t.target.series[0].points[0].y;
          let n = convertTextValueMeter(td);
          $(".gauge-meter--os .gauge-meter-background")
            .removeClass("rank-1 rank-2 rank-3 rank-4 rank-5")
            .addClass(n.cl);
          $(".gauge-meter--os .gauge-meter-label-item").removeClass("active");
          $(
            ".gauge-meter--os .gauge-meter-label-item:nth-child(" +
              n.index +
              ")"
          ).addClass("active");
        },
      },
      animation: {
        duration: 1500,
        easing: "easeOutBounce",
      },
    },

    title: {
      text: "",
    },

    pane: [
      {
        startAngle: -90,
        endAngle: 90,
        background: null,
        center: ["50%", "105%"],
        size: 140,
      },
    ],

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: true,
    },

    yAxis: [
      {
        min: -90,
        max: 90,
        maxPadding: 0.1,
        minorTickPosition: "outside",
        tickPosition: "outside",
        labels: {
          rotation: "auto",
          distance: 0,
          style: {
            color: "rgba(0,0,0,0)",
          },
        },
        pane: 0,
        title: "",
        minorTickColor: "rgba(0,0,0,0)",
        lineColor: "rgba(0,0,0,0)",
        tickColor: "rgba(0,0,0,0)",
      },
    ],

    plotOptions: {
      gauge: {
        dataLabels: {
          enabled: false,
        },
        dial: {
          radius: "85%",
          baseLength: "1%",
          rearLength: 0,
          backgroundColor: {
            linearGradient: {
              x1: 1,
              y1: 0,
              x2: 0,
              y2: 0,
            },
            stops: [
              [0, "#fff"],
              [1, "#000"],
            ],
          },
          baseWidth: 6,
          topWidth: 3,
        },
      },
    },

    series: [
      {
        name: "Oscillator",
        data: [10],
        yAxis: 0,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 71,
          },
          chartOptions: {
            chart: {
              height: 35,
            },
            pane: [
              {
                size: 50,
              },
            ],
          },
          windowWidth: 0,
          windowHeight: 0,
        },
      ],
    },
  };
  const { data } = useContext(TradingContext);
  const {socketWeb }= useContext(SocketContainerContext)
  const [textTitleOs, setTextTitleOs] = useState("NEUTRAL");
  const [totalBuyStatic, setTotalBuyStatic] = useState(0);
  const [NumOscSELL, setNumOscSELL] = useState(0);
  const [activeGau, setActiveGau] = useState(false);
  const [activeHis, setActiveHis] = useState(false);
  const [NumOscNeutral, setNumOscNeutral] = useState(0);
  const [NumOscBUY, setNumOscBUY] = useState(0);
  const [textTitleSu, setTextTitleSu] = useState("NEUTRAL");
  const [NumSumSELL, setNumSumSELL] = useState(0);
  const [NumSumNeutral, setNumSumNeutral] = useState(0);
  const [NumSumBUY, setNumSumBUY] = useState(0);
  const [textTitleMa, setTextTitleMa] = useState("NEUTRAL");
  const [NumMovSELL, setNumMovSELL] = useState(0);
  const [NumMovBUY, setNumMovBUY] = useState(0);
  const [NumMovNeutral, setNumMovNeutral] = useState(0);
  const [totalSellStatic, setTotalSellStatic] = useState(0);
  const [optionsOs, setOptionsOs] = useState(gaugeMeterOs);
  const [optionsMa, setOptionsMa] = useState(gaugeMeterMa);
  const [optionsSu, setOptionSu] = useState(gaugeMeterSu);
  const [activeTab, setActiveTab] = useState(true);
  const chartOs = useRef();
  const chartSu = useRef();
  const chartMa = useRef();
  const lastResultBet = useRef();
  const bet1Ref= useRef()
  const bet2Ref= useRef()
  const bet3Ref= useRef()
  const bet4Ref= useRef()
  const bet5Ref= useRef()

  const finalSideCompare= (a, b)=> {
    if(parseFloat(a) > parseFloat(b)) {
      return "UP"
    }
    else if(parseFloat(a) < parseFloat(b)) {
      return "DOWN"
    }
    else {
      return "NORMAL"
    }
  }
  useEffect(() => {
    if(data) {
      const lastResultPrice = data?.d?.[data?.d?.length - 1];
      const firstItemBet= lastResultPrice?.[9] % 20
      let lastItemBet= 20 - firstItemBet - 1
      if(lastItemBet=== 0) {
        lastItemBet= 20
      }
      // const lastItemBet= 100 - firstItemBet
      // console.log(lastItemBet)
      // const lastItemBet= 100 - parseInt(firstItemBet)
      const a1= data?.d?.slice(lastItemBet , 100)
      console.log(data?.d)
      console.log(a1?.d)
      const arrayItemBet= data?.d?.slice(lastItemBet , 100)?.map(item=> ({session: item[9], gid: 0, finalSide: finalSideCompare(item[1], item[4]), id: item[9] }))
      lastResultBet.current= arrayItemBet 
      if(document?.querySelectorAll(".rounded-full")) {
        let spans= document?.querySelectorAll(".rounded-full")
        lastResultBet?.current?.map((item, key)=> {
          if(item?.finalSide=== "DOWN") {
            return spans[key].classList.add("bet-buy")
          }
          else if(item?.finalSide=== "UP") {
            return spans[key].classList.add("bet-sell")
          }
          else {
            return spans[key].classList.add("bet-normal")
          }
        })
      }
      // console.log(lastResultBet?.current)
    }
  }, [data]);
  useEffect(()=> {
    if(socketWeb) {
      socketWeb.addEventListener("message", (e)=> {
        if (
          e.data.indexOf("BO_PRICE") > -1 ||
          e.data.indexOf("TRADER_SENTIMENT") > -1 ||
          e.data.indexOf("BO_CHART_INDICATORS") > -1
        ) {
          // lastUpdatePrice = new Date();
          let data = e.data.replace("42[", "[");
          //   handleDataWs(data);
            const newData = JSON.parse(data);
            if (newData[0] === "BO_PRICE") {
              onReceiveSocketData(newData[1]);
            }
        }
      })
    }
  }, [socketWeb])
  const onReceiveSocketData= (data)=> {
    if(parseInt(data?.order) === 1) {
      lastResultBet.current= lastResultBet?.current?.concat([{finalSide: finalSideCompare(data?.openPrice, data?.closePrice), session: data?.session, gid: 0, id: data?.session}])
        let spans= document.querySelectorAll(".rounded-full")
        lastResultBet?.current?.map((item, key)=> {
          if(item?.finalSide=== "DOWN") {
            return spans[key].classList.add("bet-buy")
          }
          else if(item?.finalSide=== "UP") {
            return spans[key].classList.add("bet-sell")
          }
          else {
            return spans[key].classList.add("bet-normal")
          }
        })
        if(lastResultBet?.current?.length >= 100) {
          lastResultBet.current= lastResultBet?.current?.slice(20, 100)
          spans.forEach(item=> item.classList.remove("bet-buy"))
          spans.forEach(item=> item.classList.remove("bet-sell"))
          spans.forEach(item=> item.classList.remove("bet-normal"))
        }

        lastResultBet?.current?.map((item, key)=> {
          if(item?.finalSide=== "DOWN") {
            return spans[key].classList.add("bet-buy")
          }
          else if(item?.finalSide=== "UP") {
            return spans[key].classList.add("bet-sell")
          }
          else {
            return spans[key].classList.add("bet-normal")
          }
        })
      }
    }
  const StaSummary = (e) => {
    try {
      let chart = chartSu.current.chart;

      let left = chart.series[0].points[0],
        leftVal;

      //Summary
      // this.NumSumBUY = e.b;
      // this.NumSumSELL = e.s;
      // this.NumSumNeutral = e.m;
      setNumSumBUY(e.b);
      setNumSumSELL(e.s);
      setNumSumNeutral(e.m);

      if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
        setTextTitleSu("NEUTRAL");
        left.update(0, true);
        chart.redraw();
        return;
      }
      if (e.s > e.b) {
        leftVal = -35;
        setTextTitleSu("SELL");
        if (e.s >= 5) {
          leftVal = -50;
          setTextTitleSu("STRONG SELL");
        }
        left.update(leftVal, true);
        chart.redraw();
      } else if (e.s < e.b) {
        leftVal = 35;
        setTextTitleSu("BUY");
        if (e.b >= 5) {
          leftVal = 50;
          setTextTitleSu("STRONG BUY");
        }
        left.update(leftVal, true);
        chart.redraw();
      }
    } catch {}
  };

  const StaOscillators = (e) => {
    try {
      let chart = chartOs.current.chart;

      let left = chart.series[0].points[0],
        leftVal;

      setNumOscBUY(e.b);
      setNumOscSELL(e.s);
      setNumOscNeutral(e.m);

      if ((e.m > e.s && e.m > e.b) || (e.m === e.s && e.m === e.b)) {
        setTextTitleOs("NEUTRAL");
        left.update(0, true);
        chart.redraw();
      }
      if (e.s > e.b) {
        leftVal = -35;
        setTextTitleOs("SELL");
        if (e.s >= 5) {
          leftVal = -50;
          setTextTitleOs("STRONG SELL");
        }
        left.update(leftVal, true);
        chart.redraw();
      } else if (e.s < e.b) {
        leftVal = 35;
        setTextTitleOs("BUY");
        if (e.b >= 5) {
          leftVal = 50;
          setTextTitleOs("STRONG BUY");
        }
        left.update(leftVal, true);
      }
      chart.redraw();
    } catch (e) {
    } finally {
    }
  };

  return (
    <div id="analysis-wrapper" className="analysis-wrapper relative">
      <ul
        data-v-0dc9f329
        className="nav nav-pills tab-last-result d-flex w-100"
      >
        <li data-v-0dc9f329 id="community" className="nav-item">
          <a
            onClick={() => setActiveTab(true)}
            data-v-0dc9f329
            className={`nav-link text-capitalize ${
              activeTab === true ? "active" : ""
            }`}
          >
            Indicators
          </a>
        </li>
        <li data-v-0dc9f329 id="community" className="nav-item">
          <a
            onClick={() => setActiveTab(false)}
            data-v-0dc9f329
            className={`nav-link text-capitalize ${
              activeTab === false ? "active" : ""
            }`}
          >
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
                    36
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
                    44
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {activeTab === true && (
        <div className="wrap-gauge-meter b-desktop">
          <div className="wrap-gauge-meter-inner">
            <div data-v-3162dcc5 className="gauge-meter">
              <div className="gauge-meter-sub gauge-meter--os">
                <div className="v-popover gauge-meter-popover">
                  <div className="trigger inline-block">
                    <h3 className="gauge-meter-title">
                      Oscillators
                      <span className="gauge-meter-title-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <g
                            id="c-question"
                            transform="translate(3.068 -8.774)"
                          >
                            <g
                              id="Ellipse_1825"
                              data-name="Ellipse 1825"
                              transform="translate(-2.068 9.774)"
                              fill="none"
                              stroke="#fefefe"
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeWidth="1"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="10"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="10"
                                cy="10"
                                r="10.5"
                                fill="none"
                              ></circle>
                            </g>
                            <g id="question" transform="translate(3.497 13.43)">
                              <path
                                id="Path_30768"
                                data-name="Path 30768"
                                d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                transform="translate(-5.694 -1)"
                                fill="#fefefe"
                              ></path>
                              <ellipse
                                id="Ellipse_1827"
                                data-name="Ellipse 1827"
                                cx="1.363"
                                cy="1.284"
                                rx="1.363"
                                ry="1.284"
                                transform="translate(2.252 11.56)"
                                fill="#fefefe"
                              ></ellipse>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </h3>
                  </div>
                </div>
                <h4 className="gauge-meter-sub-title">{textTitleOs}</h4>
                <div data-v-3162dcc5 className="gauge-meter-border">
                  <div className="gauge-meter-background rank-2"></div>
                  <ul className="gauge-meter-label-list">
                    <li className="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                      strong
                      <br />
                      sell
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--sell active">
                      sell
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--neutral">
                      neutral
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--buy">
                      buy
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                      strong
                      <br />
                      buy
                    </li>
                  </ul>
                  <ul className="gauge-meter-status-list">
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--sell">
                        {NumOscSELL}
                      </span>
                      <span className="gauge-meter-status-text">Sell</span>
                    </li>
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--neutral">
                        {NumOscNeutral}
                      </span>
                      <span className="gauge-meter-status-text">Neutral</span>
                    </li>
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--buy">
                        {NumOscBUY}
                      </span>
                      <span className="gauge-meter-status-text">Buy</span>
                    </li>
                  </ul>
                  <Chart
                    ref={chartOs}
                    className="gauge-meter-pane"
                    options={optionsOs}
                  ></Chart>
                </div>
              </div>
              <div className="gauge-meter-sub gauge-meter--su">
                <div className="v-popover gauge-meter-popover">
                  <div className="trigger" style={{ display: "inlineBlock" }}>
                    <h3 className="gauge-meter-title">
                      Summary
                      <span className="gauge-meter-title-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <g
                            id="c-question"
                            transform="translate(3.068 -8.774)"
                          >
                            <g
                              id="Ellipse_1825"
                              data-name="Ellipse 1825"
                              transform="translate(-2.068 9.774)"
                              fill="none"
                              stroke="#fefefe"
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeWidth="1"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="10"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="10"
                                cy="10"
                                r="10.5"
                                fill="none"
                              ></circle>
                            </g>
                            <g id="question" transform="translate(3.497 13.43)">
                              <path
                                id="Path_30768"
                                data-name="Path 30768"
                                d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                transform="translate(-5.694 -1)"
                                fill="#fefefe"
                              ></path>
                              <ellipse
                                id="Ellipse_1827"
                                data-name="Ellipse 1827"
                                cx="1.363"
                                cy="1.284"
                                rx="1.363"
                                ry="1.284"
                                transform="translate(2.252 11.56)"
                                fill="#fefefe"
                              ></ellipse>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </h3>
                  </div>
                </div>
                <h4 className="gauge-meter-sub-title">{textTitleSu}</h4>
                <div className="gauge-meter-border">
                  <div className="gauge-meter-background rank-3"></div>
                  <ul className="gauge-meter-label-list">
                    <li className="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                      strong
                      <br />
                      sell
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--sell">
                      sell
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--neutral active">
                      neutral
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--buy">
                      buy
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                      strong
                      <br />
                      buy
                    </li>
                  </ul>
                  <ul className="gauge-meter-status-list">
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--sell">
                        {NumSumSELL}
                      </span>
                      <span className="gauge-meter-status-text">Sell</span>
                    </li>
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--neutral">
                        {NumSumNeutral}
                      </span>
                      <span className="gauge-meter-status-text">Neutral</span>
                    </li>
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--buy">
                        {NumSumBUY}
                      </span>
                      <span className="gauge-meter-status-text">Buy</span>
                    </li>
                  </ul>
                  <Chart
                    className="gauge-meter-pane"
                    options={optionsSu}
                    ref={chartSu}
                  ></Chart>
                </div>
              </div>
              <div className="gauge-meter-sub gauge-meter--ma">
                <div className="v-popover gauge-meter-popover">
                  <div className="trigger" style={{ display: "inlineBlock" }}>
                    <h3 className="gauge-meter-title">
                      Moving Averages
                      <span className="gauge-meter-title-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                        >
                          <g
                            id="c-question"
                            transform="translate(3.068 -8.774)"
                          >
                            <g
                              id="Ellipse_1825"
                              data-name="Ellipse 1825"
                              transform="translate(-2.068 9.774)"
                              fill="none"
                              stroke="#fefefe"
                              strokeLinecap="square"
                              strokeMiterlimit="10"
                              strokeWidth="1"
                            >
                              <circle
                                cx="10"
                                cy="10"
                                r="10"
                                stroke="none"
                              ></circle>
                              <circle
                                cx="10"
                                cy="10"
                                r="10.5"
                                fill="none"
                              ></circle>
                            </g>
                            <g id="question" transform="translate(3.497 13.43)">
                              <path
                                id="Path_30768"
                                data-name="Path 30768"
                                d="M8.359,10.774a4.349,4.349,0,0,1,.4-2.323,5.026,5.026,0,0,1,1.4-1.421c1.317-.981,1.876-1.491,1.876-2.54,0-1.166-.924-1.637-2.166-1.637a7.306,7.306,0,0,0-3.334.866L5.694,2.063A9.2,9.2,0,0,1,10.035,1a4.89,4.89,0,0,1,3.1.9A3,3,0,0,1,14.287,4.4,3.24,3.24,0,0,1,13.4,6.7,10.58,10.58,0,0,1,11.872,8,5.71,5.71,0,0,0,10.63,9.137a2.68,2.68,0,0,0-.315,1.637H8.359Z"
                                transform="translate(-5.694 -1)"
                                fill="#fefefe"
                              ></path>
                              <ellipse
                                id="Ellipse_1827"
                                data-name="Ellipse 1827"
                                cx="1.363"
                                cy="1.284"
                                rx="1.363"
                                ry="1.284"
                                transform="translate(2.252 11.56)"
                                fill="#fefefe"
                              ></ellipse>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </h3>
                  </div>
                </div>
                <h4 className="gauge-meter-sub-title">{textTitleMa}</h4>
                <div className="gauge-meter-border">
                  <div className="gauge-meter-background rank-3"></div>
                  <ul className="gauge-meter-label-list">
                    <li className="gauge-meter-label-item gauge-meter-label-item--strong-sell">
                      strong
                      <br />
                      sell
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--sell">
                      sell
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--neutral active">
                      neutral
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--buy">
                      buy
                    </li>
                    <li className="gauge-meter-label-item gauge-meter-label-item--strong-buy">
                      strong
                      <br />
                      buy
                    </li>
                  </ul>
                  <ul className="gauge-meter-status-list">
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--sell">
                        {NumMovSELL}
                      </span>
                      <span className="gauge-meter-status-text">Sell</span>
                    </li>
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--neutral">
                        {NumMovNeutral}
                      </span>
                      <span className="gauge-meter-status-text">Neutral</span>
                    </li>
                    <li className="gauge-meter-status-item">
                      <span className="gauge-meter-status-value gauge-meter-status-value--buy">
                        {NumMovBUY}
                      </span>
                      <span className="gauge-meter-status-text">Buy</span>
                    </li>
                  </ul>
                  <Chart
                    className="gauge-meter-pane"
                    options={optionsMa}
                    ref={chartMa}
                  ></Chart>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        <div style={{display: activeTab=== false ? "block" : "none" }} className="historyBox a-desktop">
          <div className="overviewInfo flex items-center">
            <span className="badgeItem">
              <span className="color-green uppercase font-bold">{"Buy"}</span>
              <span> {totalBuyStatic} </span>
            </span>
            <span className="badgeItem ml-2">
              <span className="color-red uppercase font-bold">{"Sell"}</span>
              <span> {totalSellStatic} </span>
            </span>
          </div>
          <div className="ct flex justify-center" style={{ marginTop: 6 }}>
            <div className="row fix-list-mobile result-bet">
              <div ref={bet1Ref} className="col w-18 list1">
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
              </div>
              <div ref={bet2Ref} className="col w-18 list2">
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
              </div>
              <div ref={bet3Ref} className="col w-18 list3">
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
              </div>
              <div ref={bet4Ref} className="col w-18 list4">
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
              </div>
              <div ref={bet5Ref} className="col w-18 list5">
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-1 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-2 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-3 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-4 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
                <span className="gridcs-5 inline-flex m-1 item rounded-full empty"></span>
              </div>
            </div>
          </div>
        </div>
      {/* <vs-tabs>
              <vs-tab label="INDICATORS" @click="(activeGau = true), (activeHis = true)">
              </vs-tab> 
              <vs-tab label="LAST RESULTS" @click="(activeGau = true), (activeHis = false)">
              </vs-tab>
            </vs-tabs> */}
      {/* className="{ active: activeGau, hidden: !activeHis }" */}

      {/* className="{ active: !activeGau, hidden: activeHis }" */}
    </div>
  );
};

export default AnalysBet;
