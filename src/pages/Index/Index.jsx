import React, { useEffect, useRef, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import borderRadius from "highcharts-border-radius";
import b_price from "../../api/price/b_price";
import moment from "moment";
// import dataFake from "./a";

borderRadius(Highcharts);
function DynamicHorizontalLineChart() {
  const chartRef = useRef();
  const [data, setData] = useState([]);
  const [startPoint, setStartPoint] = useState(30);
  const [endPoint, setEndPoint] = useState(100);
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
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setStartPoint((prev) => parseInt(prev) + 1);
  //     setEndPoint((prev) => parseInt(prev) + 1);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);
  useEffect(() => {
    (async () => {
      try {
        const result = await b_price();
        setData(result);
      } catch (error) {}
    })();
  }, []);
  useEffect(() => {
    // Định kỳ cập nhật dữ liệu và vị trí của đường nằm ngang
    // updateDataAndLinePosition();
    // const interval = setInterval(()=> updateDataAndLinePosition(), 2000); // Cập nhật sau mỗi 5 giây
  }, []);

  const updateDataAndLinePosition = () => {
    // Lấy giá trị mới nhất từ dữ liệu cập nhật
    const currentValue = getCurrentValue();

    // Cập nhật dữ liệu và vị trí của đường nằm ngang
    const chart = chartRef.current.chart;
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
    const value = 26650;
    console.log(value);
    return value; // Giá trị ngẫu nhiên từ 0 đến 10
  };
  console.log(data?.d?.slice(startPoint, endPoint)?.map((item) => item[2]));

  const chartOptions = {
    accessibility: {
      enabled: false,
    },
    chart: {
      backgroundColor: "#011022",
      spacingBottom: 0,
    },
    title: {
      text: "",
    },
    tooltip: {
      crosshair: [1, 1],
      split: false,
      backgroundColor: "black",
      borderColor: "green",
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
      formatter: function () {
        const { series, point } = this;
        if (series.type === "candlestick") {
          return `<div class="dataVolumeChart" style="font-size: 14px; border-radius: 10px; padding: 5px; background: rgba(0,0,0,0.2);
            background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.2) 100%);">
                <span style="margin-right: 10px;"><b>O</b>: ${this.point.open}</span>
                <span style="margin-right: 10px;"><b>C</b>: ${this.point.close}</span>
                <span>&nbsp;</span>
            <br>
            <span style="margin-right: 10px;"><b>H</b>: ${this.point.high}</span>
            <span style="margin-right: 10px;"><b>L</b>: ${this.point.low}</span>
            <span><b>Vol</b>: 2.46</span></div>`;
        }
        if (series.type === "column") {
          return "<strong>Vol:</strong> " + this.point.options.y;
        }
      },
    },
    rangeSelector: {
      selected: 1,
    },
    series: [
      {
        yAxis: 0,
        type: "spline",
        name: "",
        color: "#fa4b62",
        data: calculateMovingAverage(
          data?.d
            ?.slice(startPoint - 5, parseInt(endPoint))
            ?.map((item, key) => item[4]),
          5
        ),
        stepRadius: 10,
        lineWidth: 2,
        marker: {
          radius: 0,
        },
      },
      {
        yAxis: 0,
        type: "spline",
        name: "",
        color: "#04c793",
        lineWidth: 2,
        data: calculateMovingAverage(
          data?.d
            ?.slice(startPoint - 10, parseInt(endPoint))
            ?.map((item) => item[4]),
          10
        ),
        stepRadius: 10,
        marker: {
          radius: 0,
        },
      },
      {
        yAxis: 0,
        type: "candlestick",
        name: "",
        groupPadding: 0,
        pointPadding: 0.2,
        data: data?.d?.slice(startPoint, endPoint)?.map((item, key) => {
          console.log("candlestickitem", item);
          return {
            x: parseInt(key),
            open: item[1], // hình như sai thứ tự/// open : 1, high : 2, low 3 , close 4, vol 5
            close: item[4],
            low: item[3],
            high: item[2],
          };
        }),
      },
      {
        type: "column",
        borderColor: "color",
        borderRadius: "0 0 0 0", // Đặt giá trị borderRadius là "0 0 0 0" để xóa border radius tại cả bốn góc
        yAxis: 1,
        inverted: false,
        name: "",
        data: data?.d?.slice(startPoint, endPoint)?.map((item, key) => item[5]), // Dữ liệu của biểu đồ cột,
        colors: data?.d
          ?.slice(startPoint, endPoint)
          ?.map((item, key) => (item[8] === 0 ? "#04c793" : "#fa4b62")),
      },
    ],
    xAxis: {
      plotLines: [{ // mark the weekend
        color: 'rgb(132, 134, 143)',
        width: 2,
        value: 70,
        dashStyle: 'dash'
    }],
      crosshair: true,
      tickInterval: 5,
      min: 0,
      max: 70,
      labels: {
        formatter: function () {
          return moment(data?.d?.[parseInt(this.value) + startPoint]?.[0]).format("mm:ss");
        },
      },
    },
    yAxis: [
      {
        min: 26200,
        gridLineWidth: 1, // Độ dày của đường kẻ
        tickWidth: 1, // Độ dày của đường chia trên trục y
        tickColor: "transparent", // Màu sắc của đường chia trên trục y
        max: 26800,
        showFirstLabel: false,
        showLastLabel: false,
        startPoint: false,
        minPadding: 0,
        startOnTick: true,
        tickAmount: 7,
        tickInterval: 50,
        lineColor: "#fff",
        style: 'dotted',
        dashStyle: 'dash',
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
            value: getCurrentValue(), // Giá trị của đường nằm ngang
            color: "#8b8d96",
            width: 1,
            zIndex: 5,
          },
        ],
      },
      {
        visible: false,
        height: "20%",
        top: "80%",
        tickPositions: [0, 500], // Vị trí của các điểm chia trên trục Y thứ hai
        // Trục y thứ hai cho biểu đồ cột
        opposite: true, // Hiển thị ở phía bên phải
        min: 0,
        max: 100,
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
        colors: ["#04c793", "#fa4b62"],
        column: {
          borderRadius: "0 0 0 0", // Đặt giá trị borderRadius là "0 0 0 0" để xóa border radius tại cả bốn góc
        },
        //pointWidth: 20,
      },
      candlestick: {
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
    <div style={{ height: 481.45, width: 1217 }}>
      <HighchartsReact
        containerProps={{ style: { height: "100%" } }}
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
}

export default DynamicHorizontalLineChart;
