//lineage
var chartDom = document.getElementById('joblineage');
var myChart = echarts.init(chartDom);
var option;

const data = {

  name: 'client_warehouses',
  value: .91,
  children: [
    {
      name: 'freshness',
      value: .91,
      children: [
        {
          name: 'curr_freshness',
          value: .73,
        },
        {
          name: 'freshness_test_set',
          value: .92,
        },
        {
          name: 'metadata_heartbeat',
          value: .88,
        },
        {
          name: 'redshift_last_measurements',
          value: .88,
        },
        {
          name: 'freshness_exclusion_to_maintenance_windows',
          value: .88,
        },
        {
          name: 'freshness_maintenance_windows',
          value: .88,
        },
        {
          name: 'write_query_log',
          value: .88,
        },
      ]
    },
  ],

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

const container = document.querySelector('#joblineage');
const chart = echarts.init(container);

new ResizeObserver(() => chart.resize()).observe(container);
option && myChart.setOption(option);

//runs
Highcharts.chart('chartairflow', {
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
    data: [13, 15, 14, 23, 13, 13, 13, 14, 15, 12, 14, 13, '', 12],
    color: '#40C057'
  }, {
    name: 'Skipped',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    color: '#FAB005'
  }, {
    name: 'Failed',
    data: ['', '', '', '', '', '', '', '', '', '', '', '', 12, ''],
    color: '#FA5252'
  }]
});
