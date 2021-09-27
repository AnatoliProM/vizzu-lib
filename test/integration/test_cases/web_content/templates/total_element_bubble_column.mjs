import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate({
        data: data,
        config: {
            channels: {
                color: { set: ['Joy factors'] },
                label: { set: ['Country_code'] },
                /* With a dimension on the size channel Vizzu will stack
                the elements by the categories on the other channels
                on charts without coordinates. Here the Country code dimension is
                used to stack the bubbles by the dimension on the color channel. */
                size: { set: ['Country_code', 'Value 2 (+)'] }  
            },
            title: 'Stacked Bubble Chart',
            geometry: 'circle'
        }
    }),
    chart => chart.animate({
        config: {
            channels: {
                x: { set: ['Joy factors'] },
                y: { set: ['Country_code', 'Value 2 (+)'] },
                label: { set: null },
                /* The stacking is eliminated when we remove
                the extra dimension from the size channel. */
                size: { set: null } 
            },
            title: 'Column Chart',
            geometry: 'rectangle',
            orientation: 'vertical'
        }
    }),
    chart => chart.animate({
        config: {
            channels: {
                y: { detach: ['Country_code'] },
                label: { set: ['Value 2 (+)'] }
            }
        }
    })
];

export default testSteps;