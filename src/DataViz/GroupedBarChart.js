import React from 'react'
import {ResponsiveContainer,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text} from 'recharts'
import toPercent from './toPercent'

const GroupedBarChart = ({barData}) => {
          return (
                     <ResponsiveContainer minHeight={400}>
                       <BarChart data={barData} margin={{top: 20, right: 20, left: 10, bottom: 5}}>
                            <XAxis dataKey="label" fontSize = "1em"/>
                            <YAxis fontSize = "1em" tickFormatter={toPercent}/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey="all" fill="#14558f" formatter={toPercent}/>
                            <Bar dataKey="core" fill="#43956f" formatter={toPercent}/>
                       </BarChart>
                     </ResponsiveContainer>
          );
}

export default GroupedBarChart
