import React from 'react'
import './DashSelect.css'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Btn from '../Btn'
import { Button } from 'react-bootstrap'


class DashSelect extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: this.props.value,
      value: this.props.value
    }
  };

  render() {
    const {options, handleChange, handleClick, value} = this.props
    const { sticky } = this.props
    var fixed
    if (sticky) { fixed = "navbar-fixed-top"} else {fixed = ""}
    return(
      <div className={`dash-select row ${fixed}`}>
        <Btn handleClick={handleClick} value={'State'} selected={value}>View statewide data</Btn>
        <span> or filter by your district:  </span>
        <Select
            name="select-district"
            value={value}
            options={options}
            onChange={handleChange}
          />
        <Button bsSize="small pull-right" className="backToTop" href="#header" aria-label="Back to top"><i className="glyphicon glyphicon-arrow-up" aria-hidden="true" /></Button>
        <a href="#header" className="backToTop_link pull-right">Back to top</a>
      </div>
    )
  }
}

export default DashSelect
