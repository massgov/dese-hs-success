import React from 'react'
import { Text } from 'recharts'

const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => {
  const isVert = axisType === 'yAxis';
  const cx = isVert ? x : (x + width) / 3 + x;
  const cy = isVert ? (height / 2) + y : y + height + 10;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <Text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
      {children}
    </Text>
  );
};
export default AxisLabel
