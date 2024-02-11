//line

const ranges1 = [
[0, .8], [0, .6], [0, 1], [0, 1.2], [0, .6], [0, .7], [0, .9], [0, .6], [0, .9], [0, .5],
[0, .8], [0, .6], [0, 1], [0, 1], [0, .6], [0, .7], [0, .9], [0, 1], [0, .9], [0, .5]
],
averages1 = [
  [.5], [0], [0], [0], [0], [.5], [0], [0], [0], [0],
  [0], [0], [.2], [5.5], [0], [.5], [0], [.4], [0], [0],
];
Highcharts.chart('chartfield1', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024']
  },
  series: [{
    name: '% null',
    color: '#268bf0',
    data: averages1,
  }, {
    name: 'Medium Threshold',
    data: ranges1,
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

const ranges2 = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages2 = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('chartfield2', {
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
      text: 'Rows'
    }
  },
  series: [{
    name: 'Volume',
    data: averages2,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Medium Threshold',
    data: ranges2,
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

const ranges1b = [
  [0, .8], [0, .6], [0, 1], [0, 1.2], [0, .6], [0, .7], [0, .9], [0, .6], [0, .9], [0, .5],
  [0, .8], [0, .6], [0, 1], [0, 1], [0, .6], [0, .7], [0, .9], [0, 1], [0, .9], [0, .5]
],
averages1b = [
  [.5], [0], [0], [0], [0], [.5], [0], [0], [0], [0],
  [0], [0], [.2], [5.5], [0], [.5], [0], [.4], [0], [0],
];
Highcharts.chart('chartfield1b', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024']
  },
  series: [{
    name: '% null',
    color: '#268bf0',
    data: averages1b,
  }, {
    name: 'Medium Threshold',
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

//chartcorrelation

const rangesc1 = [
[0, 1.4], [0, 1.6], [0, 1], [0, 1], [0, 1.6], [0, .7], [0, .9], [0, 1.6], [0, 1.3], [0, .3],
[0, .8], [0, .4], [0, 1], [0, .6], [0, .6], [0, .6], [0, .6], [0, 1], [0, .9], [0, .5]
],
averagesc1 = [
  [.2], [.6], [.6], [.9], [0], [0], [.3], [.4], [0], [0],
  [.6], [.4], [.4], [5.9], [0], [0], [.3], [.9], [0], [0],
];
Highcharts.chart('chartcorr1', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024']
  },
  series: [{
    name: '% null',
    color: '#268bf0',
    data: averagesc1,
  }, {
    name: 'Medium Threshold',
    data: rangesc1,
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

const rangesc2 = [
[0, .8], [0, .7], [0, 1], [0, 1.2], [0, .6], [0, .7], [0, .3], [0, 1], [0, .6], [0, .3],
[0, .8], [0, .6], [0, 1], [0, .9], [0, .3], [0, .7], [0, .3], [0, .6], [0, .3], [0, .6]
],
averagesc2 = [
  [.6], [.2], [.4], [0], [0], [0], [0], [.1], [.3], [.4],
  [.2], [.6], [0], [6], [0], [0], [.2], [.1], [.3], [.2],
];
Highcharts.chart('chartcorr2', {
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
    labels: {
      step: 4
    },
    //plotBands: [{ borderColor: 'rgba(207, 79, 89, 0.3)', borderWidth: '1', color: 'rgba(207, 79, 89, 0.1)', from: 11.5, to: 14.5 }],
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024']
  },
  series: [{
    name: '% null',
    color: '#268bf0',
    data: averagesc2,
  }, {
    name: 'Medium Threshold',
    data: rangesc2,
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

const rangesc3 = [
[0, 1.8], [0, 1.7], [0, 1], [0, 1.1], [0, .7], [0, 1.3], [0, 1.9], [0, 1.6], [0, 1.9], [0, 1.3],
[0, 1.7], [0, 1.6], [0, 1], [0, 1.2], [0, .6], [0, .7], [0, 1.7], [0, 1], [0, 1.9], [0, 1.5]
],
averagesc3 = [
  [0], [0], [0], [0], [.3], [0], [0], [.3], [.2], [.1],
  [.1], [.1], [0], [5.2], [.2], [.2], [.4], [.2], [.1], [.1],
];
Highcharts.chart('chartcorr3', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024']
  },
  series: [{
    name: '% null',
    color: '#268bf0',
    data: averagesc3,
  }, {
    name: 'Medium Threshold',
    data: rangesc3,
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

const rangesc4 = [
[0, 1.5], [0, 1.5], [0, 1.5], [0, 1.5], [0, 1.3], [0, 1.5], [0, 1.3], [0, 1.6], [0, 1.5], [0, 1.5],
[0, 1.5], [0, 1.6], [0, 1.7], [0, 1.5], [0, 1.6], [0, 1.3], [0, 1.3], [0, 1.6], [0, 1.5], [0, 1.7]
],
averagesc4 = [
  [.2], [.4], [.2], [.4], [.3], [.4], [.4], [.2], [.1], [.3],
  [.2], [.1], [.3], [7.3], [0], [0], [.2], [.4], [.6], [.2],
];
Highcharts.chart('chartcorr4', {
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
    labels: {
      step: 4
    },
    categories: ['Dec 01 2024', 'Dec 02 2024', 'Dec 03 2024', 'Dec 04 2024', 'Dec 05 2024', 'Dec 06 2024', 'Dec 07 2024', 'Dec 08 2024', 'Dec 09 2024', 'Dec 10 2024', 'Dec 11 2024', 'Dec 12 2024', 'Dec 13 2024', 'Dec 14 2024', 'Dec 15 2024', 'Dec 16 2024', 'Dec 17 2024', 'Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024']
  },
  series: [{
    name: '% null',
    color: '#268bf0',
    data: averagesc4,
  }, {
    name: 'Medium Threshold',
    data: rangesc4,
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








var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

const seriesLabel = {
  show: true
};
option = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    icon: 'circle',
    data: ['% in Normal Rows', '% in Anomalous Rows']
  },
  grid: {
    left: 340,
    right: 0,
  },
  toolbox: {
    show: true,
  },
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    inverse: true,
    data: ['ACCOUNT_ID: 8038c636-7b67-4412-a620-a26ca9dfcfa2', 'RESOURCE_ID: b5dcec3e-5de3-4f77-9ba6-f109132b0104', 'INCIDENT_EVENT_COUNT: 4'],
  },
  series: [
    {
      name: '% in Normal Rows',
      type: 'bar',
      data: [2, 2, 4],
    },
    {
      name: '% in Anomalous Rows',
      type: 'bar',
      data: [30, 30, 10]
    }
  ]
};

option && myChart.setOption(option);
