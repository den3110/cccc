var countRequest = 0;
var isFirst = true;
var dataNew;
var data = [];
var volume = [];
var time = (new Date()).getTime();
var i;
for (i = -50; i <= 0; i += 1) {
  let timecurrent = time + i * 30000;
  data.push([
    timecurrent,
    60700.700 + Math.floor(Math.random() * 30),
    60700.700 + Math.floor(Math.random() * 30),
    60700.700 + Math.floor(Math.random() * 30),
    60700.700 + Math.floor(Math.random() * 30),
  ]);
  volume.push([
    timecurrent,
    55.5
  ]);
}
//change color point chart

// Create the chart
Highcharts.stockChart('container', {
  chart: {
    events: {
      load: function() {
        var series = this.series[0],
          series2 = this.series[1]
        // set up the updating of the chart each second
        setInterval(function() {
          var x = (new Date()).getTime(); // current time
          let dataPush = [
            (new Date()).getTime(),
            60700.700 + Math.floor(Math.random() * 30),
            60700.700 + Math.floor(Math.random() * 30),
            60700.700 + Math.floor(Math.random() * 30),
            60700.700 + Math.floor(Math.random() * 30)
          ];
          series.addPoint(dataPush, true, true);
          series2.addPoint([new Date().getTime(), 120], true, true);
        }, 3000);

      }
    }
  },
  time: {
    useUTC: false
  },



  yAxis: [{
    startOnTick: false,
    endOnTick: false,
    labels: {
      align: 'right',
      x: -3
    },
    title: {
      text: 'OHLC'
    },
    height: '60%',
    lineWidth: 2,
    resize: {
      enabled: true
    }
  }, {
    labels: {
      align: 'right',
      x: -3
    },
    title: {
      text: 'Volume'
    },
    top: '65%',
    height: '35%',
    offset: 0,
    lineWidth: 2
  }],
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        formatter: function() {
          var isLast = false;
          if (this.point.x === this.series.data[this.series.data.length - 1].x && this.point.y === this.series.data[this.series.data.length - 1].y) isLast = true;

          return isLast ? this.y : '';
        }
      }
    }
  },
  series: [{
      type: 'candlestick',
      name: 'Random data',
      data: data,
      lastVisiblePrice: {
        enabled: true,
        label: {
          enabled: true
        }
      },
      lastPrice: {
        enabled: true,
        color: 'red',
        lable: {
          enabled: true
        }

      }
    },
    {
      type: 'column',
      name: 'Volume',
      data: volume,
      yAxis: 1
    }

  ]

});
