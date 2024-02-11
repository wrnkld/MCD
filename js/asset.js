//chartevents
var chartDom = document.getElementById('chartevents');
var myChart = echarts.init(chartDom);
var option;
option = {
  color: [
    '#50C9F0',
    '#4C5994',
    '#43B4BA',
    '#9F58AD',
    '#EC8F46',
    '#2663A9',
    '#D14F97',
    '#6AA146',
    '#D7E16F'
  ],
  tooltip: {
  },
  legend: {
    icon: 'circle',
  },
  grid: {
    left: 0,
    right: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Jul 01 2024', 'Jul 02 2024', 'Jul 03 2024', 'Jul 04 2024', 'Jul 05 2024', 'Jul 06 2024', 'Jul 07 2024', 'Jul 08 2024', 'Jul 09 2024', 'Jul 10 2024', 'Jul 11 2024', 'Jul 12 2024', 'Jul 13 2024', 'Jul 14 2024', 'Jul 15 2024', 'Jul 16 2024', 'Jul 17 2024', 'Jul 18 2024', 'Jul 19 2024', 'Jul 20 2024', 'Jul 21 2024', 'Jul 22 2024', 'Jul 23 2024', 'Jul 24 2024', 'Jul 25 2024', 'Jul 26 2024', 'Jul 27 2024', 'Jul 28 2024', 'Jul 29 2024', 'Jul 30 2024', 'Jul 31 2024', 'Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
    }
  ],
  yAxis: [
    {
      show: false
    }
  ],
  dataZoom: [
    {
      show: true,
      start: 52,
      end: 98,
    },
  ],
  series: [
    {
      markArea: {
        itemStyle: {
          color: 'rgba(207, 79, 89, 0.1)',
          borderColor: 'rgba(207, 79, 89, 0.3)',
          borderWidth: '1',
        },
        data: [
          [
            {
              name: '',
              xAxis: 'Jul 25 2024'
            },
            {
              xAxis: 'Jul 25 2024'
            }
          ],
          [
            {
              name: '',
              xAxis: 'Aug 17 2024'
            },
            {
              xAxis: 'Aug 17 2024'
            }
          ]
        ]
      },
      name: '',
      type: 'bar',
      data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
    {
      name: 'GitHub pull request',
      type: 'bar',
      data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '100', '', '', '', '', '', '', '', '', ''],
    },
    {
      name: 'Airflow error',
      type: 'bar',
      data: ['', '', '', '', '', '', '', '', '', '', '', '', '100', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
    {
      name: 'dbt failure',
      type: 'bar',
      data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '100', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    },
    {
      name: 'Query insight',
      type: 'bar',
      data: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '100', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    }
  ],
};
option && myChart.setOption(option);


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
            { name: 'customer_health_score_v2', value: .94 }
          ]
        },
        {
          name: 'customer_adoption_score',
          value: .22
        }
      ]
    },
    {
      name: 'incidents',
      value: .92,
      children: [
        { name: 'reaction_notes', value: .88 },
        { name: 'self_service_events', value: .57 },
        { name: 'alert_fatigue_review', value: .62 }
      ]
    },
    {
      name: 'table_events',
      value: .88,
      children: [{ name: 'events_per_incident', value: .89 }]
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
      left: '8%',
      bottom: '22%',
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

Highcharts.chart('chartfreshness1', {
  chart: {
    type: 'lollipop'
  },
  legend: {
    enabled: true
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  annotations: [{
    labelOptions: {
      backgroundColor: '#F3F9FF',
      borderColor: '#268BF0',
      verticalAlign: 'top',
      y: 15
    },
    labels: [{
      point: { x: 207, y: 20 },
      style: { fontSize:'14px'},
      padding: 10,
      text: ' Query <strong>create_table_as_select</strong> by<br>user <strong>databricks_transform</strong> did not run.'
    }]
  }, {
  }],
  xAxis: {


    plotLines: [{
      color: '#268BF0',
      width: 2,
      value: 3.2
    }],

    plotBands: [{
      borderColor: 'rgba(207, 79, 89, 0.3)',
      borderWidth: '1',
      color: 'rgba(207, 79, 89, 0.1)',
      from: 3.5,
      to: 4.5
    }],
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  yAxis: {
    max: 500,
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
  series: [
    {
      name: 'Table updates',
      data: [
        350, 350, 350, 350, '', 350, 350,
        350, 350, 350, 350, 350, 350, 350
      ]
    }
  ]

});
Highcharts.chart('chartfreshness2', {
  chart: {
    type: 'lollipop'
  },
  legend: {
    enabled: true
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    plotBands: [{
      borderColor: 'rgba(207, 79, 89, 0.3)',
      borderWidth: 1,
      color: 'rgba(207, 79, 89, 0.1)',
      from: 3.5,
      to: 4.5
    }],
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
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
  series: [
    {
      name: 'Table updates',
      data: [
        350, 350, 350, 350, '', 350, 350,
        350, 350, 350, 350, 350, 350, 350
      ]
    }
  ]

});
Highcharts.chart('chartvolume1', {
  title: {
    text: ''
  },
  legend: {
    enabled: true
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  series: [
    {
      name: 'Bytes',
      step: true,
      data: [
        625125, 625125, 625425, 626497, 626727, 624679, 624679,
        624633, 625225, 624639, 626467, 624378, 624679, 624379
      ]
    }
  ]
});
Highcharts.chart('chartvolume2', {
  title: {
    text: ''
  },
  legend: {
    enabled: true
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  title: {
    text: ''
  },
  series: [
    {
      name: 'Bytes',
      step: true,
      data: [
        625125, 625125, 625425, 626497, 626727, 624679, 624679,
        624633, 625225, 624639, 626467, 624378, 624679, 624379
      ]
    }
  ]
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
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
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
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
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
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  tooltip: {
    shared: true,
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Pass',
    data: [2, 1, 2, 2, '', 2, 1, 2, 2, 2, 2, 2, 1, 2],
    color: '#40C057'
  }, {
    name: 'Fail',
    data: ['', '', '', '', 2, '', '', '', '', '', '', '', '', ''],
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
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
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
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
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


Highcharts.chart('chartquery1', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  series: [
    {
      name: 'Merge',
      data: [{y: 4, color: '#4C5994'}, {y: 3, color: '#4C5994'}, {y: 5, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}],
    },
    {
      name: 'Create',
      data: [{y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 2, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}],
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
    categories: ['Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024', 'Aug 24 2024', 'Aug 25 2024', 'Aug 26 2024', 'Aug 27 2024', 'Aug 28 2024', 'Aug 29 2024', 'Aug 30 2024', 'Aug 31 2024']
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  legend: {
    enabled: true,
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  series: [
    {
      name: 'Merge',
      data: [{y: 4, color: '#4C5994'}, {y: 3, color: '#4C5994'}, {y: 5, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}, {y: 4, color: '#4C5994'}],
    },
    {
      name: 'Create',
      data: [{y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 2, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 5, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}, {y: 4, color: '#50C9F0'}],
    }
  ]
});

Highcharts.chart('profile1', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some account_created_on',
    data: [14]
  }, {
    name: 'Other account_created_on',
    data: [5]
  }, {
    name: 'Another account_created_on',
    data: [5]
  }]
});
Highcharts.chart('profile2', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some account_id',
    data: [44]
  }, {
    name: 'Other account_id',
    data: [15]
  }, {
    name: 'Other account_id',
    data: [15]
  }, {
    name: 'Other account_id',
    data: [15]
  }, {
    name: 'Other account_id',
    data: [15]
  }, {
    name: 'Other account_id',
    data: [15]
  }, {
    name: 'Other account_id',
    data: [15]
  }, {
    name: 'Another account_id',
    data: [9]
  }]
});
Highcharts.chart('profile3', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some account_name',
    data: [24]
  }, {
    name: 'Other account_name',
    data: [15]
  }, {
    name: 'Another account_name',
    data: [7]
  }]
});
Highcharts.chart('profile4', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Looker',
    data: [124]
  }, {
    name: 'Tableau',
    data: [65]
  }, {
    name: 'Sigma',
    data: [35]
  }]
});
Highcharts.chart('profile5', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some bi_integration_count',
    data: [28]
  }, {
    name: 'Other bi_integration_count',
    data: [13]
  }, {
    name: 'Another bi_integration_count',
    data: [12]
  }]
});
Highcharts.chart('profile6', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some custom_sql_rule_count',
    data: [124]
  }, {
    name: 'Other custom_sql_rule_count',
    data: [65]
  }, {
    name: 'Other custom_sql_rule_count',
    data: [55]
  }, {
    name: 'Other custom_sql_rule_count',
    data: [44]
  }, {
    name: 'Other custom_sql_rule_count',
    data: [24]
  }, {
    name: 'Another custom_sql_rule_count',
    data: [15]
  }]
});
Highcharts.chart('profile7', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
  }, {
    name: 'Another dim_tracking_monitor_count',
    data: [5]
  }]
});
Highcharts.chart('profile8', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some domains_count',
    data: [24]
  }, {
    name: 'Other domains_count',
    data: [15]
  }, {
    name: 'Other domains_count',
    data: [12]
  }, {
    name: 'Other domains_count',
    data: [8]
  }, {
    name: 'Other domains_count',
    data: [7]
  }, {
    name: 'Another domains_count',
    data: [4]
  }]
});
Highcharts.chart('profile9', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some email_recipients',
    data: [63]
  }, {
    name: 'Other email_recipients',
    data: [55]
  }, {
    name: 'Another email_recipients',
    data: [50]
  }]
});
Highcharts.chart('profile10', {
  chart: {
    margin: [0, 0, 0, 0],
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    lineWidth: 0,
    tickWidth: 0,
    labels: {
      enabled: false
    },
    categories: ['']
  },
  yAxis: {
    endOnTick: false,
    gridLineWidth: 0,
    min: 0,
    labels: {
      enabled: false
    },
    title: {
      text: null
    }
  },
  plotOptions: {
    series: {
      stacking: 'percent',
    }
  },
  series: [{
    name: 'Some event_count_last_7_days',
    data: [255]
  }]
});
