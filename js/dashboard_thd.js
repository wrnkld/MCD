Highcharts.chart('chartfreshness1', {
  chart: {
    type: 'lollipop'
  },
  legend: {
    enabled: false
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
      borderWidth: '1',
      color: 'rgba(207, 79, 89, 0.1)',
      from: 3.5,
      to: 4.5
    }],
    categories: ['Jan 12 2024', 'Jan 13 2024', 'Jan 14 2024', 'Jan 15 2024', 'Jan 16 2024', 'Jan 17 2024', 'Jan 18 2024', 'Jan 19 2024', 'Jan 20 2024', 'Jan 21 2024']
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
  series: [{
    name: '',
    data: [350, 350, 350, 350, 350, 350, 350, 350, 350, 350]
  }]
});
Highcharts.chart('chartfreshness2', {
  chart: {
    type: 'lollipop'
  },
  legend: {
    enabled: false
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
      borderWidth: '1',
      color: 'rgba(207, 79, 89, 0.1)',
      from: 3.5,
      to: 4.5
    }],
    categories: ['Jan 12 2024', 'Jan 13 2024', 'Jan 14 2024', 'Jan 15 2024', 'Jan 16 2024', 'Jan 17 2024', 'Jan 18 2024', 'Jan 19 2024', 'Jan 20 2024', 'Jan 21 2024']
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
  series: [{
    name: '',
    data: [350, 350, 350, 350, 0, 350, 350, 350, 350, 350]
  }]

});
Highcharts.chart('chartvolume1', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    plotBands: [{
      borderColor: 'rgba(207, 79, 89, 0.3)',
      borderWidth: '1',
      color: 'rgba(207, 79, 89, 0.1)',
      from: 11.5,
      to: 12.5
    }],
    categories: ['Aug 1 2024', 'Aug 2 2024', 'Aug 3 2024', 'Aug 4 2024', 'Aug 5 2024', 'Aug 6 2024', 'Aug 7 2024', 'Aug 8 2024', 'Aug 9 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024']
  },
  series: [{
    name: 'Bytes',
    step: true,
    data: [
      2000045, 2000087, 2000025, 2000073, 2000045, 2000087, 2000025, 2000073, 2000045, 2000087, 2000025, 2000073, 2001828, 2001989, 2002033, 2002170, 2002324, 2002455,

    ]
  }]
});
Highcharts.chart('chartvolume2', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    plotBands: [{
      borderColor: 'rgba(207, 79, 89, 0.3)',
      borderWidth: '1',
      color: 'rgba(207, 79, 89, 0.1)',
      from: 11.5,
      to: 12.5
    }],
    categories: ['Aug 1 2024', 'Aug 2 2024', 'Aug 3 2024', 'Aug 4 2024', 'Aug 5 2024', 'Aug 6 2024', 'Aug 7 2024', 'Aug 8 2024', 'Aug 9 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024']
  },
  series: [{
    name: 'Bytes',
    step: true,
    data: [
      2000045, 2000087, 2000025, 2000073, 2000045, 2000087, 2000025, 2000073, 2000045, 2000087, 2000025, 2000073, 2001828, 2001989, 2002033, 2002170, 2002324, 2002455,
    ]
  }]
});
