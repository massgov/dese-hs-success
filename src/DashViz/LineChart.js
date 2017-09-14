//import d3 from 'd3'
import PropTypes from 'react'
import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Text, Dot} from 'recharts'

var value, x, y, index, xTick, active;
var lastFill = '#14558f' 

const CustomizedXAxisTick = React.createClass({
  render () {
    const {x, y, stroke, payload} = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={15} textAnchor="middle" fill="#666" transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }
});

const CustomizedYAxisTick = React.createClass({
  render () {
    const {x, y, stroke, payload} = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dx={-5} dy={5} textAnchor="end" fill="#666" transform="rotate(0)">{payload.value}%</text>
      </g>
    );
  }
});

const CustomizedLabel = React.createClass({
  render () {
    if (this.props.index == this.props.lastIndex) {
        x = this.props.x;
        y = this.props.y;
        value = this.props.lastData + '%';
    } else { 
      x = 0
      y = 0
      value = ''
    } 
    return <text x={x} y={y} dy={-10} dx={5} fill={lastFill} fontSize={15} textAnchor='middle'>{value}</text>
  }
});

export function CustomTooltip(props) {
  const { payload } = props;
  if (props.active) {
    //d3.select('.recharts-label-list').attr('fill','#ffffff')
    const { payload } = props;
    if( payload[0].value != 'Null' ){
      value = payload[0].value + '%'
    } else { value = payload[0].value + '*'}
    return (
      <div className='custom-tooltip-district'>
        <text className='descr_value'>{`${(value)}`}</text>
      </div>
    );
  }
  //lastFill = '#14558f'
  return null;
}

const CustomActiveDot = (props) => {
	const { index, cx, cy, fill, r, value} = props
	return (
		<Dot cx={cx} cy={cy} r={r} fill={fill} />
	)
};

const SimpleLineChart = React.createClass({
	render () {
    const {data, dataKey, ymin, ymax} = this.props
    if(data){ 
      for(let i = data.length-1; i > -1; i--) {
        if(data[i][dataKey] != 'Null') {
          value = data[i][dataKey];
          index = i;
          break;
        } 
      }
    }
  	return (
      <ResponsiveContainer maxHeight={200}>
      	<LineChart data={data}
              margin={{top: 15, right: 30, left: -20, bottom: 5}}>
         <XAxis padding={{ left: 0 }} dataKey="Yr" type="number" domain={[2010, 2016]} tick={<CustomizedXAxisTick/>}/>
         <YAxis type="number" domain={[ymin, ymax]} tick={<CustomizedYAxisTick/>}/>
         <Tooltip content={<CustomTooltip/>}/>
         <Line type="monotone" dataKey={dataKey} stroke="#14558f" activeDot={<CustomActiveDot />} animationDuration={500} label={<CustomizedLabel lastData={value} lastIndex={index}/>}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
