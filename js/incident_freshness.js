//event
const ranges = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8],
],
averages = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
  [2.5], [4.5], [8.5], [10.5],
];
Highcharts.chart('chartfreshness', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: true
  },
  xAxis: {
    plotLines: [{
      color: '#00C7D4',
      label: {
        text: 'Airflow error',
        zIndex: 3,
        align: 'left',
        rotation: '0'
      },
      width: 2,
      value: 3.2,
      zIndex: 3,
    }],
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Hours'
    }
  },
  tooltip: {
    shared: true,
  },
  series: [{
    name: 'Freshness lag',
    data: averages,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'High Threshold',
    data: ranges,
    type: 'arearange',
    showInLegend: true,
    lineWidth: 0,
    linkedTo: ':previous',
    color: '#D1DBE4',
    fillOpacity: 0.3,
    zIndex: 0,
    marker: {
      enabled: false
    }
  }]
});

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

Highcharts.chart('chartdbt2', {
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
    data: [22.8, 32.8, 22.8, 24.8, '', '', '', 34.8, 22.4, 42.8, 22.8, 22.8, 42.4, 24.8],
    color: '#40C057'
  }, {
    name: 'Warn',
    data: ['', '', '', '', '', '', '','', ''],
    color: '#FAB005'
  }, {
    name: 'Skipped',
    data: ['', '', '', '', 15.6, '', 12.4, '', '', '', '', '', '', ''],
    color: '#268BF0'
  }, {
    name: 'Error',
    data: ['', '', '', '', '', 42.4, '', '', '', '', '', '', '', ''],
    color: '#FA5252'
  }]
});
Highcharts.chart('chartdbt3', {
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
    name: 'Pass',
    data: [2.74, 1.99, 2.53, 2.53, '', 2.86, 1.88, 2.66, 2.81, 2.66, 2.81, 2.93, 1.99, 2.93],
    color: '#40C057'
  }, {
    name: 'Fail',
    data: ['', '', '', '', 2.24, '', '', '', '', '', '', '', '', ''],
    color: '#FA5252'
  }]
});
