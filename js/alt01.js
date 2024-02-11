
//lineage
var chartDom = document.getElementById('lineage');
var myChart = echarts.init(chartDom);
var option;

const data = {
  name: 'events',
  value: .91,
  children: [
    {
      name: 'deployment_metric_tracking',
      value: .73,
      children: [
        {
          name: 'warehouse_user_stats',
          value: .88,
          children: [
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
            { name: 'table_event_queries', value: .93 },
            { name: 'customer_health_score_v2', value: .94 },
          ]
        },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
        { name: 'customer_adoption_score', value: .22 },
      ]
    },
    {
      name: 'incidents',
      value: .92,
      children: [
        { name: 'reaction_notes', value: .88 },
        { name: 'self_service_events', value: .57 },
        { name: 'alert_fatigue_review', value: .62 },
        { name: 'reaction_notes', value: .88 },
        { name: 'self_service_events', value: .57 },
        { name: 'alert_fatigue_review', value: .62 },
        { name: 'reaction_notes', value: .88 },
        { name: 'self_service_events', value: .57 },
        { name: 'alert_fatigue_review', value: .62 },
        { name: 'reaction_notes', value: .88 },
        { name: 'self_service_events', value: .57 },
        { name: 'alert_fatigue_review', value: .62 },
      ]
    },
    {
      name: 'table_events',
      value: .88,
      children: [
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
        { name: 'events_per_incident', value: .89 },
      ]
    },
  ]
};
option = {
  tooltip: {
    formatter: '{b} {c}',
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [
    {
      type: 'tree',
      id: 0,
      name: 'tree1',
      data: [data],
      top: '10%',
      left: '10%',
      bottom: '10%',
      right: '20%',
      symbolSize: 7,
      edgeForkPosition: '63%',
      initialTreeDepth: 3,
      lineStyle: {
        width: 2
      },
      label: {
        backgroundColor: '#fff',
        position: 'left',
        verticalAlign: 'middle',
        align: 'right'
      },
      leaves: {
        label: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left'
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};

const container = document.querySelector('#lineage');
const chart = echarts.init(container);

new ResizeObserver(() => chart.resize()).observe(container);
option && myChart.setOption(option);

//event 1
const ranges1a = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8],
],
averages1a = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
  [2.5], [4.5], [8.5], [10.5],
];
Highcharts.chart('chartfreshness1', {
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
      step: 4
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
    data: averages1a,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'High Threshold',
    data: ranges1a,
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
//event 1
const ranges1b = [
  [0, 8], [0, 6], [0, 8], [0, 8], [0, 8], [0, 7], [0, 7], [0, 7], [0, 7],
  [0, 6], [0, 6], [0, 6], [0, 7], [0, 8],
],
averages1b = [
  [2.5], [4.5], [8.5], [10.5], [12.5], [0], [3], [4], [6], [8],
  [2.5], [4.5], [8.5], [10.5],
];
Highcharts.chart('chartfreshness2', {
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
    data: averages1b,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'High Threshold',
    data: ranges1b,
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
const ranges2a = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages2a = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('chartvolume1', {
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
    plotLines: [{
      color: '#24292F',
      label: {
        text: 'GitHub pull request',
        zIndex: 3,
        align: 'left',
        rotation: '0'
      },
      width: 2,
      value: 3.2,
      zIndex: 3,
    }],
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Rows'
    }
  },
  series: [{
    name: 'Volume',
    data: averages2a,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Medium Threshold',
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
const ranges2b = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages2b = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('chartvolume2', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    shared: true,
  },
  legend: {
    enabled: true
  },
  xAxis: {
    labels: {
      step: 4
    },
    plotLines: [{
      color: '#24292F',
      label: {
        text: 'GitHub pull request',
        zIndex: 3,
        align: 'left',
        rotation: '0'
      },
      width: 2,
      value: 3.2,
      zIndex: 3,
    }],
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Rows'
    }
  },
  series: [{
    name: 'Volume',
    data: averages2b,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Medium Threshold',
    data: ranges2b,
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
Highcharts.chart('chartdbt1', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Runtime'
    }
  },
  tooltip: {
    shared: false,
    valueSuffix: ' seconds'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Success',
    data: [22.8, 32.8, 22.8, 24.8, '', '', '', 34.8, 22.4, 42.8, 22.8, 22.8, 42.4, 24.8],
    color: '#40C057'
  }, {
    name: 'Warn',
    data: ['', '', '', '', '', '', '','', ''],
    color: '#FAB005'
  }, {
    name: 'Skipped',
    data: ['', '', '', '', 15.6, '', 12.4, '', '', '', '', '', '', ''],
    color: '#268BF0'
  }, {
    name: 'Error',
    data: ['', '', '', '', '', 42.4, '', '', '', '', '', '', '', ''],
    color: '#FA5252'
  }]
});
Highcharts.chart('chartdbt2', {
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
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Runtime'
    }
  },
  tooltip: {
    shared: false,
    valueSuffix: ' seconds'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Success',
    data: [22.8, 32.8, 22.8, 24.8, '', '', '', 34.8, 22.4, 42.8, 22.8, 22.8, 42.4, 24.8],
    color: '#40C057'
  }, {
    name: 'Warn',
    data: ['', '', '', '', '', '', '','', ''],
    color: '#FAB005'
  }, {
    name: 'Skipped',
    data: ['', '', '', '', 15.6, '', 12.4, '', '', '', '', '', '', ''],
    color: '#268BF0'
  }, {
    name: 'Error',
    data: ['', '', '', '', '', 42.4, '', '', '', '', '', '', '', ''],
    color: '#FA5252'
  }]
});
Highcharts.chart('chartdbt3', {
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
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Runtime'
    }
  },
  tooltip: {
    shared: false,
    valueSuffix: ' seconds'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Pass',
    data: [2.74, 1.99, 2.53, 2.53, '', 2.86, 1.88, 2.66, 2.81, 2.66, 2.81, 2.93, 1.99, 2.93],
    color: '#40C057'
  }, {
    name: 'Fail',
    data: ['', '', '', '', 2.24, '', '', '', '', '', '', '', '', ''],
    color: '#FA5252'
  }]
});
Highcharts.chart('chartairflow1', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Duration'
    }
  },
  tooltip: {
    valueSuffix: ' minutes'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Successful',
    data: [13, 15, 14, '', 13, 13, 13, 14, 15, 12, 14, '', '', 12],
    color: '#40C057'
  }, {
    name: 'Skipped',
    data: ['', '', '', 23, '', '', '', '', '', '', '', 13, '', ''],
    color: '#FAB005'
  }, {
    name: 'Failed',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', 12, ''],
    color: '#FA5252'
  }]
});
Highcharts.chart('chartairflow2', {
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
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Duration'
    }
  },
  tooltip: {
    valueSuffix: ' minutes'
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Successful',
    data: [13, 15, 14, '', 13, 13, 13, 14, 15, 12, 14, '', '', 12],
    color: '#40C057'
  }, {
    name: 'Skipped',
    data: ['', '', '', 23, '', '', '', '', '', '', '', 13, '', ''],
    color: '#FAB005'
  }, {
    name: 'Failed',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', 12, ''],
    color: '#FA5252'
  }]
});
const ranges3a = [
  [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5],
  [0, .5], [0, .5], [0, .5], [0, .5]
],
averages3a = [
  [1.3], [1.2], [1.3], [1.3], [1.3], [1.9], [1.2], [1.3], [1.3], [1.3],
  [1.3], [1.8], [1.2], [1.7]
];
Highcharts.chart('chartmetrics1', {
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
      text: ''
    }
  },
  series: [{
    name: '% null',
    data: averages3a,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges3a,
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


const ranges3b = [
  [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5], [0, .5],
  [0, .5], [0, .5], [0, .5], [0, .5]
],
averages3b = [
  [1.3], [1.2], [1.3], [1.3], [1.3], [1.9], [1.2], [1.3], [1.3], [1.3],
  [1.3], [1.8], [1.2], [1.7]
];
Highcharts.chart('chartmetrics2', {
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
      text: ''
    }
  },
  series: [{
    name: '% null',
    data: averages3b,
    color: '#268bf0',
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges3b,
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

const ranges4a = [
  [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4], [0, 4],
  [0, 4], [0, 4], [0, 4], [0, 4]
],
averages4a = [
  [3], [2], [3], [3], [3], [9], [2], [3], [3], [3],
  [3], [8], [2], [7]
];
Highcharts.chart('chartsql1', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: 'true'
  },
  tooltip: {
    shared: 'true'
  },
  xAxis: {
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  series: [{
    name: 'Rows returned',
    data: averages4a,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges4a,
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

Highcharts.chart('chartsql2', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: 'true'
  },
  tooltip: {
    shared: 'true'
  },
  xAxis: {
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  series: [{
    name: 'Rows returned',
    data: averages4a,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Manual Threshold',
    data: ranges4a,
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
