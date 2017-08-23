import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import GroupedBarChart from './DataViz/GroupedBarChart'
import BarChartText from './DataViz/BarChartText'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'

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
                    <ChartTitle>9th Grade Course Performance</ChartTitle>
                    <BlockChart data={blockData}/>
                  </div>
                  <div className="col-md-6">
                    <div className='center'>
                        <ChartTitle>9th Grade Course Failure</ChartTitle>
                        <ChartSubTitle>4-year Graduation Rate</ChartSubTitle>
                        <GroupedBarChart barData={barData} />
                     </div>
                     <hr/>
                     <p>Passing all courses is important in all grades, and particularly important in 9th grade because … </p>
                     <p>Core subjects are English/Language Arts, Math, Science and Social Studies</p>
                   </div>
                </div>

              );
          };

}

export default Data
