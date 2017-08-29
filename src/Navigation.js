import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navigation.css'

const Navigation = ({}) => {
  return (
    <ul className="nav nav-tabs nav-justified flex-column flex-sm-column">
      <li className="nav-item"><NavLink className="nav-link"  to={`/9`}>9th Grade</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link"         to={`/10`}>10th Grade</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link"         to={`/11`}>11th Grade</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link"         to={`/12`}>12th Grade</NavLink></li>
    </ul>
  )
}

export default Navigation
