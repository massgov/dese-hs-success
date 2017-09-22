import React from 'react'
import './DashSelect.css'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Btn from '../Btn'


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
        <p> or filter by your district:  </p>
        <Select
            name="select-district"
            value={value}
            options={options}
            onChange={handleChange}
          />
      </div>
    )
  }
}

export default DashSelect
