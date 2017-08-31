import React from 'react'
import './DashSelect.css'
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class DashSelect extends React.Component{
  constructor(props, context) {
    super(props, context);
  };
  render() {
    const {options, handleChange, value} = this.props
    return(
      <div className="dash-select">
        <p>Explore your district: </p>
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
