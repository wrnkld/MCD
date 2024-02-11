Highcharts.chart('chartstatus', {
  chart: {
    type: 'column'
  },
  title: {
    text: '',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  xAxis: {
    categories: ['Active', 'Misconfigured', 'Training', 'Error'],
    labels: {
      rotation: 0
    }
  },
  tooltip: {
    shared: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false
  },
  series: [{
    colors: [
      '#40C057', '#FAB005', '#268BF0', '#FA5252',
    ],
    colorByPoint: true,
    groupPadding: 0,
    data: [
      ['Active', 62],
      ['Misconfigured', 6],
      ['Training', 22],
      ['Error', 3]
    ],
  }]
});
Highcharts.chart('chartcoverage', {
  chart: {
    type: 'column'
  },
  title: {
    text: '',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  xAxis: {
    categories: ['Compariso',  'Field Quality', 'Freshness', 'Performance', 'Schema', 'Volume'],
    labels: {
      rotation: 0
    }
  },
  tooltip: {
    shared: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false
  },
  series: [{
    colorByPoint: true,
    groupPadding: 0,
    data: [
      ['Comparison', 12],
      ['Field Quality', 59],
      ['Freshness', 99],
      ['Schema', 98],
      ['Performance', 24],
      ['Volume', 94]
    ],
  }]
});
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
      text: '',
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
        { name: 'Audience Name 1', y: 12},
        { name: 'Audience Name 2', y: 42},
        { name: 'Audience Name 3', y: 22},
        { name: 'Audience Name 4', y: 12},
        { name: 'Audience Name 5', y: 32}
      ],
      innerSize: '80%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }]
  });
});
