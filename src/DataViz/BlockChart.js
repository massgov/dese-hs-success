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
        const metric = [this.props.data[0].metric, this.props.data[1].metric];
        const {Yes, No, count, description, array} = this.getData('0');
        this.state = {
          selected: '0',
          Yes, No, count, description, array, metric
        };
      };

      isActive = (value) => {
        return 'btn '+((value===this.state.selected) ?'active':'default');
      };
      render = () =>  {
          const {Yes, No, count, description, array, metric} = this.state;
          console.log(metric)
          return (
                  <div>
                          <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('0')}`} value={0}>{metric[0]}</Button>
                          <Button onClick={this.handleClick} className={`btn btn-primary + ${this.isActive('1')}`} value={1}>{metric[1]}</Button>
                      <div className="table_blockchart">
                          <BlockTable Yes={Yes} No={No} />
                          <Block array = {array} />
                          <PersonLegend>1% out of <b>{count}</b> students who <b>{description}</b></PersonLegend>
                      </div>
                  </div>
          );
      };

      handleClick = (event) =>  {
        var selected = event.target.value;
        this.setData(selected)
      };

      setData = (selected) => {
        const getData = this.getData(selected);
        this.setState({
            Yes: getData.Yes,
            No: getData.No,
            count: getData.count,
            description: getData.description,
            selected: selected,
            array: getData.array
        });
      };

      getData = (selected) => {
        const data = this.props.data;
        const Yes = data[selected].rate;
        const No = 100-Yes;
        const count = data[selected].count;
        const description = data[selected].description;
        var array = this.createArray(Yes, No)
        return { Yes, No, count, description, array}
      }

      createArray = (Yes, No) => {
        var arr=[];
        for(var y=0; y<Yes; y++){
          arr.push('Yes');
        };
        for(var n=0; n<No; n++){
          arr.push('No');
        };
        return arr
      };

}

export default BlockChart
