import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsStock from 'highcharts/modules/stock';
import HighchartsMore from 'highcharts/highcharts-more';
import b_price from '../../api/price/b_price';
// import HighchartsRealtime from 'highcharts/modules/realtime';

// Import các module cần thiết
HighchartsStock(Highcharts);
HighchartsMore(Highcharts);
// HighchartsRealtime(Highcharts);

const CandlestickChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;

      // Thực hiện các thiết lập biểu đồ ở đây
      chart.update({
        chart: {
          type: 'candlestick'
        },
        series: [{
          type: 'candlestick',
          name: 'Candlestick',
          data: [], // Dữ liệu nến sẽ được cập nhật theo thời gian thực
          dataGrouping: {
            enabled: false // Tắt nhóm dữ liệu để hiển thị theo thời gian thực
          }
        }],
        rangeSelector: {
          enabled: false // Tắt range selector
        },
        title: {
          text: 'Realtime Candlestick Chart'
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'Price'
          }
        },
        credits: {
          enabled: false // Tắt credits
        }
      });

      // Thực hiện lấy dữ liệu từ server và cập nhật biểu đồ
      const fetchData = async () => {
        const data= await b_price();
        const newData = data?.d.map(item => {
            const [timestamp, open, high, low, close] = item;
            return [timestamp, open, high, low, close];
          });

          chart.series?.[0]?.setData(newData);

      };

      // Thực hiện fetch dữ liệu mỗi khoảng thời gian
      const updateInterval = setInterval(fetchData, 1000);

      // Xóa interval khi component unmount
      return () => {
        clearInterval(updateInterval);
      };
    }
  }, []);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType="stockChart"
        options={{}} // Các tùy chọn sẽ được cập nhật trong useEffect
        ref={chartRef}
      />
    </div>
  );
};

export default CandlestickChart;