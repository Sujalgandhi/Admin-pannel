// calender js


const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();




// cart3
var options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 200,
  type: 'line',
  zoom: {
    enabled: false
  },toolbar: {
    show: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},

grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
yaxis:{show: false},
xaxis:{labels: {
  show: false}}
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();






// stat chart
am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("statchart");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/radar-chart/
  var chart = root.container.children.push(am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX"
  }));
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
  var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
    behavior: "zoomX"
  }));
  
  cursor.lineY.set("visible", false);
  
  
  // Create axes and their renderers
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
  var xRenderer = am5radar.AxisRendererCircular.new(root, {});
  xRenderer.labels.template.setAll({
    radius: 10
  });
  
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0,
    categoryField: "country",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5radar.AxisRendererRadial.new(root, {})
  }));
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
  var series = chart.series.push(am5radar.RadarLineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "litres",
    categoryXField: "country",
    tooltip:am5.Tooltip.new(root, {
      labelText:"{valueY}"
    })
  }));
  
  series.strokes.template.setAll({
    strokeWidth: 2
  });
  
  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 5,
        fill: series.get("fill")
      })
    });
  });
  
  
  // Set data
  // https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
  var data = [{
    "country": "Lithuania",
    "litres": 501
  }, {
    "country": "Czechia",
    "litres": 301
  }, {
    "country": "Ireland",
    "litres": 266
  }, {
    "country": "Germany",
    "litres": 165
  }, {
    "country": "Australia",
    "litres": 139
  }, {
    "country": "Austria",
    "litres": 336
  }, {
    "country": "UK",
    "litres": 290
  }, {
    "country": "Belgium",
    "litres": 325
  }, {
    "country": "The Netherlands",
    "litres": 40
  }];
  series.data.setAll(data);
  xAxis.data.setAll(data);
  
  
  // Animate chart and series in
  // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()


// chart2

var options = {
    series: [
    {
      type: 'rangeArea',
      name: 'inbound call',
  
      data: [
        {
          x: '9 AM',
          y: [1100, 1900]
        },
        {
          x: '12 PM',
          y: [1200, 1800]
        },
        {
          x: '15 PM',
          y: [900, 2900]
        },
        {
          x: '18 PM',
          y: [1400, 2700]
        },
        {
          x: '19 PM',
          y: [2600, 3900]
        },
        
      ]
    },
  
    {
      type: 'rangeArea',
      name: 'outbound call',
      data: [
        {
          x: '9 AM',
          y: [3100, 3400]
        },
        {
          x: '12 PM',
          y: [4200, 5200]
        },
        {
          x: '15 AM',
          y: [3900, 4900]
        },
        {
          x: '18 PM',
          y: [3400, 3900]
        },
        {
          x: '19 PM',
          y: [5100, 5900]
        },
        
      ]
    },
  
    {
      type: 'line',
      name: '',
      data: [
        {
          x: '9 AM',
          y: 1500
        },
        {
          x: '12 PM',
          y: 1700
        },
        {
          x: '15 PM',
          y: 1900
        },
        {
          x: '18 PM',
          y: 2200
        },
        {
          x: '19 PM',
          y: 3000
        },
        
      ]
    },
    {
      type: 'line',
      name: '',
      data: [
        {
          x: '9 PM',
          y: 3300
        },
        {
          x: '12 PM',
          y: 4900
        },
        {
          x: '15 PM',
          y: 4300
        },
        {
          x: '18 PM',
          y: 3700
        },
        {
          x: '19 PM',
          y: 5500
        },
        
      ]
    }
  ],
    chart: {
    height: 300,
    type: 'rangeArea',
    animations: {
      speed: 500
    },
    toolbar: {
        show: false,
      },
    
  },
  colors: ['#3e97ff', '#50cd89', '#3e97ff', '#50cd89'],
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: [0.24, 0.24, 1, 1]
  },
  forecastDataPoints: {
    count: 2
  },
  stroke: {
    curve: 'straight',
    width: [0, 0, 2, 2]
  },
  legend: {
    show: true,
    customLegendItems: ['Team B', 'Team A'],
    inverseOrder: true
  },
 
  markers: {
    hover: {
      sizeOffset: 5
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();