import { data } from '/test/integration/test_data/chart_types_eu.js';

data.filter = record =>
    [ 'AT', 'BE', 'DE', 'DK',  'ES'/*, 'FI', 'FR', 'IT', 'NL', 'SE'*/ ].includes(record.Country_code);

const testSteps = [
    chart => chart.animate(
        {
            data: data,


            config:
            {
                channels:
                {
                    x: { set: ['Value 3 (+)', 'Country_code'] },
                    y: { set: ['Year', 'Joy factors'] },
                    color: { set: ['Country_code'] },
                    size: { set: ['Country_code', 'Value 2 (+)'] },
                    noop: { set: ['Year'] }
                },
                title: 'Stacked Bar Chart (Amount of...)'
            }
        }
    ),
    chart => chart.animate(
        {            
            config:
            {
                title: 'Check the elements separatelly',
                split: true
            }
        }
    ),
    chart => chart.animate(
        {
            config:
            {
                title: 'Stack them again',
                split: false
            }
        }
    )
];

export default testSteps;