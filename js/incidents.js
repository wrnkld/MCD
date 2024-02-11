$(function() {
  chart = new Highcharts.Chart({
    chart: {
      renderTo: 'donut',
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      type: 'pie'
    },
    title: {
      style: {
        margin: 24,
      },
      text: '<div style="font-size: 18px">46%</div><br><div style="font-size: 12px">Classified</div>',
      verticalAlign: 'middle',
      align: 'center',
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    plotOptions: {
      pie: {
        shadow: false
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ this.point.name +'</b>: '+ this.y;
      }
    },
    series: [{
      name: 'Status',
      data: [
        { name: 'Expected', y: 12, color: '#51CF66'},
        { name: 'False Positive', y: 12, color: '#51CF66'},
        { name: 'Fixed', y: 2, color: '#51CF66'},
        { name: 'Investigating', y: 2, color: '#FCC419'},
        { name: 'No Status', y: 32, color: '#FF922B'}
      ],
      innerSize: '80%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }]
  });
});

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
    labels: {
      step: '2'
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
