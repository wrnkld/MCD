const ranges4a = [
  [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4],
  [0, 4], [0, 4], [0, 4], [0, 4]
],
averages4a = [
  [3], [2], [3], [3], [3], [9], [2], [3], [3], [3],
  [3], [8], [2], [7]
];
Highcharts.chart('chartsql', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: 'true'
  },
  tooltip: {
    shared: 'true'
  },
  xAxis: {
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  series: [{
    name: 'Rows returned',
    data: averages4a,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges4a,
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

Highcharts.chart('chartdistribution5', {
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
    categories: ['column 5 value', 'column 5 value', 'column 5 value', 'column 5 value', 'column 5 value'],
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

Highcharts.chart('chartdistribution6', {
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
    categories: ['column 6 value', 'column 6 value', 'column 6 value', 'column 6 value', 'column 6 value'],
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

Highcharts.chart('chartdistribution7', {
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
    categories: ['column 7 value', 'column 7 value', 'column 7 value', 'column 7 value', 'column 7 value'],
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
