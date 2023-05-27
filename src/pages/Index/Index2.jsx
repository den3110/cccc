import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
import stockInit from "highcharts/modules/stock";
import loadIndicatorsAll from "highcharts/indicators/indicators";
import { isMobile, isTablet } from "mobile-device-detect";
import $ from "jquery";
import Chart from "highcharts-react-official";
import { useContext, useEffect, useRef, useState } from "react";
import { SocketContainerContext } from "../../utils/SocketContainer/SocketContainer";
import b_price from "../../api/price/b_price";
import "./index.scss"

More(Highcharts);
stockInit(Highcharts);
loadIndicatorsAll(Highcharts);

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
var UP_COLOR = "#31baa0",
  DOWN_COLOR = "#fc5f5f",
  deviceVersion = "pc";

var progressBar = $(".e-c-progress");
var lengthp = Math.PI * 2 * 100;
progressBar.css("stroke-dasharray", lengthp);

if (isMobile) {
  deviceVersion = "mobile";
} else if (isTablet) {
  deviceVersion = "tablet";
}

var listData = [],
  ohlcStock = [],
  volumeStock = [];

var chartGet = "";

const stockChart = {
  chart: {
    type: "areaspline",
    aspectRatio: "16:9",
    panning: false,
    followTouchMove: false,
    width: "100%",
    height: "100%",
    marginTop: 0,
    // height: "pc" !== deviceVersion ? '100%' : (9 / 16 * 100) + '%', // 16:9 ratio
    zoomType: "",
    backgroundColor: "transparent",
    // plotBackgroundImage: require("@/assets/images/sky/world_map.svg"),
    marginLeft: 10,
    marginRight: "pc" !== deviceVersion ? 60 : 75,
    marginBottom: "pc" !== deviceVersion ? 18 : 20,
    renderTo: "tradePage",
    events: {},
  },
  rangeSelector: {
    enabled: false,
    selected: 4,
  },
  credits: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  navigator: {
    enabled: false,
  },

  stockTools: {
    gui: {
      enabled: false,
    },
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    candlestick: {
      lineColor: DOWN_COLOR,
      upLineColor: UP_COLOR,
      pointWidth: "pc" !== deviceVersion ? 7 : 8.6,
      maxPointWidth: "pc" !== deviceVersion ? 7 : 12,
      paddingPoint: "pc" !== deviceVersion ? 7.7 : 10.5,
    },
    column: {
      minPointLength: 3,
      pointWidth: "pc" !== deviceVersion ? 8.6 : 8.6,
      maxPointWidth: "pc" !== deviceVersion ? 8.6 : 12,
      borderWidth: 0,
      paddingPoint: "pc" !== deviceVersion ? 7.7 : 10.5,
      numberPoint: "pc" !== deviceVersion ? 15 : 60,
      pointRange: 0.1,
    },
    series: {
      zIndex: 2,
      states: {
        inactive: {
          opacity: 1,
        },
      },
      allowPointSelect: false,
      point: {
        events: {
          click() {},
        },
      },
    },
  },
  tooltip: {
    split: false,
    enabled: true,
    label: false,
    animation: true,
    backgroundColor: "transparent",
    opacity: "1",
    visibility: "visible",
    borderColor: "transparent",
    borderWidth: 0,
    shadow: false,
    stroke: "transparent",
    useHTML: true,
    style: {
      color: "#fff",
      fontSize: "10px",
      stroke: "transparent",
      top: "60px",
    },
    formatter() {
      return "BTC/USDT" === this.series.name
        ? '\n<span style="margin-right: 10px;"><b>O</b>: ' +
            this.point.open +
            '</span>\n<span style="margin-right: 10px;"><b>C</b>: ' +
            this.point.close +
            '</span>\n<span>&nbsp;</span>\n<br/>\n<span style="margin-right: 10px;"><b>H</b>: ' +
            this.point.high +
            '</span>\n<span style="margin-right: 10px;"><b>L</b>: ' +
            this.point.low +
            "</span>\n<span><b>Vol</b>: " +
            this.point.vol +
            "</span>"
        : "Volume" === this.series.name
        ? "<b>Vol</b>: " + this.y
        : "";
    },
    positioner() {
      var t = 20,
        e = "pc" !== deviceVersion ? 50 : 60;
      return {
        x: t,
        y: e,
      };
    },
  },
  xAxis: {
    // minRange: 1 * 1,
    type: "datetime",
    // tickInterval: 5,
    labels: {
      enabled: true,
      formatter() {
        // console.log(this.value)
        return Highcharts.dateFormat("%M:%S", this.value);
      },
      style: {
        fontSize: 10,
        color: "#707070",
      },
    },

    plotLines: [
      {
        value: 0,
        color: "#ffffff",
        width: 0.75,
        id: "current-pricex",
        zIndex: 1e3,
        dashStyle: "LongDash",
      },
    ],
    lineWidth: 0,
    minorGridLineWidth: 0,
    lineColor: "transparent",
    minorTickLength: 0,
    tickLength: 0,
    zIndex: 2,
  },
  yAxis: [
    {
      gridLineColor: "#2D3140",
      gridLineDashStyle: "LongDash",
      labels: {
        align: "right",
        x: "pc" !== deviceVersion ? 45 : 50,
        style: {
          color: "#fff",
          fontSize: "11px",
        },
      },
      height: "83%",
      maxPadding: 0.3,
      top: 10,
      bot: 15,
      plotLines: [
        {
          value: 0,
          color: "#ffffff",
          width: 0.75,
          id: "current-price",
          zIndex: 100,
          label: {
            useHTML: true,
            text: 0,
            x: "pc" !== deviceVersion ? 60 : 70,
            align: "right",
            style: {
              color: "#fff",
              fontSize: "11px",
              background: "transparent",
              borderRadius: "4px",
            },
          },
        },
      ],
      lineWidth: 0,
      resize: {
        enabled: true,
      },
    },
    {
      gridLineColor: "",
      visible: false,
      title: {
        align: "high",
        text: null,
        rotation: 0,
        y: 0,
        useHTML: true,
      },
      top: "pc" == deviceVersion ? "83.4%" : "85%",
      height: "15%",
      lineWidth: 0,
      offset: 0,
    },
  ],
  series: [
    {
      id: "aapl",
      type: "candlestick",
      name: "BTC/USDT",
      color: DOWN_COLOR,
      upColor: UP_COLOR,
      data: ohlcStock,
    },
    {
      type: "column",
      name: "Volume",
      data: volumeStock,
      yAxis: 1,
    },
    {
      name: "sma1",
      id: "sma1",
      type: "sma",
      linkedTo: "aapl",
      color: "#4682B4",
      lineWidth: 1.5,
      marker: false,
      zIndex: 3,
      visible: true,
      enableMouseTracking: false,
      params: {
        index: "0",
        period: 10,
      },
      allowPointSelect: false,
      point: {
        events: {
          // click: function (t) {
          //   setTimeout(function () { }, 500)
          // }
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    {
      name: "sma2",
      id: "sma2",
      type: "sma",
      linkedTo: "aapl",
      data: ohlcStock,
      color: "#E22A67",
      lineWidth: 1.5,
      marker: false,
      zIndex: 3,
      visible: true,
      enableMouseTracking: false,
      params: {
        index: "1",
        period: 5,
      },
      allowPointSelect: false,
      point: {
        events: {},
        tooltip: {
          enabled: false,
        },
      },
    },
  ],
};

const gaugeMeterOs = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 70,
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
          ".gauge-meter--os .gauge-meter-label-item:nth-child(" + n.index + ")"
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
              size: 70,
            },
          ],
        },
        windowWidth: 0,
        windowHeight: 0,
      },
    ],
  },
};

