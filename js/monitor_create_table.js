Highcharts.chart('chartfreshness', {
    chart: {
        type: 'lollipop'
    },
    legend: {
        enabled: false
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
      plotBands: [{
        color: 'rgba(209, 219, 228, 0.3)',
        from: 21,
        to: 23
      }],
      categories: ['Dec 18 2024', '', 'Dec 19 2024', '', 'Dec 20 2024', '', 'Dec 21 2024', '', 'Dec 22 2024', '', 'Dec 23 2024', '', 'Dec 24 2024', '', 'Dec 25 2024', '', 'Dec 26 2024', '', 'Dec 27 2024', '', 'Dec 28 2024', '', 'Dec 29 2024']
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
           enabled: false
       }
    },
    tooltip: {
    formatter: function () {
        return this.x;
    }
},
    series: [{
        name: '',
        data: [350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, '']
    }]
});

const ranges = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300], [25500, 29500], [25500, 29500], [25600, 29600], [25700, 29700], [25800, 29800], [25900, 29900],
  [26000, 30000], [26100, 30100], [26000, 30200]
],
averages = [
  [25000], [25100], [25200], [25300], [25400], [25500], [25600], [25700], [25800], [25900],
  [26000], [26100], [26200], [26300], [26400], [26500], [26600], [26700], [26800], [26900],
  [27000], [27100], [27200]
];
Highcharts.chart('chartvolume', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Dec 18 2024', '', 'Dec 19 2024', '', 'Dec 20 2024', '', 'Dec 21 2024', '', 'Dec 22 2024', '', 'Dec 23 2024', '', 'Dec 24 2024', '', 'Dec 25 2024', '', 'Dec 26 2024', '', 'Dec 27 2024', '', 'Dec 28 2024', '', 'Dec 29 2024']
  },
  series: [{
    name: 'Rows',
    data: averages,
    zIndex: 1,
    marker: {
      lineColor: Highcharts.getOptions().colors[1]
    }
  }, {
    name: 'Threshold',
    data: ranges,
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
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024']
  },
  series: [{
    name: 'Incidents',
    color: '#268bf0',
    data: [
      4, 5, 4, 5, 4, 4, 5, 4, 7, 6, 6, 5, 6, 6, 5, 6, 7, 8, 8, 8, 4, 2, 3, 4, 5, 2, 6, 7, 5, 8
    ]
  }]
});
