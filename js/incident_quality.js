//line
Highcharts.chart('chartquality', {
  title: {
    text: 'context_traits_mvpd	'
  },
  subtitle: {
    text: '% null'
  },
  xAxis: {
    plotBands: [{
      borderColor: 'rgba(207, 79, 89, 0.3)',
      borderWidth: '1',
      color: 'rgba(207, 79, 89, 0.1)',
      from: 11.5,
      to: 14.5
    }],
    categories: ['Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024']
  },
  series: [{
    name: '% null',
    step: true,
    data: [
      1.3, 1.5, 1.2, 1.6, 1.8, 1.7, 1.9, 1.6, 1.3, 1.2,
      1.3, 1.8, 7.7, 7.9, 7.6, 1.5, 1.2, 1.6, 1.3, 1.2,
    ]
  }]
});

Highcharts.chart('impact_radius', {
  chart: {
    type: 'heatmap',
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Data Warehouse Users', 'Data Warehouse Queries', 'Tableau Reports', 'Tableau Users']
  },
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      enabled: false
    },
    gridLineWidth: 0
  },
  tooltip: {
    formatter: function () {
      return 'View Details';
    }
  },
  colorAxis: {
    min: 0,
    minColor: '#ffffff',
    maxColor: '#9F58AD',
  },
  series: [{
    name: '',
    borderWidth: 0,
    states: {
      hover: {
        color: '#9F58AD',
      }
    },
    data: [
      [0, 0, 210],
      [1, 0, 19],
      [2, 0, 58],
      [3, 0, 124],
    ],
    dataLabels: {
      enabled: true,
      color: '#212529'
    }
  }],
});
Highcharts.chart('chartquery1', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['May 1st 2024', 'May 2nd 2024', 'May 3rd 2024', 'May 4th 2024', 'May 5th 2024', 'May 6th 2024', 'May 7th 2024', 'May 8th 2024', 'May 9th 2024', 'May 10th 2024', 'May 11th 2024', 'May 12th 2024', 'May 13th 2024', 'May 14th 2024', 'May 15th 2024', 'May 16th 2024', 'May 17th 2024', 'May 18th 2024', 'May 19th 2024', 'May 20th 2024', 'May 21st 2024', 'May 22nd 2024', 'May 23rd 2024', 'May 24th 2024', 'May 25th 2024', 'May 26th 2024', 'May 27th 2024', 'May 28th 2024', 'May 29th 2024', 'May 30th 2024']
  },
  yAxis: {
    title: {
      text: 'Query Count'
    }
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  series: [
    {
      name: 'Merge',
      data: [{y: 4, color: '#4C5994'}, {y: 3, color: '#4C5994'}, {y: 5, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 3, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}],
    },
    {
      name: 'Create',
      data: [{y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 2, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 3, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}],
    }
  ]
});
Highcharts.chart('chartquery2', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['May 1st 2024', 'May 2nd 2024', 'May 3rd 2024', 'May 4th 2024', 'May 5th 2024', 'May 6th 2024', 'May 7th 2024', 'May 8th 2024', 'May 9th 2024', 'May 10th 2024', 'May 11th 2024', 'May 12th 2024', 'May 13th 2024', 'May 14th 2024', 'May 15th 2024', 'May 16th 2024', 'May 17th 2024', 'May 18th 2024', 'May 19th 2024', 'May 20th 2024', 'May 21st 2024', 'May 22nd 2024', 'May 23rd 2024', 'May 24th 2024', 'May 25th 2024', 'May 26th 2024', 'May 27th 2024', 'May 28th 2024', 'May 29th 2024', 'May 30th 2024']
  },
  yAxis: {
    title: {
      text: 'Query Count'
    }
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  series: [
    {
      name: 'Merge',
      data: [{y: 4, color: '#4C5994'}, {y: 13, color: '#4C5994'}, {y: 5, color: '#4C5994'}, {y: 14, color: '#4C5994'}, {y: 12, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 12, color: '#4C5994'}, {y: 14, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 3, color: '#4C5994'}, {y: 13, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}],
    },
    {
      name: 'Create',
      data: [{y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 12, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 12, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 14, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 3, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}],
    }
  ]
});
