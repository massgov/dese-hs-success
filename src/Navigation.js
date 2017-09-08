import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navigation.css'
import Btn from './Btn'

class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      value: 'navbar-collapse'
    }
  }

  toggleClick = (e) =>  {
    const value = e.currentTarget.value
    if(value === 'navbar-expand'){
      this.setState({value : 'navbar-collapse'})
    }else{
      this.setState({value : 'navbar-expand'})
    }

  };

  render() {
    const { grade, handleClick, sticky } = this.props
    const { value } = this.state
    var fixed
    if (sticky) { fixed = "navbar-fixed-top"} else {fixed = ""}
    return (
        <nav className={`container navbar navbar-inverse ${fixed}`} role="navigation" id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{grade}th Grade</span>
              <Btn handleClick={this.toggleClick} value={value} selected={'navbar-expand'} className="btn-inverse navbar-toggle">Menu <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" /></Btn>
            </div>
            <div className={value}>
              <ul className="nav nav-tabs nav-justified flex-column">
                <li className="nav-item"  onClick={handleClick} ><a className="nav-link" value={9}>9th Grade</a></li>
                <li className="nav-item"  onClick={handleClick} ><a className="nav-link" value={10}>10th Grade</a></li>
                <li className="nav-item"  onClick={handleClick} ><a className="nav-link" value={11}>11th Grade</a></li>
                <li className="nav-item"  onClick={handleClick} ><a className="nav-link" value={12}>12th Grade</a></li>
              </ul>
            </div>
        </nav>

    )
  }
}

export default Navigation
