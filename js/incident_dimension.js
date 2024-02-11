//event 1
const ranges = [
  [11, 22], [12, 24], [9, 24], [8, 24], [12, 22], [9, 24], [12, 24], [12, 24], [8, 27],
  [12, 22], [12, 22], [12, 24], [12, 27], [12, 27], [8, 27], [12, 27], [9, 22], [12, 24],
  [10, 27], [12, 24], [8, 27], [12, 23], [10, 23], [12, 27], [12, 24], [8, 27], [12, 23], [8, 23], [12, 27],
  [10, 27], [8, 27], [12, 23], [10, 23], [12, 22], [12, 22], [8, 27], [12, 23], [8, 23], [12, 27], [10, 27],
],
averages = [
  [13.2], [15.2], [12.5], [16.2], [18.6], [17.6], [19.6], [16.2], [13.5], [12.5],
  [13.2], [18.6], [17.2], [19.2], [16.2], [15.3], [12.6], [16.4], [13.6], [12.5],
  [13.4], [15.6], [12.6], [16.5], [18.4], [17.2], [19.6], [16.2], [13.5], [12.5],
  [13.4], [17.4], [19.6], [16.6], [15.6], [12.6], [12.6], [0], [18.7], [12.6]
];
Highcharts.chart('chartdimension1', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: true
  },
  tooltip: {
    shared: true,
  },
  yAxis: {
    title: {
      text: 'Percent'
    }
  },
  xAxis: {
    labels: {
      step: 6
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024', 'Jan 01 2024', 'Jan 02 2024', 'Jan 03 2024', 'Jan 04 2024', 'Jan 05 2024', 'Jan 06 2024', 'Jan 07 2024', 'Jan 08 2024', 'Jan 09 2024']
  },
  series: [{
    name: 'nazariy',
    data: averages,
    color: '#268bf0',
    zIndex: 1,
    marker: {
      lineColor: Highcharts.getOptions().colors[1]
    }
  }, {
    name: 'Medium Threshold',
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
const ranges2 = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages2 = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('chartdimension2', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: true
  },
  tooltip: {
    shared: true,
  },
  xAxis: {
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Rows'
    }
  },
  series: [{
    name: 'Volume',
    data: averages2,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Medium Threshold',
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
