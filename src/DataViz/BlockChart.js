import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'
import $ from 'jquery'




class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);

        this.state = {
          Yes: null,
          No: null,
          count_student: null,
          count_class: null,
          array: []
        };
      };

      handleClick = (event) =>  {
        var cur_class_count = event.target.value;
        var dataset = this.props.data;
        var i = cur_class_count;
        var Yes = dataset[i].rate_grad;
        var No = 100-Yes;
        var count_student = dataset[i].count_student;
        this.createArray()
        this.setState({
            Yes: Yes,
            No: No,
            count_student: count_student,
            count_class: i,
        });
      };

      createArray = (list) => {
        var arr=[];
        for(var y=0; y<this.state.Yes; y++){
          arr.push('Yes');
        };
        for(var n=0; n<this.state.No; n++){
          arr.push('No');
        };
        this.setState({
            array: arr
        });
      };

      makeChart = () => {
        const {array} = this.state;
        return (array.map(function(person, i){
            return <div className={"block td_" + array[i]} data-index={i} key={"person_" + i}></div>
        }))
      };

      render = () =>  {
          const {Yes, No, count_student, count_class} = this.state;
          var blockPeople = this.makeChart();
          return (
            <div className="col-md-8">
                    <h3>9th Grade Indicator</h3>
                    <h4>On time graducation rate based on classes failed by counts</h4>
                    <div className="neg-space-col">
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" value={0}>0</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" value={1}>1+</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" value={2}>2+</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" value={3}>3+</Button>
                      <Button onClick={this.handleClick} className="btn btn-primary btn-class btn-sm" value={4}>4+</Button>
                    </div>
                    <div className="col-md-8">
                      <div className="people-blocks">
                        <div className="group" />
                        <div id="table_substance">
                          <table className="table" id="table_substance">
                            <tbody>
                                <tr>
                                  <th>Graduated on time</th>
                                  <th>Did not graduated on time</th>
                                </tr>
                                <tr>
                                  <td className="td_Yes">{Yes}</td>
                                  <td className="td_No">{No}</td>
                                </tr>
                            </tbody>
                           </table>
                        </div>
                        <div id="legend">
                          <img src="/images/person.svg" width="25px" height="25px" alt="a person icon"/><span>= 1% out of
                            <span id="count_student"> {count_student}</span> students who failed <span id="count_class"> {count_class}</span> classes<p />
                          </span></div>
                        <div className="block-chart" id="people" >
                          <div>{blockPeople}</div>
                        </div>
                      </div>
                    </div>
                  </div>
          );
      };

}

export default BlockChart
