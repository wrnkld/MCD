Highcharts.chart('chartkafka1', {
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
  labels: {
    step: 5
  },
    categories: ['Jan 18 2024 04:00 EST', 'Jan 18 2024 04:05 EST', 'Jan 18 2024 04:10 EST', 'Jan 18 2024 04:15 EST', 'Jan 18 2024 04:20 EST', 'Jan 18 2024 04:25 EST', 'Jan 18 2024 04:30 EST', 'Jan 18 2024 04:35 EST', 'Jan 18 2024 04:40 EST', 'Jan 18 2024 04:45 EST', 'Jan 18 2024 04:50 EST', 'Jan 18 2024 04:55 EST']
  },
  yAxis: {
    title: {
      text: 'Milliseconds'
    }
  },
  series: [
    {
      name: 'Produce request latency',
      data: [
        125, 125, 125, 197, 127, 179, 179, 133, 125, 139, 167, 178
      ]
    }
  ]
});
Highcharts.chart('chartkafka2', {
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
  labels: {
    step: 5
  },
    categories: ['Jan 18 2024 04:00 EST', 'Jan 18 2024 04:05 EST', 'Jan 18 2024 04:10 EST', 'Jan 18 2024 04:15 EST', 'Jan 18 2024 04:20 EST', 'Jan 18 2024 04:25 EST', 'Jan 18 2024 04:30 EST', 'Jan 18 2024 04:35 EST', 'Jan 18 2024 04:40 EST', 'Jan 18 2024 04:45 EST', 'Jan 18 2024 04:50 EST', 'Jan 18 2024 04:55 EST']
  },
  yAxis: {
    title: {
      text: 'Milliseconds'
    }
  },
  series: [
    {
      name: 'Record queue time',
      data: [
        2125, 2125, 2125, 2126, 2126, 2124, 2124, 2124, 2125, 2124, 2126, 2124, 2124, 2124
      ]
    }
  ]
});
Highcharts.chart('chartkafka3', {
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
  labels: {
    step: 5
  },
    categories: ['Jan 18 2024 04:00 EST', 'Jan 18 2024 04:05 EST', 'Jan 18 2024 04:10 EST', 'Jan 18 2024 04:15 EST', 'Jan 18 2024 04:20 EST', 'Jan 18 2024 04:25 EST', 'Jan 18 2024 04:30 EST', 'Jan 18 2024 04:35 EST', 'Jan 18 2024 04:40 EST', 'Jan 18 2024 04:45 EST', 'Jan 18 2024 04:50 EST', 'Jan 18 2024 04:55 EST']
  },
  yAxis: {
    title: {
      text: 'Kilobytes'
    }
  },
  series: [
    {
      name: 'Outgoing byte rate',
      data: [
        1.02, 1.42, 1.03, 1.02, 1.43, 1.02, 1.02, 1.62, 1.22, 1.72, 1.42, 1.88, 1.72, 1.22
      ]
    }
  ]
});
Highcharts.chart('chartkafka4', {
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
  labels: {
    step: 5
  },
    categories: ['Jan 18 2024 04:00 EST', 'Jan 18 2024 04:05 EST', 'Jan 18 2024 04:10 EST', 'Jan 18 2024 04:15 EST', 'Jan 18 2024 04:20 EST', 'Jan 18 2024 04:25 EST', 'Jan 18 2024 04:30 EST', 'Jan 18 2024 04:35 EST', 'Jan 18 2024 04:40 EST', 'Jan 18 2024 04:45 EST', 'Jan 18 2024 04:50 EST', 'Jan 18 2024 04:55 EST']
  },
  yAxis: {
    title: {
      text: 'Messages'
    }
  },
  series: [
    {
      name: 'Outgoing messages',
      data: [
        625125, 625125, 625425, 626497, 626727, 624679, 624679, 624633, 625225, 624639, 626467, 624378, 624679, 624379
      ]
    }
  ]
});
Highcharts.chart('chartkafka5', {
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
  labels: {
    step: 5
  },
    categories: ['Jan 18 2024 04:00 EST', 'Jan 18 2024 04:05 EST', 'Jan 18 2024 04:10 EST', 'Jan 18 2024 04:15 EST', 'Jan 18 2024 04:20 EST', 'Jan 18 2024 04:25 EST', 'Jan 18 2024 04:30 EST', 'Jan 18 2024 04:35 EST', 'Jan 18 2024 04:40 EST', 'Jan 18 2024 04:45 EST', 'Jan 18 2024 04:50 EST', 'Jan 18 2024 04:55 EST']
  },
  yAxis: {
    title: {
      text: 'Throughput'
    }
  },
  series: [
    {
      name: 'Broker network throughput',
      data: [
        625125, 625125, 625425, 626497, 626727, 624679, 624679, 624633, 625225, 624639, 626467, 624378, 624679, 624379
      ]
    }
  ]
});
Highcharts.chart('chartkafka6', {
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
  labels: {
    step: 5
  },
    categories: ['Jan 18 2024 04:00 EST', 'Jan 18 2024 04:05 EST', 'Jan 18 2024 04:10 EST', 'Jan 18 2024 04:15 EST', 'Jan 18 2024 04:20 EST', 'Jan 18 2024 04:25 EST', 'Jan 18 2024 04:30 EST', 'Jan 18 2024 04:35 EST', 'Jan 18 2024 04:40 EST', 'Jan 18 2024 04:45 EST', 'Jan 18 2024 04:50 EST', 'Jan 18 2024 04:55 EST']
  },
  yAxis: {
    title: {
      text: 'Bytes'
    }
  },
  series: [
    {
      name: 'Bytes consumed',
      data: [
        62.51, 62.29, 62.54, 63.64, 63.67, 62.46, 62.22, 63.25, 62.52, 62.46, 62.64, 63.43, 62.46, 64.28
      ]
    }
  ]
});
