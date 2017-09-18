import React from 'react'
// import { Button } from 'react-bootstrap'
import './Btn.css'

const Btn = (props) => {
  const {value, selected, handleClick, children, className} = props
  var passedClass;
  if(className) {
    passedClass = className
  } else {
    passedClass = 'btn-primary'
  }
  const isActive = (value, selected) => {
    return ((value==selected) ?'active':'default');
  };
  return(
      <button onClick={handleClick} className={`btn ${passedClass} ${isActive(value, selected)}`} value={value} type="button">{children}</button>
  )
}

export default Btn
