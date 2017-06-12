import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);

        this.state = {
          Yes: null,
          No: null,
          count_student: null,
          description: null,
          array: []
        };
      };

      render = () =>  {
          const {Yes, No, count_student, description} = this.state;
          var blockPeople = this.makeChart();
          return (
                  <div className="col-md-8">
                    <h3>9th Grade Indicator</h3>
                    <h4>On time graducation rate based on classes failed by counts</h4>
                    <div className="neg-space-col">
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" data-description="passed all classes" value={0}>0</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" data-description="failed at least 1 class" value={1}>1+</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" data-description="failed at least 2 classes" value={2}>2+</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" data-description="failed at least 3 classes" value={3}>3+</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" data-description="failed at least 4 classes" value={4}>4+</Button>
                    </div>
                    <div className="col-md-8">
                      <div className="table_blockchart">
                              <table className="table">
                                <tbody>
                                    <tr>
                                      <th>Graduated on time</th>
                                      <th>Did not graduated on time</th>
                                    </tr>
                                    <tr>
                                      <td className="color_Yes">{Yes}</td>
                                      <td className="color_No">{No}</td>
                                    </tr>
                                </tbody>
                               </table>
                            <div id="legend">
                              <img src="/images/person.svg" width="25px" height="25px" alt="a person icon"/><span>= 1% out of {count_student} students who {description}<p /></span>
                            </div>
                            <div className="block-chart">
                              <div>{blockPeople}</div>
                            </div>
                      </div>
                    </div>
                  </div>
          );
      };

      handleClick = (event) =>  {
        var cur_class_count = event.target.value;
        var i = cur_class_count;
        var dataset = this.props.data;
        var Yes = dataset[i].rate_grad;
        var No = 100-Yes;
        var count_student = dataset[i].count_student;
        var description = event.target.dataset.description;
        this.createArray(Yes, No)
        this.setState({
            Yes: Yes,
            No: No,
            count_student: count_student,
            description: description
        });
      };

      createArray = (Yes, No) => {
        var arr=[];
        for(var y=0; y<Yes; y++){
          arr.push('Yes');
        };
        for(var n=0; n<No; n++){
          arr.push('No');
        };
        this.setState({
            array: arr
        });
      };

      makeChart = () => {
        const {array} = this.state;
        return (array.map(function(person, i){
            return <div className={"block color_" + array[i]} data-index={i} key={"person_" + i}></div>
        }))
      };



}

export default BlockChart
