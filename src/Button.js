import React from 'react'
import { Button } from 'react-bootstrap'
import './Button.css'

const Btn = ({value, selected, handleClick, children}) => {
  const isActive = (value, selected) => {
    return ((value===selected) ?'active':'default');
  };
  return(
      <Button onClick={handleClick} className={`btn btn-primary ${isActive(value, selected)}`} value={value}>{children}</Button>
  )
}

export default Btn
