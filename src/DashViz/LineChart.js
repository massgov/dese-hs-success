import PropTypes from 'react';
import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Text, Dot} from 'recharts';

var value, x, y, index, xTick, active, year;

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

const CustomActiveDot = (props) => {
  const { index, cx, cy, fill, r, value} = props
  return (
    <Dot cx={cx} cy={cy} r={r} fill={fill} />
  )
};

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
    return <text x={x} y={y} dy={-11} dx={5} fill={'#14558f'} fontSize={15} textAnchor='middle'>{value}</text>
  }
});

export function CustomTooltip(props) {
  const { payload } = props;
  if (props.active) {
    const { payload } = props;
    if( payload[0].value != 'Null' ){
      value = payload[0].value + '%'
    } else { value = payload[0].value + '*'}
    console.log(props)
    if(props.lastData == payload[0].value && props.lastYear == payload[0]['payload']['Yr']) {
      return null;
    } else {
      return (
        <div className='custom-tooltip-district'>
          <text className='descr_value'>{`${(value)}`}</text>
        </div>
      );
    }
  }
  return null;
}

const CustomizedDot = React.createClass({
  render () {
    const {cx, cy, stroke, fill, r, payload, value} = this.props;
    if (this.props.lastIndex === this.props.index) {
      return (
        <Dot cx={cx} cy={cy} stroke={stroke} r={r+2} fill={'#14558f'} />
      );
    }
    return (
      <Dot cx={cx} cy={cy} r={r} stroke={stroke} fill={'#fff'} />
    );
  }
});

const SimpleLineChart = React.createClass({
	render () {
    const {data, dataKey, ymin, ymax} = this.props
    if(data){ 
      for(let i = data.length-1; i > -1; i--) {
        if(data[i][dataKey] != 'Null') {
          year = data[i]['Yr'];
          value = data[i][dataKey];
          index = i;
          break;
        } 
      }
    }
  	return (
      <ResponsiveContainer maxHeight={200}>
      	<LineChart data={data}
              margin={{top: 22, right: 30, left: -10, bottom: 5}}>
         <XAxis padding={{ left: 0 }} dataKey="Yr" type="number" domain={[2010, 2016]} tick={<CustomizedXAxisTick/>}/>
         <YAxis type="number" domain={[ymin, ymax]} tick={<CustomizedYAxisTick/>}/>
         <Tooltip content={<CustomTooltip lastData={value} lastYear={year}/>}/>
         <Line type="monotone" dataKey={dataKey} stroke="#14558f" dot={<CustomizedDot lastIndex={index}/>} activeDot={<CustomActiveDot lastData={value} lastIndex={index}/>} animationDuration={500} label={<CustomizedLabel lastData={value} lastIndex={index}/>}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
