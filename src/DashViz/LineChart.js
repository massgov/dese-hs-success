import React from 'react'
import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, Tooltip, Text, Dot} from 'recharts'

const CustomActiveDot = (props) => {
	const { index, cx, cy, fill, r, value} = props
	console.log(index)
	return (
		<Dot cx={cx} cy={cy} r={r} fill={fill} />
	)
}

const SimpleLineChart = React.createClass({
	render () {
    const {data, dataKey} = this.props
  	return (
      <ResponsiveContainer maxHeight={200}>
      	<LineChart data={data}
              margin={{top: 5, right: 30, left: -25, bottom: 5}}>
         <XAxis dataKey="Yr"/>
         <YAxis/>
         <Tooltip/>
         <Line type="monotone" dataKey={dataKey} stroke="#14558f" activeDot={<CustomActiveDot />} animationDuration={500}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
