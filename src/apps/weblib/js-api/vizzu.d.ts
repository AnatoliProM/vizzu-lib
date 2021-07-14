/** Defines a data series of the data set, and contains a particular variable's
 *  values in the data set and meta info about the variable. */
interface DataSeries {
	/** Name of the data series. It will be the unique id of the series to 
	 * reference it in various parts of the API, mainly in {@link Channel} and
	 * {@link DataRecord}. Also this name will be used by default as Axis and 
	 * Legend title. */
	name: string;
	/** Type of the data series:
	 * 'categories' - discrete data containing strings; 
	 * 'values' - continuous data containing numbers. */
	type: 'categories'|'values';
	/** The array that contains the values of the data series. The value types 
	 *  should match {@link DataSeries.type}. If the data series
	 *  is sorter than the longest data series defined, it will be internally 
	 *  extended with empty values internally. */
	values: string[]|number[];
}

/** Represents a categorical or data value */
type DataValue = string|number;

/** A record of the data set, containing the one value of each data series 
 *  corresponding to the same index. */
interface DataRecord {
	/** Properties are provided for each data series, returning the value of
	 *  the series referenced by its {@link DataSeries.name|name}. */
	[seriesName: string]: DataValue;
}

/** Data set is a collection of related {@link DataSeries|data series}. 
 *  Each chart works on a single data set. */
interface DataSet {
	/** The list of the data series makes up the data set. */
	series: DataSeries[];
	/** A filter callback is called on each record of the dataset on chart
	 *  generation. If the callback returns false, the record will be ignored.
	 */
	filter: (record: DataRecord) => boolean;
}

/** Channel range specifies how to scale the represented data.
 *  The first two parameters are the minimum and maximum values. 
 *  The third parameter is the unit. 
 *  1 means the same unit as the data,
 *  % means relative to the actual extremes of the data. */
type ChannelRange = `${number},${number},${1|'%'}`;

/** Channels are the main building blocks of the chart. Each channel describes
 *  a particular aspect of the markers (position, color, etc.) and connects 
 *  them to the underlying data. Each channel can be connected to a single 
 *  continuous data series that will determine the measure of the channel, 
 *  and an ordered list of categorical data sets, which will recursively slice
 *  the channel.
 *  The channels are represented on the chart as an axis or legend. */
interface Channel {
	/** This title shown on the axis or legend corresponds to the channel.
	 *  If not specified, the title will hold the data series name connected to
	 *  the channel. */
	title: string|null;
	/** List of {@link DataSeries.name|data series names} to be added to the 
	 *  channel. */
	attach: string[];
	/** List of {@link DataSeries.name|data series names} to be removed to the 
	 *  channel. */
	 detach: string[];
	/** Specifies the range which determines how the represented data will be
	 *  scales on the channel. */
	range: ChannelRange;
	/** Only one categorical data series can be shown on an axis or legend by
	 *  name. This index specifies which attached series should be used. */
	labelLevel: number;
}

/** The descriptor contains all the parameters needed to render a particular 
 *  static chart or a state of an animated chart. */
interface Descriptor {
	/** List of the chart's channels. */
	channels: {
		/** Parameters for X-axis determine the position of the markers on the 
		 *  x (or angle for the polar coordinate system) axis. 
		 *  Note: leaving x and y channels empty will result in a 
		 *  "without coordinates" chart. */
		x: Channel;
		/** Parameters for Y-axis, determine the position of the markers on the 
		 *  y (or radius for the polar coordinate system) axis. */
		y: Channel;
		/** Parameters for markers' base color. The marker's effective color is 
		 *  also affected by the lightness channel. */
		color: Channel;
		/** Parameters for markers' lightness. */
		lightness: Channel;
		/** Parameters for markers' size, effective only for Circle and Line
		 *  geometry affecting the circle area or the line width respectively.
		 */
		size: Channel;
		/** Not implemented, for now, will not have an effect on the markers */
		shape: Channel;
		/** Parameters for the content of the markers' labels. */
		label: Channel;
	};
	/** This title is shown at the top of the chart.
	 *  If set to null, the Title will not be shown and will not take up any
	 *  space in the chart layout. */
	title: string|null;
	/** Specifies which channel should be detailed on the legend.
	 *  If set to null, the legend will not be shown and will not take up any
	 *  space in the chart layout. */
	legend: 'color'|'lightness'|'size'|null;
	/** Sets the coordinate system for the chart. Switch to the 'polar' 
	 *  coordinate system to create a chart from the pie/radial chart family. */
	coordSystem: 'cartesian'|'polar';
	/** Rotates the plot area by the specified angle in degree. */
	rotation: number;
	/** Sets the geometric element used for the markers to represent the data.*/
	geometry: 'rectangle'|'circle'|'area'|'line';
	/** If both axes represent continuous data, this parameter sets the 
	 *  orientation of the chart, meaning to which axis the graphical elements 
	 *  are oriented to. */
	orientation: 'horizontal'|'vertical';
	/** 'none': markers are sorted in the order as the corresponding data appear
	           in the data set.
	   'experimental': markers will be sorted by the corresponding continuous 
	           data (if present) in decreasing order. */
	sort: 'none'|'experimental';
	/** Reverts the order of the markers if set. */
	reverse: boolean;
	/** Sets the alignment of the markers with relation to the x- and y-axis. */
	align: 'none'|'min'|'center'|'max'|'stretch';
	/** If set, markers will be aligned by the categories instead of getting 
	 *  stacked. */
	split: boolean;
}

