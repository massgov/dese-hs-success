import React from 'react'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'
import toPercent from './toPercent'
import CustomTooltip from './customTooltip'

const GroupedBarChart = ({barData}) => {
          return (
                     <ResponsiveContainer minHeight={400}>
                       <BarChart data={barData} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                            <XAxis dataKey="label" fontSize = "1em"/>
                            <YAxis fontSize = "1em" tickFormatter={toPercent}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip content={<CustomTooltip/>}/>
                            <Legend />
                            <Bar dataKey="All subjects" fill="#14558f" formatter={toPercent}/>
                            <Bar dataKey="Core subjects" fill="#43956f" formatter={toPercent}/>
                       </BarChart>
                     </ResponsiveContainer>
          );
}

export default GroupedBarChart
