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
                        <p>Getting through freshman year is a big step students can take to ensure success., but In grade 10 is where they should start establishing the right maintain good academic habits. One of the most important behaviors they need to adopt is simple but impactful: being present. Students who miss more than 10% of the school year, or just two days each month, see a significant drop in 4 year graduation rates. Further, individuals who receive a suspension are more likely to be struggling to stay on track at school. Their risk of failing to to graduate high school in 4 years is not surprisingly elevated.</p>
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
