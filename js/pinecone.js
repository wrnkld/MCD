
const ranges2a = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages2a = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('pinecone', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Vectors'
    }
  },
  series: [{
    name: 'Vectors',
    data: averages2a,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Threshold',
    data: ranges2a,
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
