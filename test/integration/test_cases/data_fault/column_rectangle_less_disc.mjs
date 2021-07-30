import { data } from '/test/integration/test_data/data_missing_long.js';

let styles = {
  fontFamily: 'Roboto, TakaoMincho, sans-serif',
  plot: {
    marker: {
      label: { position: 'above', filter: 'lightness(0)' }
    }
  }
};

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      descriptor: {
        channels: {
          y: { attach: ['Channel title for long names', '値3'], range: '1.1,0,%' },
          x: { attach: ['Childs of long names which have no end'] },
          color: { attach: ['Channel title for long names'] },
          label: { attach: ['Childs of long names which have no end'] }
        },
        title: 'Data missing - Less Discrete',
        legend: 'color'
      },
      style: styles
    }
  )
];

export default testSteps;