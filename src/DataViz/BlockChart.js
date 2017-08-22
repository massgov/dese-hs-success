import React from 'react'
import { Button } from 'react-bootstrap'
import './BlockChart.css'
import PersonLegend from './PersonLegend'
import BlockTable from './BlockTable'
import Block from './Block'
import { ChartSubTitle } from './ChartTitle'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);

        this.state = {
          Yes: 96,
          No: 4,
          count_student: 54038,
          description: "passed all classes",
          array: [],
          selected: '0'
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
          const {Yes, No, count_student, description, array} = this.state;

          return (
                  <div>
                          <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} data-description="passed all classes" value={0}>Passed All</Button>
                          <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} data-description="failed at least 1 class" value={1}>Failed Any</Button>
                          <ChartSubTitle>4-Year Graduation Rate</ChartSubTitle>
                      <div className="table_blockchart">
                          <BlockTable Yes={Yes} No={No} />
                          <Block array = {array} />
                          <PersonLegend>1% out of <b>{count_student}</b> students who <b>{description}</b></PersonLegend>
                      </div>
                  </div>
          );
      };

      handleClick = (event) =>  {
        var target = event.target;
        var value = event.target.value;
        var data = this.props.data;
        this.getData(target, data, value)
      };

      getData = (target, dataset,i) => {
        var Yes = dataset[i].rate_grad;
        var No = 100-Yes;
        var count_student = dataset[i].count_student;
        var description = target.dataset.description;
        this.createArray(Yes, No)
        this.setState({
            Yes: Yes,
            No: No,
            count_student: count_student,
            description: description,
            selected: i
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





}

export default BlockChart
