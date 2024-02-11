
Highcharts.chart('chartdbt', {
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
      text: 'Runtime'
    }
  },
  tooltip: {
    shared: false,
    valueSuffix: ' seconds'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Success',
    data: [22.8, 32.8, 22.8, 24.8, 15.6, '', 12.4, 34.8, 22.4, 42.8, 22.8, 22.8, 42.4, 24.8],
    color: '#40C057'
  }, {
    name: 'Warn',
    data: ['', '', '', '', '', '', '','', ''],
    color: '#FAB005'
  }, {
    name: 'Skipped',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    color: '#268BF0'
  }, {
    name: 'Error',
    data: ['', '', '', '', '', 42.4, '', '', '', '', '', '', '', ''],
    color: '#FA5252'
  }]
});
