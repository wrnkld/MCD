const ranges = [
  [0, 21], [0, 21], [0, 21], [0, 21], [0, 21], [0, 21], [0, 27], [0, 29], [0, 28], [0, 30], [0, 29], [0, 29], [0, 27], [0, 26], [0, 26], [0, 26], [0, 28], [0, 30], [0, 30], [0, 32], [0, 29], [0, 29], [0, 29], [0, 27], [0, 28], [0, 28], [0, 26], [0, 29], [0, 29], [0, 29]
],
averages = [
  [18], [20], [11], [18], [18], [18], [14], [22], [19], [19], [24], [20], [15], [13], [15], [19], [12], [19], [21], [21], [19], [20], [37], [34], [36], [16], [20], [12], [15], [20]
];
Highcharts.chart('chartperformance', {
  title: {
    text: '',
  },
  xAxis: {
    labels: {
      step: 4
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024']
  },
  yAxis: {
    plotLines: [{
      color: '#212529',
      width: 2,
      value: 21
    }],
    title: {
      text: 'Minutes'
    }
  },
  legend: {
    enabled: true
  },
  tooltip: {
    shared: true,
  },
  series: [{
    name: 'Runtime',
      color: '#268bf0',
    data: averages,
    zIndex: 1,
    marker: {
      lineColor: Highcharts.getOptions().colors[1]
    }
  }, {
    name: 'Manual Threshold',
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
