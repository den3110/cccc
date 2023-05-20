import React, { useContext, useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { offset } from "highcharts/highstock";
import borderRadius from "highcharts-border-radius";
import b_price from "../../api/price/b_price";
import moment from "moment";
import _ from "lodash";
import { SocketContainerContext } from "../../utils/SocketContainer/SocketContainer";
// import dataFake from "./a";

borderRadius(Highcharts);

function roundDownToNearest(value, nearest) {
  return Math.floor(value / nearest) * nearest;
}

function roundUpToNearest(value, nearest) {
  return Math.ceil(value / nearest) * nearest;
}

function Index() {
  const lastRef = useRef();
  const candlestickRef = useRef();
  const candlestickRef2 = useRef();
  const splineMa5Ref = useRef();
  const splineMa5Ref2 = useRef();
  const splineMa10Ref = useRef();
  const splineMa10Ref2 = useRef();
  const columnRef = useRef();
  const columnRef2 = useRef();
  const columnColorRef = useRef();
  const columnColorRef2 = useRef();

  const priceRef = useRef();
  const restTimeRef = useRef();
  // const [lastItem, setLastItem] = useState();
  const { socketWeb } = useContext(SocketContainerContext);
  const chartRef = useRef();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  // eslint-disable-next-line
  const [startPoint, setStartPoint] = useState(30);
  // eslint-disable-next-line
  const [endPoint, setEndPoint] = useState(100);

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
          handleDataWs(data);
        }
      };
    }
  }, [socketWeb]);

  const handleDataWs = (data) => {
    const newData = JSON.parse(data);
    if (newData) {
      if (newData[0] === "BO_PRICE") {
        // console.log(newData[1])
        // setLastItem(newData[1])
        lastRef.current = newData[1];
        updateDataAndLinePosition(lastRef.current.closePrice);

        priceRef.current = lastRef.current?.closePrice;
        restTimeRef.current = lastRef.current?.order;
        if (document.getElementById("highchart-plot-line-label-d")) {
          document.getElementById("highchart-plot-line-label-d").innerHTML = `
            <div class="highcharts-plot-line-label " data-z-index="100" style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size: 12px; white-space: nowrap; margin-left: 0px; margin-top: 0px; left: 916px; top: 124px; color: rgb(255, 255, 255); background: transparent; border-radius: 4px; visibility: inherit;"><div class="plotlineChart d-flex flex-column">
              <span class="price">${priceRef.current.toFixed(2)}</span>
              <span class="time align-self-end">00:${
                restTimeRef.current >= 10
                  ? restTimeRef.current
                  : "0" + restTimeRef.current
              }</span>
            </div>
          `;
        }

        if (parseInt(lastRef.current.order) === 1) {
          let arr = candlestickRef.current;
          arr?.forEach((item) => item.x--);
          chartRef.current?.chart.series[2].addPoint(arr, false, true);
          arr = candlestickRef.current?.slice(1);
          candlestickRef.current = arr;
          candlestickRef2.current = arr;
          chartRef.current?.chart.series[2].addPoint(arr, false, true);

          // console.log(candlestickRef.current)

          // splineMa5Ref.current = calculateMovingAverage(
          //   // ma5
          //   data2?.d
          //     ?.slice(startPoint - 4, parseInt(endPoint))
          //     ?.map((item, key) => item[4])
          //     ?.concat([lastRef.current.closePrice]),
          //   5
          // );
          // //

          // splineMa10Ref.current = calculateMovingAverage(
          //   // ma10
          //   splineMa10Ref2.current
          //     ?.concat([lastRef.current.closePrice]),
          //   10
          // );
          //
          let arr4 = columnRef.current
          // chartRef.current?.chart.series[3].addPoint(arr4, false, true);
          arr4 = columnRef.current?.slice(1);
          arr4?.forEach((item) => item.x--);
          columnRef.current = arr4;
          columnRef2.current = arr4;
          // chartRef.current?.chart.series[3].addPoint(arr4, false, true);

          // let arr5 = columnColorRef.current;
          // arr5 = arr5.slice(1);
          // columnColorRef.current = arr5;
          // columnColorRef2.current = arr5;
          // chartRef.current?.chart.series[0].setData(splineMa5Ref.current);
          // chartRef.current?.chart.series[1].setData(splineMa10Ref.current);
          // chartRef.current?.chart.series[3].setData(columnRef.current);
          // chartRef.current?.chart.series[3].setColors(columnColorRef.current);
          // columnColorRef.current.forEach((color, index) => {
          //   chartRef.current?.chart.series[3].update({
          //     color, // Màu sắc cho series
          //   }, true); // Sử dụng false để tắt hiệu ứng redraw tự động
          // })
        } else {
    
          candlestickRef.current = candlestickRef2?.current?.concat([
            {
              x: endPoint - startPoint,
              open: lastRef.current.openPrice,
              close: lastRef.current.closePrice,
              high: lastRef.current.highPrice,
              low: lastRef.current.lowPrice,
              vol: lastRef.current.baseVolume,
            },
          ]);

          splineMa5Ref.current = calculateMovingAverage(
            // ma5
            splineMa5Ref2?.current?.concat([lastRef.current.closePrice]),
            5
          );
          //

          splineMa10Ref.current = calculateMovingAverage(
            // ma10
            splineMa10Ref2.current?.concat([lastRef.current.closePrice]),
            10
          );
          //

          columnRef.current = columnRef2.current?.concat([{
            x: endPoint - startPoint,
            y: lastRef.current.baseVolume,
            color: parseFloat(lastRef.current.closePrice) > parseFloat(lastRef.current.openPrice) ? "#04c793" : "#fa4b62"
            
          }
          ]);
          columnColorRef.current = columnColorRef2.current?.concat([
            lastRef.current.closePrice > lastRef.current.openPrice
            ? "#04c793"
            : "#fa4b62",
          ]);
          // console.log(columnColorRef.current)
          // columnColorRef.current= Array.from(Array(70).keys()).map(item=> "aqua")
          // console.log(columnColorRef.current)
          chartRef.current?.chart.series[0].setData(splineMa5Ref.current, true);
          chartRef.current?.chart.series[1].setData(
            splineMa10Ref.current,
            true
          );
          chartRef.current?.chart.series[2].setData(
            candlestickRef.current,
            true
          );
          chartRef.current?.chart.series[3].setData(columnRef.current, true);
        }
        // chartRef.current?.chart.redraw(true);
      }
    }
  };

  // Hàm tính trung bình động
  function calculateMovingAverage(data, period) {
    const result = [];

    for (let i = period - 1; i < parseInt(data?.length); i++) {
      const sum = data.slice(i - period + 1, i + 1).reduce((a, b) => a + b, 0);
      const average = sum / period;
      result.push(average);
    }

    return result;
  }

  useEffect(() => {
    (async () => {
      try {
        const result = await b_price();
        candlestickRef.current = result?.d
          ?.slice(startPoint, endPoint)
          ?.map((item, key) => {
            // console.log("candlestickitem", item);
            return {
              x: parseInt(key),
              open: item[1], // hình như sai thứ tự/// open : 1, high : 2, low 3 , close 4, vol 5
              close: item[4],
              low: item[3],
              high: item[2],
              vol: item[5],
            };
          });
        //
        candlestickRef2.current = result?.d
          ?.slice(startPoint, endPoint)
          ?.map((item, key) => {
            // console.log("candlestickitem", item);
            return {
              x: parseInt(key),
              open: item[1], // hình như sai thứ tự/// open : 1, high : 2, low 3 , close 4, vol 5
              close: item[4],
              low: item[3],
              high: item[2],
              vol: item[5],
            };
          });
        //
        splineMa5Ref.current = calculateMovingAverage(
          // ma5
          result?.d
            ?.slice(startPoint - 5, parseInt(endPoint))
            ?.map((item, key) => item[4]),
          5
        );
        //
        splineMa5Ref2.current = result?.d
          ?.slice(startPoint - 4, parseInt(endPoint))
          ?.map((item, key) => item[4]);
        //

        splineMa10Ref.current = calculateMovingAverage(
          // ma10
          result?.d
            ?.slice(startPoint - 10, parseInt(endPoint))
            ?.map((item) => item[4]),
          10
        );
        //
        splineMa10Ref2.current = result?.d
          ?.slice(startPoint - 9, parseInt(endPoint))
          ?.map((item) => item[4]);

        columnRef.current = result?.d
          ?.slice(startPoint, endPoint)
          ?.map((item, key) => ({
            x: parseInt(key),
            y: item[5],
            color: item[4] > item[1] ? "#04c793" : "#fa4b62"
          }));

        columnRef2.current = result?.d
        ?.slice(startPoint, endPoint)
        ?.map((item, key) => ({
          x: parseInt(key),
          y: item[5],
          color: item[4] > item[1] ? "#04c793" : "#fa4b62"
        }));

        columnColorRef.current = result?.d
          ?.slice(startPoint, endPoint)
          ?.map((item, key) => (item[4] > item[1] ? "#04c793" : "#fa4b62"));
        columnColorRef2.current = result?.d
          ?.slice(startPoint, endPoint)
          ?.map((item, key) => (item[4] > item[1] ? "#04c793" : "#fa4b62"));

        setData(result);
        setData2(result);
      } catch (error) {}
    })();
  }, []);
  useEffect(() => {
    // Định kỳ cập nhật dữ liệu và vị trí của đường nằm ngang
    // updateDataAndLinePosition();
    // const interval = setInterval(()=> updateDataAndLinePosition(), 2000); // Cập nhật sau mỗi 5 giây
  }, []);

  // console.log(data?.d?.slice(startPoint, endPoint)?.map((item, key) => {
  //   // console.log("candlestickitem", item);
  //   return {
  //     x: parseInt(key),
  //     open: item[1], // hình như sai thứ tự/// open : 1, high : 2, low 3 , close 4, vol 5
  //     close: item[4],
  //     low: item[3],
  //     high: item[2],
  //   };
  // }).concat([{x: endPoint, open: lastRef.current?.openPrice, close: lastRef.current?.closePrice, low: lastRef.current?.lowPrice, high: lastRef.current?.highPrice}]))
  const updateDataAndLinePosition = (value) => {
    // Lấy giá trị mới nhất từ dữ liệu cập nhật
    const currentValue = value;

    // Cập nhật dữ liệu và vị trí của đường nằm ngang
    const chart = chartRef.current?.chart;
    const plotLine = chart.yAxis[0].plotLinesAndBands[0];
    plotLine.options.value = currentValue;
    // Di chuyển đường nằm ngang đến vị trí mới

    // Vẽ lại biểu đồ
    chart.redraw(true);
  };

  const getCurrentValue = () => {
    // Hàm lấy giá trị mới nhất từ dữ liệu cập nhật
    // Thay thế bằng cách lấy giá trị từ nguồn dữ liệu thực tế của bạn
    // Ví dụ: return this.props.data[this.props.data.length - 1];
    const value = 26945;
    // console.log(value);
    return value; // Giá trị ngẫu nhiên từ 0 đến 10
  };
  // console.log(data?.d?.slice(startPoint, endPoint)?.map((item) => item[2]));
  // console.log(Math.ceil(_.max(_.map(data?.d, (item) => item[5]))))
  // console.log(Math.floor(_.min(_.map(data?.d, (item) => item[2]))))
  // console.log(Math.ceil(_.max(_.map(data?.d, (item) => item[2]))))
  // console.log(roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100))
  const chartOptions = {
    accessibility: {
      enabled: false,
    },
    chart: {
      // events: {
      //   load: function () {
      //     var chart = this;
      //     var xAxis = chart.xAxis[0];

      //     // Thiết lập sự kiện resize cho biểu đồ
      //     window.addEventListener("resize", function () {
      //       chart.reflow(); // Điều chỉnh kích thước biểu đồ khi có sự thay đổi kích thước trình duyệt
      //     });

      //     // Thiết lập transition cho trục x khi có sự thay đổi
      //     chart.xAxis[0].update({
      //       labels: {
      //         animation: {
      //           duration: 500, // Thời gian của hiệu ứng transition (milliseconds)
      //         },
      //       },
      //     });
      //   },
      //   afterSetExtremes: function (event) {
      //     var xAxis = this.xAxis[0];
      //     var min = event.min;
      //     var max = event.max;

      //     // Kiểm tra nếu khoảng giá trị trục x đã thay đổi
      //     if (min !== xAxis.oldMin || max !== xAxis.oldMax) {
      //       // Thực hiện điều chỉnh đồ thị tương ứng với khoảng giá trị mới
      //       console.log("Khoảng giá trị trục x đã thay đổi:", min, max);
      //       // Thực hiện các thao tác cần thiết để điều chỉnh đồ thị
      //     }

      //     // Lưu lại giá trị cũ của trục x
      //     xAxis.oldMin = min;
      //     xAxis.oldMax = max;
      //   },
      // },
      backgroundColor: "#011022",
      spacingBottom: 0,
    },
    title: {
      text: "",
    },
    tooltip: {
      crosshair: [1, 1],
      split: false,
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      shape: "rect",
      style: {
        color: "white",
      },
      positioner: function (labelWidth, labelHeight, point) {
        return {
          x: 10,
          y: 80,
        };
      },
      useHTML: true,
      formatter: function () {
        const { series, point } = this;
        if (series.type === "candlestick") {
          return `<div class="dataVolumeChart" style="font-size: 14px; border-radius: 10px; padding: 5px;
           ">
                <span style="margin-right: 10px; font-size: 17px"><b>O</b>: ${this.point.open}</span>
                <span style="margin-right: 10px; font-size: 17px"><b>C</b>: ${this.point.close}</span>
                <span>&nbsp;</span>
            <br>
            <span style="margin-right: 10px; font-size: 17px"><b>H</b>: ${this.point.high}</span>
            <span style="margin-right: 10px; font-size: 17px"><b>L</b>: ${this.point.low}</span>
            <span style="font-size: 17px"><b>Vol</b>: ${this.point.vol}</span></div>`;
        }
        if (series.type === "column") {
          return `<div style="font-size: 17px"><b style="font-size: 17px">Vol:</b> ${this.point.options.y}</div>`;
        }
      },
    },
    rangeSelector: {
      selected: 1,
    },
    series: [
      {
        yAxis: 0,
        gridLineColor: "rgb(45, 49, 64)",
        type: "spline",
        zIndex: 10,
        name: "",
        color: "#fa4b62",
        data: splineMa5Ref.current,
        stepRadius: 10,
        lineWidth: 2,
        marker: {
          radius: 0,
        },
      },
      {
        yAxis: 0,
        type: "spline",
        zIndex: 10,
        name: "",
        color: "#04c793",
        lineWidth: 2,
        data: splineMa10Ref.current,
        stepRadius: 10,
        marker: {
          radius: 0,
        },
      },
      {
        yAxis: 0,
        type: "candlestick",
        animation: {
          duration: 1000, // Thời gian của hiệu ứng di chuyển (1 giây),
          enable: true,
          easing: "easeOutBounce",
        },
        name: "",
        groupPadding: 0,
        pointPadding: 0.2,
        data: candlestickRef.current,
      },
      {
        type: "column",
        borderColor: "color",
        borderRadius: "0 0 0 0", // Đặt giá trị borderRadius là "0 0 0 0" để xóa border radius tại cả bốn góc
        yAxis: 1,
        inverted: false,
        name: "",
        data: columnRef.current, // Dữ liệu của biểu đồ cột,
        // colors: columnColorRef.current,
      },
    ],
    xAxis: {
      plotLines: [
        {
          // mark the weekend
          color: "rgb(132, 134, 143)",
          width: 2,
          value: 70,
          dashStyle: "dash",
        },
      ],
      crosshair: true,
      tickInterval: 5,
      min: 0,
      max: 71,
      labels: {
        formatter: function () {
          return moment(
            data?.d?.[parseInt(this.value) + startPoint]?.[0]
          ).format("mm:ss");
        },
      },
    },
    yAxis: [
      {
        offset: 0,
        tickPositioner: function () {
          // console.log("this", this);
          const max = this.dataMax; // Giá trị tối đa trên trục y
          const min = this.dataMin; // Giá trị tối thiểu trên trục y
          const numTicks = 8; // Số điểm chia đều trên trục y

          const interval = (max - min) / (numTicks - 1); // Khoảng cách giữa các điểm
          const positions = []; // Mảng chứa các vị trí của các điểm

          for (let i = 0; i < numTicks; i++) {
            positions.push(Math.round(min + i * interval)); // Tính toán vị trí của từng điểm
          }
          // console.log("positions", positions);
          return positions; // Trả về mảng các vị trí của các điểm
        },
        gridLineColor: "rgb(45, 49, 64)",
        gridLineWidth: 1, // Độ dày của đường kẻ
        tickWidth: 1, // Độ dày của đường chia trên trục y
        tickColor: "transparent", // Màu sắc của đường chia trên trục y
        // min: roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 50,
        // max: roundUpToNearest(_.max(_.map(data?.d, (item) => item[2])), 100) - 50,
        // tickPositions: [roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 50, roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 40, roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 30, roundDownToNearest(_.min(_.map(data?.d, (item) => item[2])), 100) - 20, 26680+ 40, 26680+ 50, 26680+ 60],
        showFirstLabel: false,
        showLastLabel: false,
        startPoint: false,
        endOnTick: false,
        startOnTick: false,
        minPadding: 0,
        // tickAmount: 8,
        // tickInterval: 10,
        // lineColor: "#fff",
        style: "dotted",
        dashStyle: "dash",
        // lineWidth: 1,
        gridLineDashStyle: "longdash",
        labels: {
          style: {
            color: "#ffffff",
          },
        },
        opposite: true,
        plotLines: [
          {
            label: {
              useHTML: true,
              x: 60,
              align: "right",
              formatter: function () {
                return `<div id="highchart-plot-line-label-d">
                          <div class="highcharts-plot-line-label " data-z-index="100" style="font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size: 12px; white-space: nowrap; margin-left: 0px; margin-top: 0px; left: 916px; top: 124px; color: rgb(255, 255, 255); background: transparent; border-radius: 4px; visibility: inherit;"><div class="plotlineChart d-flex flex-column">
                            <span class="price">${priceRef.current}</span>
                            <span class="time align-self-end">00:${restTimeRef.current}</span>
                          </div>
                    </div></div>`;
              },
            },
            value: getCurrentValue(), // Giá trị của đường nằm ngang
            color: "#8b8d96",
            width: 1,
            zIndex: 5,
          },
        ],
        height: "80%",
      },
      {
        visible: false,
        height: "30%",
        top: "70%",
        // tickPositions: [0, 500], // Vị trí của các điểm chia trên trục Y thứ hai
        // Trục y thứ hai cho biểu đồ cột
        opposite: true, // Hiển thị ở phía bên phải
        min: 0,
        max: Math.ceil(_.max(_.map(data?.d, (item) => item[5])) / 100) * 100,
        title: {
          text: "Giá trị cột",
        },
      },
    ],
    plotOptions: {
      bar: {
        groupPadding: 0,
        pointPadding: 0.2,
        dataLabels: {
          enabled: true,
        },
      },
      column: {
        stacking: "normal",
        groupPadding: 0,
        pointPadding: 0.2,
        colorByPoint: true,
        // colors: ["#04c793", "#fa4b62"],
        column: {
          borderRadius: "0 0 0 0", // Đặt giá trị borderRadius là "0 0 0 0" để xóa border radius tại cả bốn góc
        },
        //pointWidth: 20,
      },
      candlestick: {
        animation: {
          duration: 1000, // Thời gian của hiệu ứng di chuyển (1 giây),
          enable: true,
          easing: "easeOutBounce",
        },
        lineColor: "#f81057",
        upLineColor: "#04c793",
        color: "#f81057", // Màu cho các nến tăng giá
        upColor: "#04c793", // Màu cho các nến giảm giá,
      },
      series: {
        states: {
          inactive: {
            opacity: 1,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", aspectRatio: 5 / 2 }}>
      <HighchartsReact
        containerProps={{ style: { height: "100%" } }}
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
}

export default Index;
