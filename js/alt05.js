

var chartDom = document.getElementById('created_on');
var myChart = echarts.init(chartDom);
var option;

option = {
  grid: {
    left: 50,
    right: 10,
    top: 20,
    borderWidth: 0,
  },
  legend: {
  data: ['Rows']
},
  dataZoom: [
    {
      show: true,
      start: 52,
      end: 98,
    },
  ],
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Rows',
      data: [820, 935, 901, 954, 1290, 1330, 1520, 910, 932, 901, 999, 1290, 1330, 1320, 850, 932, 901, 995, 1250, 1330, 1320, 820, 932, 901, 934, 1250, 1350, 1325, 1350, 1325],
      type: 'line',
      smooth: true,
      lineStyle: {color: '#268bf0'},
      areaStyle: {
        color: '#268bf0'
      }
    }
  ]
};

option && myChart.setOption(option);



Highcharts.chart('chartdistribution1', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    minorTickLength: 0,
    tickLength: 0,
    categories: ['tom.edge', 'nazariy', 'apanchal', 'Europe', 'Africa'],
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
    labels: {
      enabled: false
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    color: '#268bf0',
    name: 'Rows',
    data: [1631, 727, 727, 721, 55]
  }]
});

Highcharts.chart('chartdistribution2', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    minorTickLength: 0,
    tickLength: 0,
    categories: ['column 2 value', 'column 2 value', 'column 2 value', 'column 2 value', 'column 2 value'],
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
    labels: {
      enabled: false
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    color: '#268bf0',
    name: 'Rows',
    data: [552, 222, 207, 121, 21]
  }]
});

Highcharts.chart('chartdistribution3', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    minorTickLength: 0,
    tickLength: 0,
    categories: ['column 3 value', 'column 3 value', 'column 3 value', 'column 3 value', 'column 3 value'],
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
    labels: {
      enabled: false
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    color: '#268bf0',
    name: 'Rows',
    data: [631, 355, 100, 99, 11]
  }]
});

Highcharts.chart('chartdistribution4', {
  chart: {
    type: 'bar'
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    minorTickLength: 0,
    tickLength: 0,
    categories: ['column 4 value', 'column 4 value', 'column 4 value', 'column 4 value', 'column 4 value'],
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
    labels: {
      enabled: false
    }
  },
  credits: {
    enabled: false
  },
  series: [{
    color: '#268bf0',
    name: 'Rows',
    data: [125, 29, 8, 6, 3]
  }]
});
