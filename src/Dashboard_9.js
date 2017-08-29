import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import GroupedBarChart from './DataViz/GroupedBarChart'
import BarChartText from './DataViz/BarChartText'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import Description from './Description'

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

              if(blockData.length==0) {
                return <div>Loading...</div>
              }

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
                     <p>Core subjects are English/Language Arts, Math, Science and Social Studies</p>
                     <Description>
                       <p>A student who passes all grade 9 courses is 14 times more likely to graduate high school in 4 years. </p>
                       <p>If you have failed a course: find out if there is credit recovery or other options at your school to get back on track.</p>
                     </Description>
                   </div>
                </div>

              );
          };

}

export default Data