const gaugeMeterSu = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 88,
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
          ".gauge-meter--su .gauge-meter-label-item:nth-child(" + n.index + ")"
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
      size: 176,
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
              size: 88,
            },
          ],
        },
      },
    ],
  },
};

const gaugeMeterMa = {
  chart: {
    type: "gauge",
    plotBorderWidth: null,
    backgroundColor: "rgba(0,0,0,0)",
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    height: 70,
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
          ".gauge-meter--ma .gauge-meter-label-item:nth-child(" + n.index + ")"
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
              size: 70,
            },
          ],
        },
      },
    ],
  },
};

const Index2 = () => {
  const { socketWeb } = useContext(SocketContainerContext);
  const chartStock = useRef();
  chartGet = chartStock.current?.chart;
  const [thisIDPlayer, setThisIDPlayer] = useState(0);
  const [totalBuyStatic, setTotalBuyStatic] = useState(0);
  const [totalSellStatic, setTotalSellStatic] = useState(0);

  // Moving
  const [NumMovBUY, setNumMovBUY] = useState(0);
  const [NumMovSELL, setNumMovSELL] = useState(0);
  const [NumMovNeutral, setNumMovNeutral] = useState(0);
  const [textTitleMa, setTextTitleMa] = useState("NEUTRAL");

  // Oscillators
  const [NumOscBUY, setNumOscBUY] = useState(0);
  const [NumOscSELL, setNumOscSELL] = useState(0);
  const [NumOscNeutral, setNumOscNeutral] = useState(0);
  const [textTitleOs, setTextTitleOs] = useState("NEUTRAL");

  // Summary
  const [NumSumBUY, setNumSumBUY] = useState(0);
  const [NumSumSELL, setNumSumSELL] = useState(0);
  const [NumSumNeutral, setNumSumNeutral] = useState(0);
  const [textTitleSu, setTextTitleSu] = useState("NEUTRAL");

  const [moneyWin, setMoneyWin] = useState(0);
  const [isWinPop, setIsWinPop] = useState(false);
  const [accountTypePop, setAccountTypePop] = useState("LIVE");
  const [isBet, setIsBet] = useState(true);
  const [CSBUY, setCSBUY] = useState(0);
  const [CSSELL, setCSSELL] = useState(0);
  const [isOrder, setIsOrder] = useState(true);
  const [activeGau, setActiveGau] = useState(false);
  const [activeHis, setActiveHis] = useState(true);
  const [balanceForuser, setBalanceForuser] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [chartDataLoaded, setChartDataLoaded] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [loiNhuan, setLoiNhuan] = useState(19.5);
  const [optionsOs, setOptionsOs] = useState(gaugeMeterOs);
  const [optionsSu, setOptionsSu] = useState(gaugeMeterSu);
  const [optionsMa, setOptionsMa] = useState(gaugeMeterMa);
  const [chartOptions, setChartOptions] = useState({
    beforeMount() {
      chartStock.current.chart.redraw = true;
      chartGet.redraw();
    },
  });
  const [chartOptionsStock, setChartOptionsStock] = useState(stockChart);
  const [betOpen, setBetOpen] = useState({
    s: 0,
    l: {
      bet: [
        {
          items: [],
        },
      ],
    },
  });
  const [isTablet, setIsTablet] = useState();
  const [widthProgress, setWidthProgress] = useState("90");
  const [classLandscape, setClassLandscape] = useState("");
  const [isMobile, setIsMobile] = useState();
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const getColor = (openPrice, closePrice) => {
    return openPrice < closePrice ? UP_COLOR : DOWN_COLOR;
  };

  const updateBarChart = (data) => {
    var chartInstance = chartGet;
    try {
      var lastCandle =
        chartInstance.series[1].points[
          chartInstance.series[1].points.length - 1
        ];
      var color = getColor(data.openPrice, data.closePrice);
      if (lastCandle.x === data.createDateTime) {
        lastCandle.update(
          {
            x: data.createDateTime,
            y: data.baseVolume,
            color: color,
          },
          true
        );
      } else {
        chartInstance.series[1].addPoint(
          {
            x: data.createDateTime,
            y: data.baseVolume,
            color: color,
          },
          true,
          true
        );
      }
    } catch (err) {
      // console.log(err);
    } finally {
      //
    }
  };

  const updateCandleStickChart = (data) => {
    var chartInstance = chartGet;

    try {
      var lastCandle =
        chartInstance.series[0].points[
          chartInstance.series[0].points.length - 1
        ];
      var color = getColor(data.openPrice, data.closePrice);

      var counter = Number(data.order);

      var o = {
        x: data.createDateTime,
        open: data.openPrice.toFixed(2) * 1,
        high: data.highPrice.toFixed(2) * 1,
        low: data.lowPrice.toFixed(2) * 1,
        close: data.closePrice.toFixed(2) * 1,
        vol: data.baseVolume.toFixed(2) * 1,
        color: color,
      };
      if (lastCandle.x === data.createDateTime) {
        lastCandle.update(o, true);
      } else {
        chartInstance.series[0].addPoint(o, true, true);
        console.log(chartInstance.series)
        listData.push(data);
        let begin = 0;

        const { dataMax } = chartInstance.xAxis[0].getExtremes();
        console.log(chartInstance)
        if (deviceVersion !== "pc") {
          begin = setSizeStock(listData);
          console.log("begin", begin);
          chartGet.xAxis[0].setExtremes(
            listData[begin + 40][0],
            dataMax,
            false
          );
          chartGet.redraw();
        } else {
          let c = listData.length;
          chartGet.xAxis[0].setExtremes(
            listData[c - 90][0],
            dataMax,
            false
          );
          chartGet.redraw();
        }
      }
      chartInstance.xAxis[0].options.plotLines[0].value = data.createDateTime;
      chartInstance.yAxis[0].options.plotLines[0].value = data.closePrice;

      let f = chartInstance.yAxis[0].plotLinesAndBands[0];

      f.label &&
        f.label.attr({
          text:
            '<div class="plotlineChart flex flex-col"><span class="price">' +
            data.close.toFixed(2) +
            '</span><span class="time self-end">00:' +
            (counter > 9 ? counter : "0" + counter) +
            "</span></div>",
        });

      //   getData.countDown = counter > 9 ? counter : "0" + counter;
      window.addEventListener("resize", function () {
        chartInstance.reflow();

        // console.log("Change Size");
      });
    } catch {}
  };
  const onReceiveSocketData = (data) => {
    // updateCandleStickChart(data);
    // updateBarChart(data);
  };
  const getDataDefaultGet = (get) => {
    let data = get;
    ohlcStock = [];
    volumeStock = [];

    var begin = 0;

    if (deviceVersion !== "pc") {
      begin = setSizeStock(data);
      // console.log(begin)
    } else {
      let getWidth = parseInt($("body").width());
      if (getWidth >= 1260 && getWidth <= 1500) {
        begin = 55;
      }
      if (getWidth >= 1500 && getWidth <= 1600) {
        begin = 45;
      }
      if (getWidth >= 820 && getWidth <= 1260) {
        begin = 50;
      }
    }

    for (var i = begin; i < data.length; i++) {
      var _o = {
        x: data[i][0], // the date
        open: data[i][1], // open
        high: data[i][2], // high
        low: data[i][3], // low
        close: data[i][4], // close
        vol: data[i][5], // volume
      };
      ohlcStock.push(_o);
      volumeStock.push({
        x: data[i][0], // the date
        y: data[i][5], // the volume
        color: data[i][1] < data[i][4] ? UP_COLOR : DOWN_COLOR,
      });
    }
    stockChart.series[0].data = ohlcStock;
    stockChart.series[1].data = volumeStock;
    setChartOptions(stockChart);
    let ao = setInterval(() => {
      if (chartGet != "") {
        clearInterval(ao);
        const { dataMax } = chartGet.xAxis[0].getExtremes(); //dataMin
        if (deviceVersion !== "pc") {
          chartGet.xAxis[0].setExtremes(
            data[begin + 40][0],
            dataMax,
            false
          );
          console.log("dataMax", dataMax)
          chartGet.redraw();
        } else {
         console.log(chartGet.xAxis[0].getExtremes())
          let c = data.length;
          chartGet.xAxis[0].setExtremes(data[c - 90][0], dataMax, false);
          chartGet.redraw();
        }
      }
    }, 100);
  };

  const setSizeStock = (data) => {
    var chartWidth = parseInt($(".chartBox").width());

    let numBar = Math.floor((chartWidth - 90) / 17.44); //90 17.44 13.44
    if (numBar < data.length) {
      return data.length - numBar - 40;
    }
  };
  useEffect(() => {
    if (socketWeb) {
      socketWeb.onmessage = (e) => {
        if (
          e.data.indexOf("BO_PRICE") > -1 ||
          e.data.indexOf("TRADER_SENTIMENT") > -1 ||
          e.data.indexOf("BO_CHART_INDICATORS") > -1
        ) {
          // lastUpdatePrice = new Date();
          let data = e.data.replace("42[", "[");
          //   handleDataWs(data);
          onReceiveSocketData(data);
        }
      };
    }
  }, [socketWeb]);
  useEffect(() => {
    (async () => {
      try {
        const data = await b_price();
        listData = data.d;
        getDataDefaultGet(data.d);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="relative chartBox" style={{width: 500, height: 300}}>
      <Chart
        ref={chartStock}
        highcharts={Highcharts}
        options={stockChart}
      />
    </div>
  );
};

export default Index2;
