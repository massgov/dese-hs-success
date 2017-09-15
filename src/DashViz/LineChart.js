import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';
import {CustomizedXAxisTick, CustomizedYAxisTick, CustomTooltip, CustomizedLabel, CustomizedDot, CustomActiveDot} from './LineChartCustomParts'

var value, index, xTick, active, year;

const SimpleLineChart = ({data, dataKey, ymin, ymax}) => {
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
         <Line type="monotone" dataKey={dataKey} stroke="#14558f" animationDuration={500}
           dot={<CustomizedDot lastIndex={index}/>}
           activeDot={<CustomActiveDot/>}
           label={<CustomizedLabel lastData={value} lastIndex={index}/>} />
        </LineChart>
      </ResponsiveContainer>
    );
}

export default SimpleLineChart