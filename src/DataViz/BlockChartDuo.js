import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);

        this.state = {
          Yes: 96,
          No: 4,
          count: 54038,
          array: [],
          selected: '0',
          indicator: '',
          metric: ''
        };
      };

      componentDidMount = () => {
        const {Yes, No} = this.state;
        this.createArray(Yes, No)
      };

      isActive = (value) => {
        return 'btn '+((value===this.state.selected) ?'active':'default');
      };
      render = () =>  {
          const {count, selected, indicator, metric} = this.state

          // const indicator = ["Math", "Science"]
          // const metric = ["Completed", "Did Not Complete"]
          var blockPeople = this.makeChart()
          return (
            <div>
              <div className="col-md-4">
                <hr />
                <p>Select an indicator:</p>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} value={0}>Math</Button>
                      <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} value={1}>Science</Button>
                <hr />
                <p>Select an outcome:</p>
                  <div className="radio">
                    <label><input type="radio" name="optradio"/>On-time Graduation</label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" name="optradio"/>College Enrollment</label>
                  </div>
                  <div className="radio">
                    <label><input type="radio" name="optradio"/>College Persistence</label>
                  </div>
                <div id="legend">
                  <img src="/images/person.svg" width="25px" height="25px" alt="a person icon"/><span>= 1% out of {count} students who {}<p /></span>
                </div>
              </div>
                    <div className="col-md-8">
                      <div className="col-md-6 left">
                        <h3>{metric+ ' '+indicator}</h3>
                        <h4>Total number of students: {count} </h4>
                        <hr />
                        <div className="block-chart">
                          {blockPeople}
                        </div>
                      </div>
                      <div className="col-md-6 right">
                        <h3>{metric+ ' '+indicator}</h3>
                        <h4>Total number of students: {count} </h4>
                        <hr />
                          <div className="block-chart">
                            {blockPeople}
                          </div>
                      </div>
                </div>
            </div>


          );
      };

      handleClick = (event) =>  {
        var target = event.target;
        var value = event.target.value;
        var data = this.props.data[value];
        this.getData(target, data, value)
      };

      getData = (target, dataset,i) => {
        var Yes = dataset[i].rate_grad;
        var No = 100-Yes;
        var count = dataset[i].count;
        var indicator = dataset[i].indicator;
        var metric = dataset[i].metric;
        this.createArray(Yes, No)
        this.setState({
            Yes: Yes,
            No: No,
            count: count,
            selected: i,
            indicator: indicator,
            metric: metric

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