declare namespace Styles
{

type Length = `${number}px`|`${number}%`|number;

type Color = `#${number}`
	|`rgb(${number},${number},${number})`
	|`rgba(${number},${number},${number},${number})`;

interface Padding {
	paddingTop: Length;
	paddingRight: Length;
	paddingBottom: Length;
	paddingLeft: Length;
}

interface Font {
	fontFamily: string;
	fontStyle: 'normal'|'italic'|'oblique';
	fontWeight: 'normal'|'bold'|number;
	fontSize: Length;
}

interface Box {
	backgroundColor: Color;
	borderColor: Color;
	borderWidth: number;
}

interface Text {
	color: Color;
	textAlign: 'center'|'left'|'right';
	backgroundColor: Color;
	overflow: 'visible'|'hidden';
	numberFormat: 'none'|'grouped'|'prefixed';
}

type ColorTransform = `color(${Color})`
	| `lightness(${number})`
	| `grayscale(${number})`;

interface MarkerLabel extends Label {
	position: 'below'|'center'|'above';
	filter: ColorTransform;
	format: 'valueFirst'|'categoriesFirst';
}

interface Marker {
	borderWidth: number;
	borderOpacity: number;
	borderOpacityMode: 'straight'|'premultiplied';
	fillOpacity: number;
	guides: {
		color: Color;
		lineWidth: number;
	};
	label: MarkerLabel;
}

interface Axis {
	color: Color;
	title: Label;
	label: Label;
	ticks: {
		color: Color;
		lineWidth: number;
		length: Length;
		position: 'outside'|'inside'|'center';
	};
	guides: {
		color: Color;
		lineWidth: number;
	};
	interlacing: {
		color: Color;
	};
}

interface Plot extends Padding, Box {
	marker: Marker;
	axis: Axis;
}

interface Legend extends Padding, Box {
	width: Length;
	title: Label;
	label: Label;
	marker: {
		type: 'circle'|'square';
		size: Length;
	};
}

type ColorStop = `${Color} ${number}`;

type ColorGradient = ColorStop 
	| `${ColorStop},${ColorStop}`
	| `${ColorStop},${ColorStop},${ColorStop}`
	| `${ColorStop},${ColorStop},${ColorStop},${ColorStop}`
	| `${ColorStop},${ColorStop},${ColorStop},${ColorStop},${ColorStop}`;

type ColorPalette = Color 
	| `${Color} ${Color}` 
	| `${Color} ${Color} ${Color}`
	| `${Color} ${Color} ${Color} ${Color}`
	| `${Color} ${Color} ${Color} ${Color} ${Color}`;

interface Data {
	/** Sets the color gradient used for continuous data on the color channel.*/
	colorGradient: ColorGradient;
	/** Sets the color palette used for categorical data on the color channel.*/
	colorPalette: ColorPalette;
	minLightness: number;
	maxLightness: number;
	lineWidth: number;
	lineMinWidth: number;
	lineMaxWidth: number;
	circleMinRadius: number;
	circleMaxRadius: number;
	barMaxPadding: number;
	barPaddingDecrease: number;
	columnMaxPadding: number;
	columnPaddingDecrease: number;
}

type Label = Padding & Font & Text;

interface Chart extends Padding, Box, Font {
	plot: Plot;
	legend: Legend;
	title: Label;
	data: Data;
}

}

/** Represents a state in the animation describing the data, the chart, and 
 *  the style parameters to be changed from the actual state. */
