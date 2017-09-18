import React from 'react'
import Btn from '../Btn'
import BtnGroup from '../BtnGroup'
import './BlockChart.css'
import PersonLegend from './PersonLegend'
import BlockTable from './BlockTable'
import BlockCount from './BlockCount'
import { ChartSubTitle } from './ChartTitle'
import Description from '../Description'
import BlockCountLegend from './BlockCountLegend'

class BlockChart extends React.Component{
      constructor(props, context) {
        super(props, context);
        const {Yes_1, Yes_2, No_1, No_2, description, array} = this.getData('0');
        this.state = {
          selected: 0,
          Yes_1, Yes_2, No_1, No_2, description, array
        };
      };


      render = () =>  {
          const {Yes_1, Yes_2, No_1, No_2, description, array, selected} = this.state;
          const uniqueArray = array.filter(function(item, pos){
            return array.indexOf(item)== pos;
          });
          return(
                <div>
                  <div className="row">
                    <div className="col-md-12 center">
                        <BtnGroup>
                          <Btn handleClick={this.handleClick} value={0} selected={selected}>1. Passed and Not Passed</Btn>
                          <Btn handleClick={this.handleClick} value={1} selected={selected}>2. College Enrollment</Btn>
                          <Btn handleClick={this.handleClick} value={2} selected={selected}>3. College Persistent</Btn>
                        </BtnGroup>
                    </div>
                  </div>
                    <div className="row">
                    <div className="col-md-12">
                          <Description>{description}</Description>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                          <BlockCount array = {array} />
                          <hr />
                          <BlockCountLegend legendArray={uniqueArray} selected={selected}/>
                    </div>
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
            Yes_1: getData.Yes_1,
            Yes_2: getData.Yes_2,
            No_1: getData.No_1,
            No_2: getData.No_2,
            description: getData.description,
            selected: selected,
            array: getData.array
        });
      };

      getData = (selected) => {
        const data = this.props.data[selected];
        const Yes_1 = data.count_pass_hightlight;
        const Yes_2 = data.count_pass-Yes_1;
        const No_1 = data.count_fail_hightlight;
        const No_2 = data.count_fail-No_1;
        const description = data.description;
        var array = this.createArray(Yes_1, Yes_2, No_1, No_2)
        return { Yes_1, Yes_2, No_1, No_2, description, array}
      }

      createArray = (Yes_1, Yes_2, No_1, No_2) => {
        var arr=[];
        for(var y=0; y<Yes_1; y++){
          arr.push('Yes_1');
        };
        for(var y=0; y<Yes_2; y++){
          arr.push('Yes_2');
        };
        for(var n=0; n<No_2; n++){
          arr.push('No_2');
        };
        for(var n=0; n<No_1; n++){
          arr.push('No_1');
        };
        return arr
      };

}

export default BlockChart
