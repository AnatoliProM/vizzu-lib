import { data } from '/test/integration/test_data/chart_types_eu.js';

data.filter = record =>
    [ 'AT', 'BE', 'DE', 'DK',  'ES', 'FI', 'FR', 'IT', 'NL', 'SE' ].includes(record.Country_code);

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config:
            {
                channels:
                {
                    y: { set: ['Value 3 (+)', 'Country_code'] },
                    x: { set: ['Year', 'Joy factors'] },
                    color: { set: ['Country_code'] },
                    size: { set: ['Country_code', 'Value 2 (+)'] },
                    noop: { set: ['Year'] }
                },
                title: 'Stacked Streamgraph',
                geometry: 'area',
                align: 'center'
            },
            style: {
                data: 
                { 
                    columnMaxPadding: 0.1 
                },
                plot: 
                {
                    marker: 
                    {
                        borderWidth: 1,
                        borderOpacity: 1
                    }
                }
            }
        }
    )
];

export default testSteps;