import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import GroupedBarChart from './DataViz/GroupedBarChart'
import BarChartText from './DataViz/BarChartText'
import {GradeHeader, ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import $ from 'jquery'
import {scrollToSection} from './Navigation'
import './DataViz.css'

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

              if( blockData.length === 0 ) {
                return <div className="container">Loading...</div>
              }


              $(window).scroll(scrollToSection)

              return (
                <div className="container target-grade" id="grade9" name="grade9">
                  <div className="row">
                    <div className="col-md-12 center">
                        <GradeHeader>9th Grade</GradeHeader>
                        <ChartTitle>Passing Grade: Failing just one course early in high school can set a student back</ChartTitle>
                    </div>
                    <div className="col-md-12">
                      <p>The jump from middle school to high school is a big one. Students face greater academic challenges, and have social hurdles and new responsibilities to deal with. This transition can be hard to adjust to, which is one of the reasons why more students fail courses in their freshman year than any other in high school. This often leads to higher dropout rates and This increases the chances a student may be retained or drop out later in high school, and decreases the chances a student will graduate from high school in four 4 years.</p>
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
                        <ChartSubTitle>With each course failed, a student’s chance of graduating is reduced</ChartSubTitle>
                        <GroupedBarChart barData={barData} />
                     </div>
                     </div>
                   </div>
                </div>

              );
          };

}

export default Data
