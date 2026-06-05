import './index.css'

const COLORS = [
  '#ef6c00', '#4caf50', '#2196f3', '#f44336', '#9c27b0',
  '#00bcd4', '#ff9800', '#795548', '#607d8b', '#e91e63',
  '#3f51b5', '#009688', '#cddc39', '#ff5722', '#673ab7',
]

const SCALE_OFFSET = 1

const $ = (id) => {
  const el = document.getElementById(id)
  if (!el) throw new Error(`Element #${id} not found`)
  return el
}

function createScaleApplyData(label, options = {}) {
  return (chart, records) => {
    chart.data.labels = undefined
    chart.data.datasets[0].label = label
    chart.data.datasets[0].data = records
    chart.data.datasets[0].backgroundColor = 'rgb(125, 125, 125)'
    if (options.tension !== undefined) {
      chart.data.datasets[0].tension = options.tension
    } else {
      delete chart.data.datasets[0].tension
    }
  }
}

function createMultiColorApplyData(label) {
  return (chart, records) => {
    chart.data.labels = records.map((_, i) => `Punto ${i + 1}`)
    chart.data.datasets[0].label = label
    chart.data.datasets[0].data = records
    chart.data.datasets[0].backgroundColor = records.map((_, i) => COLORS[i % COLORS.length])
    delete chart.data.datasets[0].tension
  }
}

const chartTypes = [
  {
    id: 'planoXY',
    label: 'Plano XY',
    chartJsType: 'scatter',
    inputFields: [
      { name: 'x', label: 'X' },
      { name: 'y', label: 'Y' },
    ],
    hasScales: true,
    createDataPoint: (inputs) => ({
      x: parseFloat(inputs.x.value),
      y: parseFloat(inputs.y.value),
    }),
    applyData: createScaleApplyData('Plano XY'),
  },
  {
    id: 'bar',
    label: 'Bar',
    chartJsType: 'bar',
    inputFields: [
      { name: 'x', label: 'X' },
      { name: 'y', label: 'Y' },
    ],
    hasScales: true,
    createDataPoint: (inputs) => ({
      x: parseFloat(inputs.x.value),
      y: parseFloat(inputs.y.value),
    }),
    applyData: createScaleApplyData('Histograma'),
  },
  {
    id: 'line',
    label: 'Linea',
    chartJsType: 'line',
    inputFields: [
      { name: 'x', label: 'X' },
      { name: 'y', label: 'Y' },
    ],
    hasScales: true,
    createDataPoint: (inputs) => ({
      x: parseFloat(inputs.x.value),
      y: parseFloat(inputs.y.value),
    }),
    applyData: createScaleApplyData('Linea', { tension: 0.3 }),
  },
  {
    id: 'pie',
    label: 'Pastel',
    chartJsType: 'pie',
    inputFields: [
      { name: 'value', label: 'Valor' },
    ],
    hasScales: false,
    createDataPoint: (inputs) => parseFloat(inputs.value.value),
    applyData: createMultiColorApplyData('Pastel'),
  },
  {
    id: 'doughnut',
    label: 'Dona',
    chartJsType: 'doughnut',
    inputFields: [
      { name: 'value', label: 'Valor' },
    ],
    hasScales: false,
    createDataPoint: (inputs) => parseFloat(inputs.value.value),
    applyData: createMultiColorApplyData('Dona'),
  },
  {
    id: 'radar',
    label: 'Radar',
    chartJsType: 'radar',
    inputFields: [
      { name: 'x', label: 'Etiqueta', type: 'text' },
      { name: 'y', label: 'Valor', type: 'number' },
    ],
    hasScales: false,
    createDataPoint: (inputs) => ({
      label: inputs.x.value || `Punto ${Date.now()}`,
      value: parseFloat(inputs.y.value),
    }),
    applyData: (chart, records) => {
      chart.data.labels = records.map(r => r.label)
      chart.data.datasets[0].label = 'Radar'
      chart.data.datasets[0].data = records.map(r => r.value)
      chart.data.datasets[0].backgroundColor = 'rgba(125, 125, 125, 0.5)'
      delete chart.data.datasets[0].tension
    },
  },
  {
    id: 'polarArea',
    label: 'Polar',
    chartJsType: 'polarArea',
    inputFields: [
      { name: 'value', label: 'Valor' },
    ],
    hasScales: false,
    createDataPoint: (inputs) => parseFloat(inputs.value.value),
    applyData: createMultiColorApplyData('Polar'),
  },
  {
    id: 'bubble',
    label: 'Burbuja',
    chartJsType: 'bubble',
    inputFields: [
      { name: 'x', label: 'X' },
      { name: 'y', label: 'Y' },
      { name: 'r', label: 'Radio' },
    ],
    hasScales: true,
    createDataPoint: (inputs) => ({
      x: parseFloat(inputs.x.value),
      y: parseFloat(inputs.y.value),
      r: parseFloat(inputs.r.value) || 5,
    }),
    applyData: createScaleApplyData('Burbuja'),
  },
]

