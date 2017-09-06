import React from 'react'
import {Surface, Symbols} from 'recharts'
import FootNoteLink from '../FootNoteLink'

const customLegend = (props) => {
  const { payload } = props
  const dataKey = [payload[0].dataKey, payload[1].dataKey]
  const color = [payload[0].color, payload[1].color]

      return (
        <div className="customized-legend">
          <Surface width={10} height={10} viewBox="0 0 10 10">
            <Symbols cx={5} cy={5} type="square" size={50} fill={color[0]} />
          </Surface>
          <span>{dataKey[0]} </span>
          <Surface width={10} height={10} viewBox="0 0 10 10">
            <Symbols cx={5} cy={5} type="square" size={50} fill={color[1]} />
          </Surface>
          <span>{dataKey[1]}</span>
          <FootNoteLink index={3} />
        </div>
      )
  }

export default customLegend
