Highcharts.chart('chartsqlmonitor', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024', 'Aug 21 2024', 'Aug 22 2024', 'Aug 23 2024']
  },
  series: [{
    name: 'Rows Returned',
    step: true,
    data: [
      0, 1, 4, 0, 2, 1, 0, 1, 2, 2
    ]
  }]
});
Highcharts.chart('chartpass', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Jul 01st 2024', 'Jul 02nd 2024', 'Jul 03rd 2024', 'Jul 04th 2024', 'Jul 05th 2024', 'Jul 06th 2024', 'Jul 07th 2024', 'Jul 08th 2024', 'Jul 09th 2024', 'Jul 10th 2024', 'Jul 11th 2024', 'Jul 12th 2024', 'Jul 13th 2024', 'Jul 14th 2024', 'Jul 15th 2024', 'Jul 16th 2024', 'Jul 17th 2024', 'Jul 18th 2024', 'Jul 19th 2024', 'Jul 20th 2024', 'Jul 21st 2024', 'Jul 22nd 2024', 'Jul 23rd 2024', 'Jul 24th 2024', 'Jul 25th 2024', 'Jul 26th 2024', 'Jul 27th 2024', 'Jul 28th 2024', 'Jul 29th 2024', 'Jul 30th 2024', 'Jul 31st 2024']
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    }
  },
  tooltip: {
    shared: true
  },
  series: [{
    name: 'Pass',
    data: [96, 88, 96, 96, 92, 96, 96, 88, 96, 95, 96, 84, 96, 96, 95, 90, 95, 95, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 96, 88],
    stack: 'Type'
  }, {
    name: 'Breach',
    data: [0, 8, 0, 0, 4, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    stack: 'Type'
  }]
});
$(function() {
  chart = new Highcharts.Chart({
    chart: {
      renderTo: 'sqldonut',
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      type: 'pie'
    },
    title: {
      style: {
        fontSize: 32,
      },
      text: '80.5%<br><div style="font-size: 14px">Pass Rate</div>',
      verticalAlign: 'middle',
      align: 'center',
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
      data: [["Pass",2884],["Breach",455]],
      innerSize: '80%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }]
  });
});


//line
Highcharts.chart('incidenthistory', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024', 'Aug 10 2024', 'Aug 11 2024', 'Aug 12 2024', 'Aug 13 2024', 'Aug 14 2024', 'Aug 15 2024', 'Aug 16 2024', 'Aug 17 2024', 'Aug 18 2024', 'Aug 19 2024', 'Aug 20 2024']
  },
  series: [{
    name: 'Incidents',
    data: [
      1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 2, 1, 0, 2, 2, 0, 0, 2, 2,
    ]
  }]
});
