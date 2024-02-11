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


//event 1
const ranges1 = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8],
],
averages1 = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
  [2.5], [4.5], [8.5], [10.5],
];
Highcharts.chart('chartfreshness1', {
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
    labels: {
      step: 4
    },
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
    data: averages1,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges1,
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


//event 2
const ranges2 = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8],
],
averages2 = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
  [2.5], [4.5], [8.5], [10.5],
];
Highcharts.chart('chartfreshness2', {
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
    labels: {
      step: 4
    },
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
    data: averages2,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges2,
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


//event 3
const ranges3 = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8],
],
averages3 = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
  [2.5], [4.5], [8.5], [10.5],
];
Highcharts.chart('chartfreshness3', {
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
    labels: {
      step: 4
    },
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
    data: averages3,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges3,
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
