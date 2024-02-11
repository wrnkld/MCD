
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
    categories: ['No Status', 'Investigating', 'No Action Needed', 'Fixed', 'False Positive', 'Expected'],
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
      '#FF922B', '#FCC419', '#51CF66', '#51CF66', '#51CF66', '#51CF66',
    ],
    colorByPoint: true,
    groupPadding: 0,
    data: [
      ['No Status', 62],
      ['Investigating', 2],
      ['No Action Needed', 1],
      ['Fixed', 6],
      ['False Positive', 2],
      ['Expected', 3]
    ],
  }]
});
Highcharts.chart('chartseverity', {
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
    categories: ['No Severity', 'Sev-4', 'Sev-3', 'Sev-2', 'Sev-1', 'Sev-0'],
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
      '#F8F0FC', '#F3D9FA', '#E599F7', '#CC5DE8', '#AE3EC9', '#862E9C',
    ],
    colorByPoint: true,
    groupPadding: 0,
    data: [
      ['No Severity', 37],
      ['Sev-4', 1],
      ['Sev-3', 2],
      ['Sev-2', 6],
      ['Sev-1', 2],
      ['Sev-0', 8]
    ],
  }]
});
Highcharts.chart('chartpast', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: 'Incidents',
    color: '#268bf0',
    data: [
      4, 5, 3, 5, 8, 4, 5
    ]
  }]
});





//line
Highcharts.chart('exec6a', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: '',
    color: '#268bf0',
    data: [
      98.3, 98.5, 98.6, 98.3, 98.3, 98.3, 98.9
    ]
  }]
});
//line
Highcharts.chart('exec7a', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: '',
    color: '#268bf0',
    data: [
      96.3, 96.5, 96.6, 96.3, 97.3, 97.3, 97.9
    ]
  }]
});
//line
Highcharts.chart('exec6b', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: '',
    color: '#268bf0',
    data: [
      98.3, 98.5, 98.6, 98.3, 97.3, 98.3, 97.9
    ]
  }]
});
//line
Highcharts.chart('exec7b', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: '',
    color: '#268bf0',
    data: [
      98.3, 96.5, 96.6, 99.3, 97.3, 99.3, 97.9
    ]
  }]
});
//line
Highcharts.chart('exec8', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: '',
    color: '#268bf0',
    data: [
      98.3, 98.5, 97.6, 98.3, 98.3, 98.3, 98.9
    ]
  }]
});
//line
Highcharts.chart('exec9', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Nov 01 2024', 'Nov 02 2024', 'Nov 03 2024', 'Nov 04 2024', 'Nov 05 2024', 'Nov 06 2024', 'Nov 07 2024'],
  },
  series: [{
    name: '',
    color: '#268bf0',
    data: [
      97.3, 97.5, 98.6, 98.3, 98.3, 98.5, 97.9
    ]
  }]
});
