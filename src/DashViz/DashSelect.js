import React from 'react'
import './DashSelect.css'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Btn from '../Btn'
import { Button } from 'react-bootstrap'
import { animatePageScroll } from '../scroll'

const BackToTop = () => {
  return (
    <div className="backToTop">
      <Button className="backToTop_btn pull-right" aria-label="Back to top" onClick={() => animatePageScroll(null,0, `#header`)}><i className="glyphicon glyphicon-arrow-up" aria-hidden="true" /></Button>
      <a className="backToTop_link pull-right" onClick={() => animatePageScroll(null,0, `#header`)}>Back to top</a>
    </div>
  )
}
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
    if (sticky) {fixed = "navbar-fixed-top"} else {fixed = ""}
    return(
      <div className={`dash-select row ${fixed}`}>
        <Btn handleClick={handleClick} value={'State'} selected={value}>View statewide data</Btn>
        <span className="dash-select_text"> or filter by your district: </span>
        <Select
            name="select-district"
            value={value}
            options={options}
            onChange={handleChange}
          />
        {(sticky)? <BackToTop /> : <div></div>}
      </div>
    )
  }
}

export default DashSelect
