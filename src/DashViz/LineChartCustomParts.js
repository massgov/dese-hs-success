import React from 'react'
import {Dot} from 'recharts';

export const CustomizedXAxisTick = ({x, y, stroke, payload}) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={15} textAnchor="middle" fill="#666" fontSize={12} transform="rotate(0)">{payload.value}</text>
      </g>
    );
}

export const CustomizedYAxisTick = ({x, y, stroke, payload}) => {
    return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dx={-5} dy={5} textAnchor="end" fill="#666" fontSize={12} transform="rotate(0)">{payload.value}%</text>
        </g>
    );
}

var value, countValue;
export const CustomTooltip = (props) => {
  const { payload } = props;
  if (props.active) {
    const { payload } = props;
    if( payload[0].value !== 'Null' ){
      value = ( Math.round( payload[0].value * 10 ) / 10 ) + '%';
      countValue = payload[0]['payload'][props.dataCount].toLocaleString();
    } else {
      return (
        <div className='custom-tooltip-district'>
          <text className='descr_value'>Available in DART</text>
        </div>
        )
    }
    if(props.lastData == payload[0].value && props.lastYear == payload[0]['payload']['Yr']) {
      return (
        <div className='custom-tooltip-district'>
          <text className='descr_value'> of {`${(countValue)}`} students</text>
        </div>
        )
    } else {
      return (
        <div className='custom-tooltip-district'>
          <text className='descr_value'>{`${(value)}`}</text>
          <text className='descr_value'> of {`${(countValue).toLocaleString()}`} students</text>
        </div>
      );
    }
  }
  return null;
}

export const CustomizedLabel = ({index, lastIndex, x, y, lastData}) => {
    if (index == lastIndex) {
        x = x;
        y = y;
        value = ( Math.round( lastData * 10 ) / 10 ) + '%';
    } else {
      x = 0
      y = 0
      value = ''
    }
    return <text x={x} y={y} dy={-11} dx={5} fill={'#14558f'} fontSize={15} textAnchor='middle'>{value}</text>
}

export const CustomizedDot = ({cx, cy, stroke, fill, r, payload, value, index, lastIndex}) => {
    if (lastIndex === index) {
      return (
        <Dot cx={cx} cy={cy} stroke={stroke} r={r+2} fill={'#14558f'} />
      );
    }
    return (
      <Dot cx={cx} cy={cy} r={r} stroke={stroke} fill={'#fff'} />
    );
}


export const CustomActiveDot = ({ index, cx, cy, fill, r, value}) => {
  return (
    <Dot cx={cx} cy={cy} r={r} fill={fill} />
  )
};
