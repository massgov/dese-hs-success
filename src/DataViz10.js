/* eslint no-eval: 0 */
import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import {GradeHeader, ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import FootNoteLink from './FootNoteLink'
import Dwnld from './Dwnld'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          blockData1: [],
          blockData2: []
        };

      };

      componentWillMount = () =>  {
              this.fetchData()
          };

          fetchData = () =>  {
                  var _this = this;
                  axios.all([
                          axios.get('/data/10/data.json'),
                      ])
                      .then(axios.spread(function(result) {
                        var data = eval(result.data)
                          _this.setState({
                              blockData1: data[0],
                              blockData2: data[1],
                          });
                      }))
                      .catch((error) => {console.log(error)})

              };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
            const {blockData1, blockData2} = this.state;

              if(blockData1.length===0) {
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container target-nav" id="grade10" name="grade10">
                  <div className="row">
                    <div className="col-md-2">
                        <GradeHeader><span>10th</span> Grade</GradeHeader>
                        </div>
                        <div className="col-md-10">
                        <ChartTitle>Steady Course: <br/>Behavioral habits and on-time graduation</ChartTitle>
                    </div>
                  </div>
                  <div className="row">
                    <div className="grade_line col-md-2"></div>
                    <div className="grade_main col-md-10">
                  <div className="row">
                      <div className="col-md-12">
                        <p>Successfully completing freshman year is a big step students can take to ensure success. In grade 10 they can begin to build or maintain good academic habits. One important strategy to adopt is simple but impactful: be present. Students who miss more than 10% of the school year see a significant drop in 4-year graduation rates. This amounts to  missing more than 18 days for the typical school year,or just two days each month. Additionally, students who have poor behavioral practices and receive a school suspension are more likely to struggle to stay on track academically.</p>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <hr />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 center">
                      <ChartSubTitle>4-year Graduation Rate by Attendance Behavior<FootNoteLink index={4}/></ChartSubTitle>
                      <BlockChart data={blockData1}/>
                      <Dwnld data={'/data/10/data.json'}/>
                    </div>
                    <div className="col-md-6 center">
                      <div className="vertical_space"></div>
                      <ChartSubTitle>4-year Graduation Rate by Suspension Behavior</ChartSubTitle>
                      <BlockChart data={blockData2}/>
                      <Dwnld data={'/data/10/data.json'}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              );
          };

}

export default Data
