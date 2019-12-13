import React from 'react'
import toPercent from './toPercent'
import './customTooltip.css'

export default class CustomTooltip extends React.Component{
  render(){
    const { active } = this.props;
    if (active) {
      const { payload } = this.props;
      const number = payload[0].payload.label.toLowerCase(),
            total_all = payload[0].payload.count_all.toLocaleString(),
            total_core = payload[1].payload.count_core.toLocaleString(),
            all = toPercent(payload[0].payload['All subjects'], 1),
            core = toPercent(payload[1].payload['Core subjects'], 1),
            color_all = payload[0].color,
            color_core = payload[1].color
      if (number === '1') {
        return (
          <div className="custom-tooltip">
            <h4>Failed {number} course:</h4>
            <hr />
            <p>Among <span style={{color: `${color_all}`}}><b>{total_all}</b></span> students who failed {number} course, <span style={{color: `${color_all}`}}><b>{all}</b></span> graduated in 4 years.</p>
            <p>Among <span style={{color: `${color_core}`}}><b>{total_core}</b></span> students who failed {number} Core course, <span style={{color: `${color_core}`}}><b>{core}</b></span> graduated in 4 years.</p>
          </div>
        )
      }
      return (
        <div className="custom-tooltip">
          <h4>Failed {number} courses:</h4>
          <hr />
          <p>Among <span style={{color: `${color_all}`}}><b>{total_all}</b></span> students who failed {number} courses, <span style={{color: `${color_all}`}}><b>{all}</b></span> graduated in 4 years.</p>
          <p>Among <span style={{color: `${color_core}`}}><b>{total_core}</b></span> students who failed {number} core courses, <span style={{color: `${color_core}`}}><b>{core}</b></span> graduated in 4 years.</p>
        </div>
      );
    }

    return null;
  }
}
