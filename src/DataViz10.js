import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import {GradeHeader, ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import FootNoteLink from './FootNoteLink'

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

              if(blockData1.length==0) {
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 center">
                      <GradeHeader>10th Grade Steady Course</GradeHeader>
                        <ChartTitle>Behavioral habits and on-time graduation</ChartTitle>
                    </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                        <p>A student’s success in school begins by engaging them and making sure they come to school regularly. That may seem obvious. What’s less obvious is that the consequences of low attendance are serious for all children and for the community, not just the students who miss school. Research shows that missing 10 percent of the school, or about 18 days in most school districts, negatively affects a student’s academic performance. That’s just two days a month. This is known as chronic absence. Further, individuals who receive a suspension are more likely to be struggling to stay on track at school. Their risk of failing to finish high school is not surprisingly elevated. Below, explore in more detail how attendance and suspension impact the likelihood of a student to graduate on-time.</p>
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
                    </div>
                    <div className="col-md-6 center">
                      <ChartSubTitle>4-year Graduation Rate by Suspension Behavior</ChartSubTitle>
                      <BlockChart data={blockData2}/>
                    </div>
                  </div>
                </div>

              );
          };

}

export default Data
