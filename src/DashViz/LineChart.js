import React from 'react'
import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, Tooltip, Text} from 'recharts'


const SimpleLineChart = React.createClass({
	render () {
    const {data, dataKey} = this.props
    console.log(dataKey)
  	return (
      <ResponsiveContainer maxHeight={200}>
      	<LineChart data={data}
              margin={{top: 5, right: 30, left: -25, bottom: 5}}>
         <XAxis dataKey="Yr"/>
         <YAxis/>
         <Tooltip/>
         <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{r: 5}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
