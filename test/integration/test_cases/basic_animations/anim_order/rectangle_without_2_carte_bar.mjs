import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            descriptor:
            {
                channels:
                {
                    color: { attach: ['Joy factors'] },
                    size: { attach: ['Value 2 (+)'] },
                    label: { attach: ['Joy factors'] }
                },
                title: '1D, 1C - Treemap'
            },
            style: {
                plot: {
                    marker: {
                        label: { fontSize: 14 }
                    }
                }
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { attach: ['Joy factors'] },
                    x: { attach: ['Value 2 (+)'], range: '0,1.1,%' },
                    size: { detach: ['Value 2 (+)'] },
                    label: { detach: ['Joy factors'] }
                },
                title: 'X C, Y D (Y first) - Bar'
            }
        }
    ),
        chart => chart.animate(
            {
                descriptor: {
                    channels:
                    {
                        y: { detach: ['Joy factors'] },
                        x: { detach: ['Value 2 (+)'] },
                        size: { attach: ['Value 2 (+)'] },
                        label: { attach: ['Joy factors'] }
                    },
                    title: 'X C, Y D (X first) - Treemap'
                }
            }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    lightness: { attach: ['Value 2 (+)'] },
                    label: { attach: ['Country_code'], detach:['Joy factors'] },
                    size: { attach: ['Value 2 (+)', 'Country_code'] }
                },
                title: 'X C+D, Y D - Treemap.'
            },
            style: {
                plot: {
                    marker: {
                        label: { fontSize: 8 }
                    }
                }
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { attach: ['Joy factors'] },
                    x: { attach: ['Value 2 (+)', 'Country_code'], range: '0,1.1,%' },
                    size: { detach: ['Value 2 (+)'] }
                },
                title: 'X C+D, Y D (Y first) - Bar'
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { detach: ['Joy factors'] },
                    x: { detach: ['Value 2 (+)', 'Country_code'] },
                    size: { attach: ['Value 2 (+)', 'Country_code'] }
                },
                title: 'X C+D, Y D (X first) - Treemap'
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { attach: ['Joy factors'] },
                    x: { attach: ['Value 2 (+)', 'Country_code'], range: '0,1.1,%' },
                    size: { detach: ['Value 2 (+)'] }
                },
                title: 'X C+D, Y D (Y first) - Bar'
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { attach: ['Value 1 (+)'] }
                },
                title: 'X C+D, Y D+C - Mekko'
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { detach: ['Joy factors','Value 1 (+)'] },
                    x: { detach: ['Value 2 (+)', 'Country_code'] },
                    size: { attach: ['Value 2 (+)', 'Country_code'] },
                },
                title: 'X C+D, Y D+C (X first) - Treemap'
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    label: { detach: ['Country_code'], attach: ['Joy factors'] },
                    size: { detach: ['Country_code'] },
                    lightness: { detach: ['Value 2 (+)'] }
                },
                title: 'X C+D, Y C - Treemap'
            },
            style: {
                plot: {
                    marker: {
                        label: { 
                            fontSize: 14, 
                            position: 'center' 
                        }
                    }
                }
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { attach: ['Joy factors','Value 1 (+)'] },
                    x: { attach: ['Value 2 (+)'], range: '0,1.1,%' },
                    size: { detach: ['Value 2 (+)'] }
                },
                title: 'X D+C, Y C (Y first) - Mekko'
            }
        }
    ),
    chart => chart.animate(
        {
            descriptor: {
                channels:
                {
                    y: { detach: ['Value 1 (+)'] },
                    label: { detach: ['Joy factors'] }
                },
                title: 'X C, Y C (Y first) - Bar'
            }
        }
    )
];

export default testSteps;