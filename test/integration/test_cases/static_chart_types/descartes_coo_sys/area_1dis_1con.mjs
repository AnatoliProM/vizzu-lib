import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            descriptor:
            {
                channels:
                {
                    x: { attach: ['Year'] },
                    y: { attach: ['Positive nums'], range: '0,1.1,%' },
                    label: { attach: ['Positive nums'] },
                },
                title: 'Area Chart',
                align: 'none',
                geometry: 'area'
            }
        }
    )
];

export default testSteps;