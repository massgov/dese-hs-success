import React from 'react'
import './Dwnld.css'

const Dwnld = (props) => {
  const {data} = props
  return(
      <a className="download" href={data}>Download the data powering this visualization</a>
  )
}

export default Dwnld
