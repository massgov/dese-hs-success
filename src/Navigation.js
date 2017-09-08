import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navigation.css'
import Btn from './Btn'



class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      value: 'navbar-collapse',
      active: '9'
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

  onNavClick = (e) => {
    this.props.handleClick(e);
    this.setState({
      value: 'navbar-collapse',
      active: e.target.getAttribute('value')
    })
  }

  render() {
    const { grade, handleClick, sticky } = this.props
    const { value, active } = this.state
    var fixed
    if (sticky) { fixed = "navbar-fixed-top"} else {fixed = ""}

    const grades = [9,10,11,12]
    const navItems = grades.map((grade) =>
      <li key={grade} className="nav-item" onClick={this.onNavClick} ><a className={`nav-link ${(grade == active) ? 'active' : ''}`} value={grade}>{grade} Grade</a></li>
    )
    return (
        <nav className={`container navbar navbar-inverse ${fixed}`} role="navigation" id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{grade}th Grade</span>
              <Btn handleClick={this.toggleClick} value={value} selected={'navbar-expand'} className="btn-inverse navbar-toggle">Menu <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" /></Btn>
            </div>
            <div className={value}>
              <ul className="nav nav-tabs nav-justified flex-column">
                {navItems}
              </ul>
            </div>
        </nav>

    )
  }
}

export default Navigation
