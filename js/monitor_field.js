//line
Highcharts.chart('chartfield1', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024']
  },
  series: [{
    name: '% null',
    data: [
      1.3, 1.5, 1.2, 1.6, 1.8, 1.7, 1.9, 1.6, 1.3, 1.2,
      1.3, 1.8, 1.7, 1.9, 1.6, 1.5, 1.2, 1.6, 1.3, 1.2,
    ]
  }]
});
Highcharts.chart('chartfield2', {
  chart: {
    type: 'column',
    zoomType: 'x'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024']
  },
  series: [{
    name: 'Row Count',
    data: [
      [1232], [1422], [1522], [1732], [1262], [1731], [1263], [1732], [1332], [1732],
      [1262], [1522], [1722], [1262], [1362], [1351], [1523], [1822], [1262], [1262],
    ],
    colorByPoint: false,
  }]
});

//line
Highcharts.chart('incidenthistory', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024']
  },
  series: [{
    name: 'Incidents',
    data: [
      2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 2, 6, 6, 2, 2, 2, 2, 2, 2, 4
    ]
  }]
});
