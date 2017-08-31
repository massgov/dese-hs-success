import React from 'react'
import {ResponsiveContainer,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'

const SimpleLineChart = React.createClass({
	render () {
    const {data} = this.props
    console.log(data)
  	return (
      <ResponsiveContainer maxHeight={230}>
      	<LineChart data={data}
              margin={{top: 5, right: 30, left: -15, bottom: 5}}>
         <XAxis dataKey="Yr"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="Cohort_Totl" stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
})

export default SimpleLineChart
