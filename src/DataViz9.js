/* eslint no-eval: 0 */
import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import GroupedBarChart from './DataViz/GroupedBarChart'
import {GradeHeader, ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import './DataViz.css'
import Dwnld from './Dwnld'

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

              document.addEventListener("scroll", function() {
                    document.activeElement.blur();
                });

              return (
                <div className="container target-nav" id="grade9" name="grade9">
                  <div className="row">
                    <div className="col-md-2">
                        <GradeHeader><span>9th</span> Grade</GradeHeader>
                        </div>
                        <div className="col-md-10">
                        <ChartTitle>Passing Grade: <span>Failing just one course early in high school can set a student back</span></ChartTitle>
                    </div>
                  </div>
                  <div className="row">
                    <div className="grade_line col-md-2"></div>
                    <div className="grade_main col-md-10">
                      <div className="row">
                        <div className="col-md-12">
                          <p>The jump from middle school to high school is a big one. Students face academic challenges, and take on new responsibilities as teenagers. This transition can be hard to adjust to: More students fail and repeat 9th grade more than any other grade in high school. Course failure increases a student’s chance of dropping out later in high school, and decreases the chance of graduating from high school in 4 years.</p>
                          <hr />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 center">
                          <ChartSubTitle>4-Year Graduation Rate by Course Performance</ChartSubTitle>
                          <BlockChart data={blockData}/>
                          <Dwnld data={'/data/9/grade_9_data_viz1.csv'}/>
                        </div>
                        <div className="col-md-6">
                          <div className="vertical_space"></div>
                          <div className='center'>
                              <ChartSubTitle>With each course failed, a student’s chance of graduating is reduced</ChartSubTitle>
                              <GroupedBarChart barData={barData} />
                              <Dwnld data={'/data/9/grade_9_data_viz2.csv'}/>
                           </div>
                        </div>
                      </div>
                  </div>
                   </div>
                </div>
              );
          };

}

export default Data
