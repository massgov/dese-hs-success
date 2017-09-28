import React from 'react'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import toPercent from './toPercent'
import AxisLabel from './axisLabel'
import CustomTooltip from './customTooltip'
import CustomLegend from './customLegend'


const GroupedBarChart = ({barData}) => {

  return (
                     <ResponsiveContainer minHeight={450}>
                       <BarChart data={barData} margin={{top: 20, right: 20, left: 10, bottom: 20}}>
                            <XAxis dataKey="label" label={<AxisLabel x={30} y={80} width={540} height={350}>Number of courses failed in 9th grade</AxisLabel>} keyfontSize = "1em"/>
                            <YAxis label={<AxisLabel axisType='yAxis' x={25} y={180} width={0} height={0}>4-Year Graduation Rate</AxisLabel>}  fontSize = "1em" tickFormatter={toPercent}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip content={<CustomTooltip/>}/>
                            <Legend verticalAlign="top" content={CustomLegend}/>
                            <Bar dataKey="All subjects" fill="#43956f" formatter={toPercent}/>
                            <Bar dataKey="Core subjects" fill="#FFB300" formatter={toPercent}/>
                       </BarChart>
                     </ResponsiveContainer>
          );
}

export default GroupedBarChart
