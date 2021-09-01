import { data } from '/test/integration/test_data/data_missing_long_more_disc.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      config: {
        channels: {
          y: { attach: ['Channel title for long names', '値3'], range: '1.1,0,%' },
          x: { attach: ['Childs of long names which have no end'] },
          color: { attach: ['Channel title for long names'] },
          label: { attach: ['Childs of long names which have no end'] }
        },
        title: 'Column More Disc. elements'
      },
      style: 
      {
        plot: 
        {
          marker: 
          {
            label: 
            { 
              position: 'top'
            }
          }
        }
      }
    }
  )
];

export default testSteps;