const dataStore = {}
chartTypes.forEach(t => { dataStore[t.id] = [] })

let currentChartType = chartTypes[0]

const config = {
  type: 'scatter',
  data: {
    datasets: [
      {
        data: [],
        backgroundColor: 'rgb(125, 125, 125)',
        borderWidth: 1,
        pointBorderColor: 'rgb(0, 0, 0)',
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        ticks: { stepSize: 1, font: { size: 16 } },
      },
      y: {
        type: 'linear',
        ticks: { stepSize: 1, font: { size: 16 } },
      },
    },
  },
}

const myChart = new Chart(document.getElementById('myChart'), config)

function renderNav() {
  const nav = $('chartNav')
  nav.innerHTML = ''
  chartTypes.forEach(t => {
    const li = document.createElement('li')
    li.className = 'calc-nav-item'
    li.dataset.chartType = t.id
    if (t.id === currentChartType.id) li.classList.add('active')
    const h3 = document.createElement('h3')
    h3.textContent = t.label
    li.appendChild(h3)
    li.addEventListener('click', () => switchChartType(t.id))
    nav.appendChild(li)
  })
}

function renderInputs() {
  const container = $('inputFields')
  container.innerHTML = ''
  currentChartType.inputFields.forEach(f => {
    const div = document.createElement('div')
    const label = document.createElement('label')
    label.htmlFor = f.name
    label.textContent = f.label
    const input = document.createElement('input')
    input.type = f.type || 'number'
    input.id = f.name
    input.value = ''
    div.appendChild(label)
    div.appendChild(input)
    container.appendChild(div)
  })
}

const scaleConfig = (offset) => {
  config.options.scales.x.min = -1 * offset
  config.options.scales.x.max = offset
  config.options.scales.y.min = -1 * offset
  config.options.scales.y.max = offset
}

const changeScaleConfig = (scales, data, offset) => {
  if (data.length === 0) return
  let minX = Infinity, maxX = -Infinity
  let minY = Infinity, maxY = -Infinity
  for (const item of data) {
    if (item.x < minX) minX = item.x
    if (item.x > maxX) maxX = item.x
    if (item.y < minY) minY = item.y
    if (item.y > maxY) maxY = item.y
  }
  scales.x.min = minX - offset
  scales.x.max = maxX + offset
  scales.y.min = minY - offset
  scales.y.max = maxY + offset
}

function switchChartType(id) {
  const newType = chartTypes.find(t => t.id === id)
  if (!newType || newType.id === currentChartType.id) return

  currentChartType = newType

  document.querySelectorAll('.calc-nav-item').forEach(el => el.classList.remove('active'))
  const activeLi = document.querySelector(`.calc-nav-item[data-chart-type="${id}"]`)
  if (activeLi) activeLi.classList.add('active')

  config.type = newType.chartJsType
  newType.applyData(myChart, dataStore[id])

  if (newType.hasScales && dataStore[id].length > 0) {
    changeScaleConfig(config.options.scales, dataStore[id], SCALE_OFFSET)
  } else if (newType.hasScales) {
    scaleConfig(SCALE_OFFSET)
  }

  renderInputs()
  myChart.update()
}

$('addPoint').addEventListener('click', () => {
  const inputs = {}
  let valid = true
  currentChartType.inputFields.forEach(f => {
    const el = $(f.name)
    inputs[f.name] = el
    if (!el.value || el.value.trim() === '') valid = false
  })
  if (!valid) return

  const point = currentChartType.createDataPoint(inputs)

  if (typeof point === 'number' && isNaN(point)) return
  if (typeof point === 'object' && point !== null) {
    const vals = Object.values(point)
    if (vals.some(v => typeof v === 'number' && isNaN(v))) return
  }

  dataStore[currentChartType.id].push(point)

  currentChartType.applyData(myChart, dataStore[currentChartType.id])

  if (currentChartType.hasScales) {
    changeScaleConfig(config.options.scales, dataStore[currentChartType.id], SCALE_OFFSET)
  }

  currentChartType.inputFields.forEach(f => { $(f.name).value = '' })
  myChart.update()
})

$('deletePoints').addEventListener('click', () => {
  dataStore[currentChartType.id] = []
  currentChartType.applyData(myChart, [])

  if (currentChartType.hasScales) {
    scaleConfig(SCALE_OFFSET)
  }

  currentChartType.inputFields.forEach(f => { $(f.name).value = '' })
  myChart.update()
})

renderNav()
renderInputs()
