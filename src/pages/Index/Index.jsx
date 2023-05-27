import React, { useContext, useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import borderRadius from "highcharts-border-radius";
import b_price from "../../api/price/b_price";
// import moment from "moment";
import loadIndicatorsAll from "highcharts/indicators/indicators";
import More from "highcharts/highcharts-more";
import stockInit from "highcharts/modules/stock";
import _ from "lodash";
import { SocketContainerContext } from "../../utils/SocketContainer/SocketContainer";
import CandlestickChart from "./Test";
import Index2 from "./Index2";
// import dataFake from "./a";

borderRadius(Highcharts);
loadIndicatorsAll(Highcharts);
More(Highcharts);
stockInit(Highcharts);

function roundDownToNearest(value, nearest) {
  return Math.floor(value / nearest) * nearest;
}

function roundUpToNearest(value, nearest) {
  return Math.ceil(value / nearest) * nearest;
}

function Index() {
  // const lastRef = useRef();
  // const candlestickRef = useRef();
  // const candlestickRef2 = useRef();
  // const splineMa5Ref = useRef();
  // const splineMa5Ref2 = useRef();
  // const splineMa10Ref = useRef();
  // const splineMa10Ref2 = useRef();
  // const columnRef = useRef();
  // const columnRef2 = useRef();
  // const columnColorRef = useRef();
  // const columnColorRef2 = useRef();

  // const priceRef = useRef();
  // const restTimeRef = useRef();
  // // const [lastItem, setLastItem] = useState();
  // const { socketWeb } = useContext(SocketContainerContext);
  // const chartRef = useRef();
  // const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  // // eslint-disable-next-line
  // const [startPoint, setStartPoint] = useState(30);
  // // eslint-disable-next-line
  // const [endPoint, setEndPoint] = useState(100);

  // useEffect(() => {
  //   if (socketWeb) {
  //     socketWeb.onmessage = (e) => {
  //       if (
  //         e.data.indexOf("BO_PRICE") > -1 ||
  //         e.data.indexOf("TRADER_SENTIMENT") > -1 ||
  //         e.data.indexOf("BO_CHART_INDICATORS") > -1
  //       ) {
  //         // lastUpdatePrice = new Date();
  //         let data = e.data.replace("42[", "[");
  //         handleDataWs(data);
  //       }
  //     };
  //   }
  // }, [socketWeb]);
  // const begin = useRef();
  // begin.current = 0;
  // const dataTemp = { count: 0, oldCount: 0 };

  // const handleDataWs = (data) => {
  //   const newData = JSON.parse(data);
  //   if (newData) {
  //     if (newData[0] === "BO_PRICE") {
  //       // console.log(newData[1])
  //       // setLastItem(newData[1])
  //       lastRef.current = newData[1];
  //       // updateDataAndLinePosition(lastRef.current.closePrice);
  //       priceRef.current = lastRef.current?.closePrice;
  //       restTimeRef.current = lastRef.current?.order;
  //       if (document.getElementById("highchart-plot-line-label-d")) {
  //         document.getElementById("highchart-plot-line-label-d").innerHTML = `
  //           <div class="highcharts-plot-line-label " data-z-index="100" style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size: 12px; white-space: nowrap; margin-left: 0px; margin-top: 0px; left: 916px; top: 124px; color: rgb(255, 255, 255); background: transparent; border-radius: 4px; visibility: inherit;"><div class="plotlineChart d-flex flex-column">
  //             <span class="price">${priceRef.current.toFixed(2)}</span>
  //             <span class="time align-self-end">00:${
  //               restTimeRef.current >= 10
  //                 ? restTimeRef.current
  //                 : "0" + restTimeRef.current
  //             }</span>
  //           </div>
  //         `;
  //       }
  //       var chartInstance = chartRef.current?.chart;

  //       var lastCandle =
  //         chartInstance.series[2].points[
  //           chartInstance.series[2].points.length - 1
  //         ];
  //       console.log(lastCandle);

  //       if (lastRef.current?.order === 30) {
  //         dataTemp.count = dataTemp.count + 1;
  //       }
  //       var o = {
  //         x: begin.current + 70 + dataTemp.count,
  //         open: lastRef.current.openPrice,
  //         close: lastRef.current.closePrice,
  //         high: lastRef.current.highPrice,
  //         low: lastRef.current.lowPrice,
  //       };

  //       console.log(
  //         "check 1 ",
  //         lastCandle.x,
  //         o.x,
  //         dataTemp.count,
  //         dataTemp.oldCount
  //       );
  //       if (dataTemp.count === dataTemp.oldCount) {
  //         lastCandle.update(o, true);
  //       } else {
  //         chartInstance.series[2].addPoint(o, true, true);
  //         candlestickRef.current.push(data);
  //         // let begin = 0;

  //         // const { dataMax } = chartInstance.xAxis[0].getExtremes();

  //         // if (deviceVersion !== "pc") {

  //         //   chartGet.xAxis[0].setExtremes(listData[begin + 40]["date"], dataMax, false);
  //         //   chartGet.redraw();
  //         // }
  //       }

  //       dataTemp.oldCount = dataTemp.count;
  //       // begin.current += 1;
  //       // let lastCandle =
  //       //   chartInstance?.series[2].points[
  //       //     chartInstance.series[2].points.length - 1
  //       //   ];
  //       // // const { dataMax } = chartInstance.xAxis[0].getExtremes();
  //       chartInstance.xAxis[0].setExtremes(begin.current, begin.current + 70);
  //       // chartInstance.xAxis[0].options.plotLines[0].value = begin.current + 70;

  //       // lastCandle.update(o, true);
  //       // chartRef.current?.chart?.series[2].addPoint(o, true, true);
  //       // // chartRef.current?.chart.series[2].setData(
  //       // //   candlestickRef.current,
  //       // //   true,
  //       // //   true
  //       // // );
  //       // console.log("o",o)
  //       chartRef.current?.chart.redraw();
  //       // // // chartInstance.series[2].addPoint(o, false, false)
  //       // candlestickRef2.current = candlestickRef.current;
  //       // console.log(candlestickRef.current)
  //       // // console.log(arr)
  //       // // chartInstance.redraw();
  //       // else {

  //       //   // console.log(candlestickRef.current)
  //       //   candlestickRef.current = candlestickRef2.current?.concat([
  //       //     {
  //       //       x: begin.current + 70,
  //       //       open: lastRef.current.openPrice,
  //       //       close: lastRef.current.closePrice,
  //       //       high: lastRef.current.highPrice,
  //       //       low: lastRef.current.lowPrice,
  //       //       vol: lastRef.current.baseVolume,
  //       //     },
  //       //   ]);
  //       //   console.log(candlestickRef.current)
  //       //   chartRef.current?.chart.redraw();

  //       //   splineMa5Ref.current = calculateMovingAverage(
  //       //     // ma5
  //       //     splineMa5Ref2?.current?.concat([lastRef.current.closePrice]),
  //       //     5
  //       //   );
  //       //   //
  //       //   splineMa10Ref.current = calculateMovingAverage(
  //       //     // ma10
  //       //     splineMa10Ref2.current?.concat([lastRef.current.closePrice]),
  //       //     10
  //       //   );
  //       //   //

  //       //   columnRef.current = columnRef2.current?.concat([
  //       //     {
  //       //       x: begin.current + 70,
  //       //       y: lastRef.current.baseVolume,
  //       //       color:
  //       //         parseFloat(lastRef.current.closePrice) >
  //       //         parseFloat(lastRef.current.openPrice)
  //       //           ? "#04c793"
  //       //           : "#fa4b62",
  //       //     },
  //       //   ]);
  //       //   columnColorRef.current = columnColorRef2.current?.concat([
  //       //     lastRef.current.closePrice > lastRef.current.openPrice
  //       //       ? "#04c793"
  //       //       : "#fa4b62",
  //       //   ]);
  //       //   // console.log(columnColorRef.current)
  //       //   // columnColorRef.current= Array.from(Array(70).keys()).map(item=> "aqua")
  //       //   // console.log(columnColorRef.current)
  //       //   chartRef.current?.chart.series[0].setData(splineMa5Ref.current, true);
  //       //   chartRef.current?.chart.series[1].setData(
  //       //     splineMa10Ref.current,
  //       //     true
  //       //   );
  //       //   chartRef.current?.chart.series[2].setData(
  //       //     candlestickRef.current,
  //       //     true,
  //       //     true
  //       //   );
  //       //   chartRef.current?.chart.series[3].setData(columnRef.current, true);
  //       //   chartRef.current?.chart.redraw();
  //       // }
  //     }
  //   }
  // };

  // // Hàm tính trung bình động
  // function calculateMovingAverage(data, period) {
  //   const result = [];

  //   for (let i = period - 1; i < parseInt(data?.length); i++) {
  //     const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
  //     const average = sum / period;
  //     result.push(average);
  //   }

  //   return result;
  // }

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const result = await b_price();
  //       chartRef.current.chart.xAxis[0]?.setExtremes(0, 70);
  //       candlestickRef.current = result?.d
  //         ?.slice(startPoint, endPoint)
  //         ?.map((item, key) => {
  //           // console.log("candlestickitem", item);
  //           return {
  //             x: parseInt(key),
  //             open: item[1], // hình như sai thứ tự/// open : 1, high : 2, low 3 , close 4, vol 5
  //             close: item[4],
  //             low: item[3],
  //             high: item[2],
  //             vol: item[5],
  //             time: item[0],
  //           };
  //         });
  //       //
  //       candlestickRef2.current = result?.d
  //         ?.slice(startPoint, endPoint)
  //         ?.map((item, key) => {
  //           // console.log("candlestickitem", item);
  //           return {
  //             x: parseInt(key),
  //             open: item[1], // hình như sai thứ tự/// open : 1, high : 2, low 3 , close 4, vol 5
  //             close: item[4],
  //             low: item[3],
  //             high: item[2],
  //             vol: item[5],
  //             time: item[0],
  //           };
  //         });
  //       //
  //       splineMa5Ref.current = calculateMovingAverage(
  //         // ma5
  //         result?.d
  //           ?.slice(startPoint - 5, parseInt(endPoint))
  //           ?.map((item, key) => item[4]),
  //         5
  //       );
  //       //
  //       splineMa5Ref2.current = result?.d
  //         ?.slice(startPoint - 4, parseInt(endPoint))
  //         ?.map((item, key) => item[4]);
  //       //

  //       splineMa10Ref.current = calculateMovingAverage(
  //         // ma10
  //         result?.d
  //           ?.slice(startPoint - 10, parseInt(endPoint))
  //           ?.map((item) => item[4]),
  //         10
  //       );
  //       //
  //       splineMa10Ref2.current = result?.d
  //         ?.slice(startPoint - 9, parseInt(endPoint))
  //         ?.map((item) => item[4]);

  //       columnRef.current = result?.d
  //         ?.slice(startPoint, endPoint)
  //         ?.map((item, key) => ({
  //           x: parseInt(key),
  //           y: item[5],
  //           color: item[4] > item[1] ? "#04c793" : "#fa4b62",
  //         }));

  //       columnRef2.current = result?.d
  //         ?.slice(startPoint, endPoint)
  //         ?.map((item, key) => ({
  //           x: parseInt(key),
  //           y: item[5],
  //           color: item[4] > item[1] ? "#04c793" : "#fa4b62",
  //         }));

  //       columnColorRef.current = result?.d
  //         ?.slice(startPoint, endPoint)
  //         ?.map((item, key) => (item[4] > item[1] ? "#04c793" : "#fa4b62"));
  //       columnColorRef2.current = result?.d
  //         ?.slice(startPoint, endPoint)
  //         ?.map((item, key) => (item[4] > item[1] ? "#04c793" : "#fa4b62"));

  //       setData(result);
  //       setData2(result);
  //     } catch (error) {}
  //   })();
  // }, []);

  // // const updateDataAndLinePosition = (value) => {
  // //   // Lấy giá trị mới nhất từ dữ liệu cập nhật
  // //   const currentValue = value;

  // //   // Cập nhật dữ liệu và vị trí của đường nằm ngang
  // //   const chart = chartRef.current?.chart;
  // //   const plotLine = chart.yAxis[0].plotLinesAndBands[0];
  // //   plotLine.options.value = currentValue;
  // //   // Di chuyển đường nằm ngang đến vị trí mới
  // //   // Vẽ lại biểu đồ
  // //   chart.redraw();
  // // };

  // const getCurrentValue = () => {
  //   // Hàm lấy giá trị mới nhất từ dữ liệu cập nhật
  //   // Thay thế bằng cách lấy giá trị từ nguồn dữ liệu thực tế của bạn
  //   // Ví dụ: return this.props.data[this.props.data.length - 1];
  //   const value = 26945;
  //   // console.log(value);
  //   return value; // Giá trị ngẫu nhiên từ 0 đến 10
  // };
  // const chartOptions = {
  //   accessibility: {
  //     enabled: false,
  //   },
  //   chart: {
  //     backgroundColor: "#011022",
  //     spacingBottom: 0,
  //   },
  //   title: {
  //     text: "",
  //   },
  //   tooltip: {
  //     crosshair: [1, 1],
  //     split: false,
  //     backgroundColor: "rgba(0, 0, 0, 0.2)",
  //     shape: "rect",
  //     style: {
  //       color: "white",
  //     },
  //     positioner: function (labelWidth, labelHeight, point) {
  //       return {
  //         x: 10,
  //         y: 80,
  //       };
  //     },
  //     useHTML: true,
  //     formatter: function () {
  //       // eslint-disable-next-line
  //       const { series, point } = this;
  //       if (series.type === "candlestick") {
  //         return `<div class="dataVolumeChart" style="font-size: 14px; border-radius: 10px; padding: 5px;
  //          ">
  //               <span style="margin-right: 10px; font-size: 17px"><b>O</b>: ${this.point.open}</span>
  //               <span style="margin-right: 10px; font-size: 17px"><b>C</b>: ${this.point.close}</span>
  //               <span>&nbsp;</span>
  //           <br>
  //           <span style="margin-right: 10px; font-size: 17px"><b>H</b>: ${this.point.high}</span>
  //           <span style="margin-right: 10px; font-size: 17px"><b>L</b>: ${this.point.low}</span>
  //           <span style="font-size: 17px"><b>Vol</b>: ${this.point.vol}</span></div>`;
  //       }
  //       if (series.type === "column") {
  //         return `<div style="font-size: 17px"><b style="font-size: 17px">Vol:</b> ${this.point.options.y}</div>`;
  //       }
  //     },
  //   },
  //   rangeSelector: {
  //     selected: 1,
  //   },
  //   series: [
  //     {
  //       yAxis: 0,
  //       gridLineColor: "rgb(45, 49, 64)",
  //       type: "spline",
  //       zIndex: 10,
  //       name: "",
  //       color: "#fa4b62",
  //       data: splineMa5Ref.current,
  //       stepRadius: 10,
  //       lineWidth: 2,
  //       marker: {
  //         radius: 0,
  //       },
  //     },
  //     {
  //       yAxis: 0,
  //       type: "spline",
  //       zIndex: 10,
  //       name: "",
  //       color: "#04c793",
  //       lineWidth: 2,
  //       data: splineMa10Ref.current,
  //       stepRadius: 10,
  //       marker: {
  //         radius: 0,
  //       },
  //     },
  //     {
  //       yAxis: 0,
  //       type: "candlestick",
  //       animation: {
  //         duration: 1000, // Thời gian của hiệu ứng di chuyển (1 giây),
  //         enable: true,
  //         easing: "easeOutBounce",
  //       },
  //       name: "",
  //       groupPadding: 0,
  //       pointPadding: 0.2,
  //       data: candlestickRef.current,
  //     },
  //     {
  //       type: "column",
  //       borderColor: "color",
  //       borderRadius: "0 0 0 0", // Đặt giá trị borderRadius là "0 0 0 0" để xóa border radius tại cả bốn góc
  //       yAxis: 1,
  //       inverted: false,
  //       name: "",
  //       data: columnRef.current, // Dữ liệu của biểu đồ cột,
  //       // colors: columnColorRef.current,
  //     },
  //   ],
  //   xAxis: {
  //     plotLines: [
  //       {
  //         // mark the weekend
  //         color: "rgb(132, 134, 143)",
  //         width: 2,
  //         value: begin.current + 70,
  //         dashStyle: "dash",
  //       },
  //     ],
  //     crosshair: true,
  //     tickInterval: 5,
  //     // labels: {
  //     //   formatter: function () {
  //     //     return moment(
  //     //       data?.d?.[parseInt(this.value) + startPoint]?.[0]
  //     //     ).format("mm:ss");
  //     //   },
  //     // },
  //   },
  //   yAxis: [
  //     {
  //       offset: 0,
  //       tickPositioner: function () {
  //         // console.log("this", this);
  //         const max = this.dataMax; // Giá trị tối đa trên trục y
  //         const min = this.dataMin; // Giá trị tối thiểu trên trục y
  //         const numTicks = 8; // Số điểm chia đều trên trục y

  //         const interval = (max - min) / (numTicks - 1); // Khoảng cách giữa các điểm
  //         const positions = []; // Mảng chứa các vị trí của các điểm

  //         for (let i = 0; i < numTicks; i++) {
  //           positions.push(Math.round(min + i * interval)); // Tính toán vị trí của từng điểm
  //         }
  //         // console.log("positions", positions);
  //         return positions; // Trả về mảng các vị trí của các điểm
  //       },
  //       gridLineColor: "rgb(45, 49, 64)",
  //       gridLineWidth: 1, // Độ dày của đường kẻ
  //       tickWidth: 1, // Độ dày của đường chia trên trục y
  //       tickColor: "transparent", // Màu sắc của đường chia trên trục y
  //       // min: roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 50,
  //       // max: roundUpToNearest(_.max(_.map(data?.d, (item) => item[2])), 100) - 50,
  //       // tickPositions: [roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 50, roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 40, roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 30, roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 20, 26680+ 40, 26680+ 50, 26680+ 60],
  //       showFirstLabel: false,
  //       showLastLabel: false,
  //       startPoint: false,
  //       endOnTick: false,
  //       startOnTick: false,
  //       minPadding: 0,
  //       // tickAmount: 8,
  //       // tickInterval: 10,
  //       // lineColor: "#fff",
  //       style: "dotted",
  //       dashStyle: "dash",
  //       // lineWidth: 1,
  //       gridLineDashStyle: "longdash",
  //       labels: {
  //         style: {
  //           color: "#ffffff",
  //         },
  //       },
  //       opposite: true,
  //       plotLines: [
  //         {
  //           label: {
  //             useHTML: true,
  //             x: 60,
  //             align: "right",
  //             formatter: function () {
  //               return `<div id="highchart-plot-line-label-d">
  //                         <div class="highcharts-plot-line-label " data-z-index="100" style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size: 12px; white-space: nowrap; margin-left: 0px; margin-top: 0px; left: 916px; top: 124px; color: rgb(255, 255, 255); background: transparent; border-radius: 4px; visibility: inherit;"><div class="plotlineChart d-flex flex-column">
  //                           <span class="price">${priceRef.current}</span>
  //                           <span class="time align-self-end">00:${restTimeRef.current}</span>
  //                         </div>
  //                   </div></div>`;
  //             },
  //           },
  //           value: getCurrentValue(), // Giá trị của đường nằm ngang
  //           color: "#8b8d96",
  //           width: 1,
  //           zIndex: 5,
  //         },
  //       ],
  //       height: "80%",
  //     },
  //     {
  //       visible: false,
  //       height: "30%",
  //       top: "70%",
  //       opposite: true,
  //       min: begin.current,
  //       title: {
  //         text: "Giá trị cột",
  //       },
  //     },
  //   ],
  //   plotOptions: {
  //     bar: {
  //       groupPadding: 0,
  //       pointPadding: 0.2,
  //       dataLabels: {
  //         enabled: true,
  //       },
  //     },
  //     column: {
  //       stacking: "normal",
  //       groupPadding: 0,
  //       pointPadding: 0.2,
  //       colorByPoint: true,
  //       // colors: ["#04c793", "#fa4b62"],
  //       column: {
  //         borderRadius: "0 0 0 0", // Đặt giá trị borderRadius là "0 0 0 0" để xóa border radius tại cả bốn góc
  //       },
  //       //pointWidth: 20,
  //     },
  //     candlestick: {
  //       animation: {
  //         duration: 1000, // Thời gian của hiệu ứng di chuyển (1 giây),
  //         enable: true,
  //         easing: "easeOutBounce",
  //       },
  //       lineColor: "#f81057",
  //       upLineColor: "#04c793",
  //       color: "#f81057", // Màu cho các nến tăng giá
  //       upColor: "#04c793", // Màu cho các nến giảm giá,
  //     },
  //     series: {
  //       states: {
  //         inactive: {
  //           opacity: 1,
  //         },
  //       },
  //     },
  //   },
  // };
  
  return (
    <>
      {/* <HighchartsReact
        containerProps={{ style: { height: "100%" } }}
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      /> */}
      {/* <CandlestickChart /> */}
      <Index2 />
    </>
  );
}

export default Index;
