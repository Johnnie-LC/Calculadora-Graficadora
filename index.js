let x = document.getElementById('x')
let y = document.getElementById('y')
let addPoint = document.getElementById('addPoint')
let deletePoints = document.getElementById('deletePoints')
let planoXY = document.getElementById('planoXY')
let bar = document.getElementById('bar')

let data = {
  datasets: [
    {
      data: [],
      backgroundColor: 'rgb(125, 125, 125)',
      borderWidth: 1,
      pointBorderColor: 'rgb(0, 0, 0)',
    },
  ],
}

const config = {
  type: 'scatter',
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        ticks: {
          stepSize: 1,
          font: { size: 16 },
        },
      },
      y: {
        type: 'linear',
        ticks: {
          stepSize: 1,
          font: { size: 16 },
        },
      },
    },
  },
}

var myChart = new Chart(document.getElementById('myChart'), config)

planoXY.addEventListener('click', () => {
  if (!planoXY.classList.contains('active')) {
    bar.classList.remove('active')
    planoXY.classList.add('active')
  }
  myChart.data.datasets[0].label = 'Plano XY'
  config.type = 'scatter'
  myChart.update()
})

bar.addEventListener('click', () => {
  if (!bar.classList.contains('active')) {
    planoXY.classList.remove('active')
    bar.classList.add('active')
  }
  myChart.data.datasets[0].label = 'Histograma'
  config.type = 'bar'
  myChart.update()
})

const scaleConfig = (offset) => {
  config.options.scales.x.min = -1 * offset

  config.options.scales.x.max = offset
  config.options.scales.y.min = -1 * offset

  config.options.scales.y.max = offset
}

const getInitRender = (xValue, yValue, offset) => {
  x.value = xValue
  y.value = yValue

  myChart.data.datasets[0].pointRadius = 7

  planoXY.classList.contains('active')
    ? (myChart.data.datasets[0].label = 'Plano XY')
    : (myChart.data.datasets[0].label = 'Histograma')

  myChart.data.datasets[0].data = []

  scaleConfig(offset)
  myChart.update()
}

const changeScaleConfig = (scales, data, offset) => {
  scales.x.min = Math.min(...data.map((item) => item.x)) - offset

  scales.x.max = Math.max(...data.map((item) => item.x)) + offset

  scales.y.min = Math.min(...data.map((item) => item.y)) - offset

  scales.y.max = Math.max(...data.map((item) => item.y)) + offset
}

addPoint.addEventListener('click', () => {
  myChart.data.datasets[0].data.push({
    x: parseFloat(x.value),
    y: parseFloat(y.value),
  })

  changeScaleConfig(config.options.scales, myChart.data.datasets[0].data, 1)

  myChart.update()
})

deletePoints.addEventListener('click', () => {
  getInitRender(0, 0, 1)
})

getInitRender(0, 0, 1)
