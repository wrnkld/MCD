Highcharts.chart('chartvolume', {
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['Jul 01 2024', 'Jul 02 2024', 'Jul 03 2024', 'Jul 04 2024', 'Jul 05 2024', 'Jul 06 2024', 'Jul 07 2024', 'Jul 08 2024', 'Jul 09 2024', 'Jul 10 2024', 'Jul 11 2024', 'Jul 12 2024', 'Jul 13 2024', 'Jul 14 2024', 'Jul 15 2024', 'Jul 16 2024', 'Jul 17 2024', 'Jul 18 2024', 'Jul 19 2024', 'Jul 20 2024', 'Jul 21 2024', 'Jul 22 2024', 'Jul 23 2024', 'Jul 24 2024', 'Jul 25 2024', 'Jul 26 2024', 'Jul 27 2024', 'Jul 28 2024', 'Jul 29 2024', 'Jul 30 2024', 'Jul 31 2024', 'Aug 01 2024', 'Aug 02 2024', 'Aug 03 2024', 'Aug 04 2024', 'Aug 05 2024', 'Aug 06 2024', 'Aug 07 2024', 'Aug 08 2024', 'Aug 09 2024']
  },
  series: [{
    name: 'Rows',
    step: true,
    data: [
      624673, 625225, 646722, 626467, 624678, 646727, 624679, 624676, 624673, 624672,
      624673, 625225, 646722, 626467, 624678, 646727, 624679, 624676, 624673, 624672,
      624673, 625225, 646722, 626467, 624678, 646727, 624679, 624676, 624673, 624672,
      624673, 625225, 646722, 626467, 624678, 646727, 624679, 624676, 624673, 624672,
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
        margin: 50,
      },
      text: '98.8%<br><div style="font-size: 14px">Pass Rate</div>',
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
      data: [["Pass",2884],["Breach",120]],
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
      4, 6, 4, 5, 6, 4, 8, 5, 7, 4, 8, 5, 6, 8, 46, 46, 66, 66, 80, 90,
    ]
  }]
});
