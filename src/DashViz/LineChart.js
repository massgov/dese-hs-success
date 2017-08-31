import React from 'react'
import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'

const SimpleLineChart = React.createClass({
	render () {
    const {data, dataKey} = this.props
    console.log(dataKey)
  	return (
      <ResponsiveContainer maxHeight={230}>
      	<LineChart data={data}
              margin={{top: 5, right: 30, left: -15, bottom: 5}}>
         <XAxis dataKey="Yr"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{r: 5}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
