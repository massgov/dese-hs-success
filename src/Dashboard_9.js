import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import GroupedBarChart from './DataViz/GroupedBarChart'
import BarChartText from './DataViz/BarChartText'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          blockData: [],
          barData: []
        };
      };

      componentWillMount = () =>  {
              this.fetchData()
          };

      fetchData = () =>  {
              var _this = this;
              axios.all([
                      axios.get('/data' + this.props.match.url +'/data.json'),
                  ])
                  .then(axios.spread(function(result) {
                    var data = eval(result.data)
                      _this.setState({
                          blockData: data[0],
                          barData: data[1],
                      });
                  }))
                  .catch((error) => {console.log(error)})

          };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
              const {blockData, barData} = this.state;
              return (
                <div>
                  <div className="col-md-6 center">
                    <h3>On-Time Graduation Rate by Number of Courses Failed</h3>
                    <BlockChart data={blockData}/>
                  </div>
                  <div className="col-md-6">
                    <div className='center'>
                        <h3>On-Time Graduation Rate by Number of Core Courses Failed</h3>
                        <h4>The gap in on-time graduation widens based on the number and type of courses failed in the 9th grade</h4>
                        <GroupedBarChart barData={barData} />
                     </div>
                    <BarChartText barData={barData} />
                   </div>
                </div>

              );
          };

}

export default Data
