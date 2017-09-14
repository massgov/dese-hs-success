import PropTypes from 'react'
import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Text, Dot} from 'recharts'

var value, x, y, index, xTick, fill, tooltipValue; 

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
    return <text x={x} y={y} dy={-10} fill={'#14558f'} fontSize={15} textAnchor="middle">{value}</text>
  }
});

export function CustomTooltip(props) {
  if (props.active) {
    const { payload } = props;
    console.log(payload);
    return (
      <div className='custom-tooltip'>
        <p className='descr'>{`${(payload[0].value)}`}%</p>
      </div>
    );
  }

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
         <YAxis type="number" domain={[0, 100]} tick={<CustomizedYAxisTick/>}/>
         <Tooltip content={<CustomTooltip/>}/>
         <Line type="monotone" dataKey={dataKey} stroke="#14558f" activeDot={<CustomActiveDot />} animationDuration={500} label={<CustomizedLabel lastData={value} lastIndex={index}/>}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
