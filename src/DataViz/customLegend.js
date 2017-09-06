import React from 'react'
import {Surface, Symbols} from 'recharts'
import FootNoteLink from '../FootNoteLink'

const LegendItem = ({ index, payload }) => {
  const dataKey = payload[index].dataKey
  const color = payload[index].color
  return(
    <span>
      <Surface width={10} height={10}>
        <Symbols cx={5} cy={5} type="square" size={70} fill={color} />
      </Surface>
      <span>{dataKey}</span>
    </span>
  )
}

const customLegend = ({ payload }) => {
      return (
        <div className="customized-legend">
          <LegendItem index={0} payload={payload}/> &nbsp;
          <LegendItem index={1} payload={payload}/>
          <FootNoteLink index={3} />
        </div>
      )
  }

export default customLegend
