Highcharts.chart('chartvolume', {
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
    categories: ['Aug 1 2024', 'Aug 2 2024', 'Aug 3 2024', 'Aug 4 2024', 'Aug 5 2024', 'Aug 6 2024', 'Aug 7 2024', 'Aug 8 2024', 'Aug 9 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024']
  },
  series: [{
    name: 'Bytes',
    step: true,
    data: [
      2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700,
    ]
  }]
});
