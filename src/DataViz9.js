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
                        <ChartTitle> Passing Grade: Failing just one course early can set a student back</ChartTitle>
                    </div>
                    <div className="col-md-12">
                      <p>The transition from middle school to high school is a big one, perhaps bigger than appears at first blush: Not only do students’ academic workloads increase, but simultaneously, so does their independence and responsibility. More students fail ninth grade than any other grade in high school, and a disproportionate number of students who are held back in ninth grade subsequently drop out. A student who passes all grade 9 courses is 14 times more likely to graduate high school in 4 years. Below, explore in detail the link between failing a course in ninth grade and on-time graduation.</p>
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
                </div>

              );
          };

}

export default Data
