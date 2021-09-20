import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate({
        data: Object.assign(data, {
            filter: record =>
            [ 'AT', 'BE', 'DE', 'DK', 'ES' ]
            .includes(record.Country_code)
        }),
        config: {
            channels: {
                x: { set: ['Value 3 (+)', 'Country'] },
                y: { set: ['Year', 'Joy factors'] },
                color: { set: ['Country'] },
                size: { set: ['Country', 'Value 2 (+)'] },
                noop: { set: ['Year'] }
            },
            title: 'Stacked Bar Chart (Amount of...)'
        }
    }),
    chart => chart.animate({
        config: {
            title: 'Check the elements separatelly',
            split: true
        }
    })
];

export default testSteps;