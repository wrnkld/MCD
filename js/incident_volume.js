const ranges1a = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages1a = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('chartvolume1a', {
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
    data: averages1a,
    color: '#268bf0',
    step: true,
    zIndex: 1,
  }, {
    name: 'Medium Threshold',
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

const ranges1b = [
  [24000, 28000], [24100, 28100], [24200, 28200], [24300, 28300], [24500, 28400], [24500, 28500], [24600, 28600], [24700, 28700], [24800, 28800], [24900, 28900],
  [25000, 29000], [25100, 29100], [25200, 29200], [25300, 29300]
],
averages1b = [
  [25000], [25100], [25200], [25300], [25340], [25770], [25800], [25880], [25900], [25999],
  [26000], [26100], [26800], [27300]
];
Highcharts.chart('chartvolume1b', {
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
    data: averages1b,
    color: '#268bf0',
    step: true,
    zIndex: 1,
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

Highcharts.chart('chartcorrelation1', {
  chart: {
    type: 'line',
    zoomType: 'x'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: true,
  },
  tooltip: {
    shared: true
  },
  xAxis: {
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Rows'
    }
  },
  series: [{
    step: false,
    name: 'efrgvbhy-4341-4567-85f9-864da757cb33',
    data: [
      0, 0, 0, 0, 0, 0, 10, 18, 0, 20, 0, 0, 0, 0
    ]
  }, {
    step: false,
    name: 'avcdf543-4341-2574-85f9-864da757cb33',
    data: [
      11, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 560, 640
    ]
  }, {
    step: false,
    name: '12345678-4341-5497-85f9-864da757cb33',
    data: [
      0, 0, 0, 0, 0, 0, 150, 0, 0, 160, 7, 0, 0, 0
    ]
  }]
});
Highcharts.chart('chartcorrelation2', {
  chart: {
    type: 'line',
    zoomType: 'x'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: true,
  },
  tooltip: {
    shared: true
  },
  xAxis: {
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Rows'
    }
  },
  series: [{
    step: false,
    name: 'Mission Lane ',
    data: [
      0, 0, 10, 22, 0, 20, 0, 0, 0, 0
    ]
  }, {
    step: false,
    name: 'Swimply',
    data: [
      0, 20, 20, 40, 0, 22, 0, 0, 0, 0
    ]
  }, {
    step: false,
    name: 'HotJar',
    data: [
      10, 0, 19, 0, 24, 44, 0, 30, 0, 0
    ]
  }, {
    step: false,
    name: 'Assurance',
    data: [
      10, 0, 0, 0, 12, 24, 20, 12, 0, 0
    ]
  }, {
    step: false,
    name: 'Delivery Hero',
    data: [
      11, 0, 20, 24, 0, 0, 0, 0, 360, 340
    ]
  }, {
    step: false,
    name: 'Fox',
    data: [
      20, 0, 50, 0, 0, 60, 7, 0, 0, 0
    ]
  }]
});
Highcharts.chart('chartcorrelation3', {
  chart: {
    type: 'line',
    zoomType: 'x'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
    enabled: true,
  },
  tooltip: {
    shared: true
  },
  xAxis: {
    labels: {
      step: 4
    },
    categories: ['Dec 18 2024', 'Dec 19 2024', 'Dec 20 2024', 'Dec 21 2024', 'Dec 22 2024', 'Dec 23 2024', 'Dec 24 2024', 'Dec 25 2024', 'Dec 26 2024', 'Dec 27 2024', 'Dec 28 2024', 'Dec 29 2024', 'Dec 30 2024', 'Dec 31 2024']
  },
  yAxis: {
    title: {
      text: 'Rows'
    }
  },
  series: [{
    step: false,
    name: 'user_id',
    data: [
      0, 0, 10, 18, 0, 20, 0, 0, 0, 0
    ]
  }, {
    step: false,
    name: 'account_id',
    data: [
      0, 0, 10, 10, 0, 12, 0, 0, 10, 0
    ]
  }, {
    step: false,
    name: 'global_entity_id',
    data: [
      0, 0, 0, 12, 0, 0, 0, 0, 60, 60
    ]
  }, {
    step: false,
    name: 'study_number',
    data: [
      0, 0, 10, 0, 0, 10, 7, 0, 0, 10
    ]
  }]
});
