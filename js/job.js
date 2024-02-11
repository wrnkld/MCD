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

//drawer
Highcharts.chart('chartquery', {
  chart: {
    type: 'area',
    zoomType: 'x'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    shared: true
  },
  xAxis: {
    categories: ['Jul 07 2024 EDT', 'Jul 08 2024 EDT', 'Jul 09 2024 EDT', 'Jul 10 2024 EDT', 'Jul 11 2024 EDT', 'Jul 12 2024 EDT', 'Jul 13 2024 EDT', 'Jul 14 2024 EDT']
  },
  yAxis: {
    title: {
      text: '(unit)',
    }
  },
  series: [
    {
      name: 'runtime',
      data: [
        1532, 1288, 1242, 1226, 1528, 2227, 1229,
      ]
    },
    {
      name: 'queued time',
      data: [
        1223, 925, 922, 726, 1038, 927, 924,
      ]
    }
  ]
});
Highcharts.chart('chartvolume', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Jul 07 2024 EDT', 'Jul 08 2024 EDT', 'Jul 09 2024 EDT', 'Jul 10 2024 EDT', 'Jul 11 2024 EDT', 'Jul 12 2024 EDT', 'Jul 13 2024 EDT', 'Jul 14 2024 EDT']
  },
  series: [{
    name: 'Bytes',
    step: true,
    data: [
      624673, 625225, 646722, 646727, 628467, 646723, 646722,
    ]
  }]
});
