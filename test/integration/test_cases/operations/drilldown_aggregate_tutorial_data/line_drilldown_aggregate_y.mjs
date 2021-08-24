import { data } from '/test/integration/test_data/tutorial.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          x: { attach: ['Timeseries'] },
          y: { attach: ['Values 1'], range: '0,1.1,%' },
          label: { attach: ['Values 1'] }
        },
        title: 'Operations: Line - Aggregated - Y axis.',
        geometry: 'line',
        legend: null
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { attach: ['Categ. Parent'] }
        },
        title: 'Operations: Line - Drill Down - Y axis.'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { detach: ['Categ. Parent'] },
          color: { attach: ['Categ. Parent'] }
        },
        title: 'Operations: Line - Drill Down - Y axis.',
        legend: "color"
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          color: { detach: ['Categ. Parent'] },
          size: { attach: ['Categ. Parent'] }
        },
        title: 'Operations: Line - Aggregated - Y axis.',
        legend: null
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          size: { detach: ['Categ. Parent'] }
        },
        title: 'Operations: Line - Aggregated - Y axis.'
      }
    }
  )
];

export default testSteps;