interface AnimTarget {
	/** Data set changes. */
	data: DataSet;
	/** Chart parameter changes. */
	descriptor: Descriptor;
	/** Style changes. */
	style: Styles.Chart;
}

type Duration = `${number}s`|`${number}ms`|number;

type Easing = 'none' | 'linear' | 'step-start' | 'step-end' | 'ease'
	| 'ease-in' | 'ease-out' 
	| `cubic-bezier(${number},${number},${number},${number})`;

/** Animation parameters for an animation group. */
interface AnimOption 
{
	/** The timing function for the animation, which can be used to affect 
	 *  the animation dynamics. */
	easing: Easing;
	/** The length of time an animation should take to complete. */
	duration: Duration;
	/** Waiting time interval before the animation starts. */
	delay: Duration;
}

/** If no animation settings are passed to Vizzu, it will use an automatic 
 *  setting depending on the actual content of the chart. This behavior can be
 *  overridden via the animation setting parameter.
 * 
 *  The animation between two states of the chart can require the transitioning
 *  of several different chart properties. These properties are grouped into 
 *  separately configurable animation groups.
 * 
 *  The parameters also can be set for the overall animation. Overall parameters
 *  are used as default values for the corresponding parameters in each 
 *  animation group, which are not set separately.
 */
interface AnimOptions extends AnimOption {
	/** Determines if the animation should start automatically after the 
	 *  animate() call. */
	playState: 'paused'|'running';
	/** Animation group for style parameters. */
	style: AnimOption;
	/** Title animation parameters. */
	title: AnimOption;
	/** Animation group for marker visibility change 
	 *  (due to filtering or data series add/remove). */
	enable: AnimOption;
	/** Marker color animation group. */
	color: AnimOption;
	/** Coordinate system transformations animation group. */
	coordSystem: AnimOption;
	/** Marker geometry morph animation group. */
	geometry: AnimOption;
	/** Animation group for marker transitions to the Y direction. */
	y: AnimOption;
	/** Animation group for marker transitions to the X direction. */
	x: AnimOption;
}

/** Control object for animation. */
interface AnimControl {
	/** Seeks the animation to the position specified by time or progress 
	 *  percentage. Seeking the animation to the end position will not trigger
	 *  the (@link Vizzu.animate|animation promise) to resolve. */
	seek(value: `${number}%`|Duration): void;
	/** Pauses the controlled animation. */
	pause(): void;
	/** Plays/resumes playing of the controlled animation. */
	play(): void;
	/** Stops the current animation seeking it back to its start position. */
	stop(): void;
	/** Changes the direction of the controlled animation. */
	reverse(): void;
}

type EventName = 'click'
	|'update'
	|'background-draw'
	|'title-draw'
	|'logo-draw'
	|'legend-background-draw'
	|'legend-title-draw'
	|'legend-label-draw'
	|'legend-marker-draw'
	|'legend-bar-draw'
	|'plot-background-draw'
	|'plot-marker-draw'
	|'plot-marker-label-draw'
	|'plot-marker-guide-draw'
	|'plot-axis-draw'
	|'plot-axis-title-draw'
	|'plot-axis-label-draw'
	|'plot-axis-tick-draw'
	|'plot-axis-guide-draw'
	|'plot-axis-interlacing-draw';

/** The interface of the event object is passed to event handlers by the library.
 *  Additional properties will vary by event type. */
interface Event {
	/** If called, the default action of the event will be canceled. */
	preventDefault: () => void;
}

/** Class representing a single chart in Vizzu. */
export default class Vizzu {
	/** Creates a new empty chart and connects it to the div or canvas HTML 
	 *  element specified by its ID or DOM object. */
    constructor(container: string|HTMLElement);
	/** Promise representing the initialization will resolve when 
	 *  initialization is finished. Any API call will potentially cause 
	 *  an error before this promise is resolved. */
	initializing: Promise<Vizzu>;
	/** Installs the provided event handler to the event specified by name */
	on(eventName: EventName, handler: (event: Event) => void): void;
	/** Uninstalls the provided event handler to the event specified by name */
	off(eventName: EventName, handler: (event: Event) => void): void;
	/** Initiates a new animation to the new chart states passed as the first 
	 *  argument. The optional second parameter specifies the animation 
	 *  options. 
	 *  The method returns a promise, which will resolve when the animation is
	 *  finished. */
	animate(obj: AnimTarget, opt: AnimOptions): Promise<Vizzu>;
	/** Returns controls for the ongoing animation, if any. */
	get animation(): AnimControl;
	/** Returns the version number of the library. */
	version(): string;
}
