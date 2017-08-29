import React from 'react'
import Description from '../Description'
import LineChart from './LineChart'
import './DashCard.css'


const DataCard =({Title}) => {
    return(
      <div className="col-md-4">
          <div className="dash-card">
            <h4>{Title}</h4>
            <hr />
            <LineChart />
          </div>
      </div>
    )
}

export default DataCard
