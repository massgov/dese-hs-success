import React from 'react'
import './customTooltip.css'

export default class CustomTooltip extends React.Component{
  render(){
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      const number = payload[0].payload.label.toLowerCase(),
            total_all = payload[0].payload.count_all,
            total_core = payload[1].payload.count_core,
            all = payload[0].payload['All subjects']*100,
            core = payload[1].payload['Core subjects']*100,
            color_all = payload[0].color,
            color_core = payload[1].color

      return (
        <div className="custom-tooltip">
          <h4>Failed {number} courses:</h4>
          <hr />
          <p style={{color: `${color_all}`}}>Among <b>{total_all}</b> students who failed {number} courses, <b>{all}%</b> graduated in 4 years</p>
          <p style={{color: `${color_core}`}}>Among <b>{total_core}</b> students who failed {number} core courses, <b>{core}%</b> graduated in 4 years</p>

        </div>
      );
    }

    return null;
  }
}
