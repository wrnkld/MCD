Highcharts.chart('chartairflow', {
  chart: {
    type: 'column'
  },
  title: {
    text: '',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  xAxis: {
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Duration'
    }
  },
  tooltip: {
    valueSuffix: ' minutes'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Successful',
    data: [13, 15, 14, 23, 13, 13, 13, 14, 15, 12, 14, 13, '', 12],
    color: '#40C057'
  }, {
    name: 'Skipped',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    color: '#FAB005'
  }, {
    name: 'Failed',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', 12, ''],
    color: '#FA5252'
  }]
});
