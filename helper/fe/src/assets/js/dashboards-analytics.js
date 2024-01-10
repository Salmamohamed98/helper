/**
 * Dashboard Analytics
 */




function showStatistics () {
  'use strict';
let config = {
  colors: {
    primary: '#696cff',
    secondary: '#8592a3',
    success: '#71dd37',
    info: '#03c3ec',
    warning: '#ffab00',
    danger: '#ff3e1d',
    dark: '#233446',
    black: '#000',
    white: '#fff',
    body: '#f4f5fb',
    headingColor: '#566a7f',
    axisColor: '#a1acb8',
    borderColor: '#eceef1'
  }
};
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

   cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;



  // Order Statistics Chart
  // --------------------------------------------------------------------
  
  function drowChart( Mpercentage, Dpercentage){

var Ecoloring;
var Fcoloring;
var biggerValue;
var finalLabel;
if(Mpercentage>Dpercentage){
  biggerValue=Mpercentage
  finalLabel='Memory'
}else{
  biggerValue=Dpercentage
  finalLabel='Disk space'
}
if (Mpercentage>50){
  Ecoloring=config.colors.danger
}else{
  Ecoloring=config.colors.primary
}
if (Dpercentage>50){
  Fcoloring=config.colors.danger
}else{
  Fcoloring=config.colors.primary
}

  const chartOrderStatistics = document.querySelectorAll('.orderStatisticsChart'),
  orderChartConfig = {
    chart: {
      height: 165,
      width: 130,
      type: 'donut'
    },
    labels: ['Memory', 'Disk Space'],
    series: [Mpercentage, Dpercentage],
    colors: [Ecoloring, Fcoloring],
    stroke: {
      width: 5,
      colors: cardColor
    },
    dataLabels: {
      enabled: false,
      formatter: function (val, opt) {
        return parseInt(val) + '%';
      }
    },
    legend: {
      show: false
    },
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        right: 15
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            value: {
              fontSize: '1.5rem',
              fontFamily: 'Public Sans',
              color: headingColor,
              offsetY: -15,
              formatter: function (val) {
                return parseInt(val) + '%';
              }
            },
            name: {
              offsetY: 20,
              fontFamily: 'Public Sans'
            },
            total: {
              show: true,
              fontSize: '0.8125rem',
              color: axisColor,
              label: finalLabel,
              formatter: function (val) {
                return biggerValue+'%';
              }
            }
          }
        }
      }
    }
  };
  chartOrderStatistics.forEach((OrderStatistics)=>{
    
    if (typeof OrderStatistics !== undefined && OrderStatistics !== null) {
      const statisticsChart = new ApexCharts(OrderStatistics, orderChartConfig);
      statisticsChart.render();
    }
  });}
  drowChart(80,30);
};
