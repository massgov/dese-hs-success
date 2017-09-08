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
                      axios.get('/data/9/data.json'),
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
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 center">
                        <ChartTitle>*9th Grade Section Header*</ChartTitle>
                        <hr />
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-6 center">
                    <ChartSubTitle>4-Year Graduation Rate by Course Performance</ChartSubTitle>
                    <BlockChart data={blockData}/>
                  </div>
                  <div className="col-md-6">
                    <div className='center'>
                        <ChartSubTitle>4-year Graduation Rate by Course Failure</ChartSubTitle>
                        <GroupedBarChart barData={barData} />
                     </div>
                     <hr/>
                     </div>
                   </div>
                   <div className="row">
                     <Description>
                       <p>A student who passes all grade 9 courses is 14 times more likely to graduate high school in 4 years.</p>
                       <p>If you have failed a course: find out if there is credit recovery or other options at your school to get back on track.</p>
                     </Description>
                   </div>
                </div>

              );
          };

}

export default Data
