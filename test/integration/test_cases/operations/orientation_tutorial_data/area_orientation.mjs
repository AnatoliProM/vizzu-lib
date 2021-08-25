import { data } from '/test/integration/test_data/tutorial.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          x: { attach: ['Timeseries'] },
          y: { attach: ['Values 1', 'Categ. Parent'], range: '0,1.1,%' },
          color: { attach: ['Categ. Parent'] },
          label: { attach: ['Values 1'] }
        },
        title: 'Operations: Area - Orientation Change - No:1.',
        geometry: 'area',
        orientation: 'vertical'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          y: { detach: ['Values 1'] },
          x: { attach: ['Values 1'] },
          color: { detach: ['Categ. Parent'], attach: ['Timeseries'] }
        },
        title: 'Operations: Area - Orientation Change - No:2',
        orientation: 'horizontal'
      }
    }
  ),
  chart => chart.animate(
    {
      descriptor: {
        channels: {
          x: { detach: ['Values 1'] },
          y: { attach: ['Values 1'] },
          color: { detach: ['Timeseries'], attach: ['Categ. Parent'] }
        },
        title: 'Operations: Area - Orientation Change - No:3',
        orientation: 'vertical'
      }
    }
  )
];

export default testSteps;