//event 1
const ranges3 = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8], [0, 8], [0, 8], [0, 8], [0, 8],
  [0, 6], [0, 8], [0, 8], [0, 7], [0, 8], [0, 7], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7],
  [0, 6], [0, 8], [0, 6], [0, 6], [0, 8], [0, 8], [0, 8], [0, 8], [0, 7], [0, 8], [0, 7],
],
averages3 = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
    [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
      [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
        [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
];
Highcharts.chart('chartfreshness', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024', 'Nov 08 2024', 'Nov 09 2024', 'Nov 10 2024', 'Nov 11 2024', 'Nov 12 2024', 'Nov 13 2024', 'Nov 14 2024', 'Nov 15 2024', 'Nov 16 2024', 'Nov 17 2024', 'Nov 18 2024', 'Nov 19 2024', 'Nov 20 2024', 'Nov 21 2024', 'Nov 22 2024', 'Nov 23 2024', 'Nov 24 2024', 'Nov 25 2024', 'Nov 26 2024', 'Nov 27 2024', 'Nov 28 2024', 'Nov 29 2024', 'Nov 30 2024', 'Nov 31 2024', 'Oct  01 2024', 'Oct  02 2024', 'Oct  03 2024', 'Oct  04 2024', 'Oct  05 2024', 'Oct  06 2024', 'Oct  07 2024', 'Oct  08 2024', 'Oct  09 2024']
  },
  tooltip: {
    shared: true,
  },
  series: [{
    name: 'Lag',
    data: averages3,
    color: '#268bf0',
    zIndex: 1,
    marker: {
      lineColor: Highcharts.getOptions().colors[1]
    }
  }, {
    name: 'Threshold',
    data: ranges3,
    type: 'arearange',
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


Highcharts.chart('readguess', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Oct 01 2024', 'Oct 02 2024', 'Oct 03 2024', 'Oct 04 2024', 'Oct 05 2024', 'Oct 06 2024', 'Oct 07 2024', 'Oct 08 2024', 'Oct 09 2024', 'Oct 10 2024', 'Oct 11 2024', 'Oct 12 2024', 'Oct 13 2024', 'Oct 14 2024', 'Oct 15 2024', 'Oct 16 2024', 'Oct 17 2024', 'Oct 18 2024', 'Oct 19 2024', 'Oct 20 2024', 'Oct 21 2024', 'Oct 22 2024', 'Oct 23 2024', 'Oct 24 2024', 'Oct 25 2024', 'Oct 26 2024', 'Oct 27 2024', 'Oct 28 2024', 'Oct 29 2024', 'Oct 30 2024']
  },
  series: [{
    name: 'Incidents',
    color: '#268bf0',
    data: [
      4, 5, 4, 5, 4, 4, 5, 4, 10, 10, 10, 5, 10, 10, 5, 10, 10, 10, 10, 10, 4, 2, 3, 4, 5, 2, 10, 10, 5, 8
    ]
  }]
});
