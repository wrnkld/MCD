Highcharts.setOptions({
  //font
  chart: {
    style: {
      fontFamily: 'system-ui, sans-serif',
    },
    backgroundColor: 'rgba(0,0,0,0)',
  },
  //plots
  plotOptions: {
    area: {
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
      },
    },
    bar: {
      borderWidth: 0
    },
    column: {
      borderRadius: 0,
      borderWidth: 0
    },
    line: {
      marker: {
        radius: 1
      }
    },
    series: {
      fillOpacity: 0.05,
    }
  },
  //legend
  legend: {
    enabled: false
  },
  //title
  title: {
    align: 'left',
    margin: 32,
    style: {
      color: '#212529',
      fontSize: '14px',
      fontWeight: '600'
    }
  },
  //subtitle
  subtitle: {
    align: 'left',
    margin: 32,
    style: {
      color: '#212529',
      fontSize: '14px',
      fontWeight: '400'
    }
  },
  //credits
  credits: {
    enabled: false
  },
  //x
  xAxis: {
    lineColor: '#D1DBE4',
    lineWidth: 1,
    title: {
      text: '',
      style: {
        color: '#212529',
      }
    },
    labels: {
      style: {
        color: '#212529'
      }
    }
  },
  //y
  yAxis: {
    lineColor: 0,
    title: {
      text: '',
      style: {
        color: '#212529',
      }
    },
    labels: {
      style: {
        color: '#212529'
      }
    },
    gridLineColor: '#D1DBE4'
  },
  //colors
  colors: [
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
  //tooltips
  tooltip: {
    style: {
      color: '#fff',
    },
    backgroundColor: '#212529',
    borderWidth: 0,
    shape: 'square',
    shadow: false
  },
});
