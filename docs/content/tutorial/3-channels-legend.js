import tutorial from './tutorial-document.js';
import base from './base.js';

tutorial.section('Channels & legend')
.p(`
Besides the x-axis and the y-axis, there are five more channels in Vizzu you can 
use to visualize your data. Similarly to the axes you can put any number of 
dimensions and/or one measure to a channel. In the following example the four 
most commonly used channels are shown. The fifth, noop channel is introduced 
in Chapter 10.
`)
.code('Channels & legend', base.initChart1)
.h() 
.p(`
Data on the label channel will be written on the markers on the chart. Vizzu 
automatically determines the best way to position these labels, but you can set 
them differently with the style object introduced in Chapter 11.
`)
.code('Label', chart => 
	chart.animate({
		config: {
			channels: {
				label: { attach: ['Popularity'] }
			}
		}
	})
)
.h() 
.p(`
The lightness channel sets the lightness of the markers. In this case the same 
measure (Popularity) is added to it that is on the y-axis, meaning that columns’ 
height and lightness represent the same values. The legend for the lightness 
channel is turned on using the legend property. 
`)
.code('Lightness - legend on', chart => 
	chart.animate({
		config: {
			channels: {
				lightness: { attach: ['Popularity'] }
			},
			legend: 'lightness'
		}
	})
)
.h() 
.p(`
The color channel sets the color of the markers. The same dimension (Genres) is 
put on it that is on the x-axis resulting in each bar having a different color. 
If a measure is put on the color channel, a color range will be used.
`)
.p(`
Note: The value on the lightness channel is removed in this step as it doesn’t 
make sense to use it together with the color channel in this case.
`)
.code('Color', chart => 
	chart.animate({
		config: {
			channels: {
				lightness: { set: null },
				color: { attach: ['Genres'] }
			},
			legend: 'color'
		}
	})
)
.h() 
.p(`
The size channel sets the size of the markers if the geometry is circle - where 
size sets the radius of the circles - or line - where size determines line 
width. It is ignored when using rectangle or area geometry. This is why we 
change the geometry to circle in the example.
`)
.code('Size - change of geometry required', chart => 
	chart.animate({
		config: {
			channels: {
				size: { set: ['Popularity'] }
			},
			geometry: 'circle'
		}
	})
)
