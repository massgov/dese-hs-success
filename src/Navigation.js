import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navigation.css'
import Btn from './Btn'

class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      grade: '9th Grade',
      value: 'navbar-collapse'
    }
  }
  handleClick = (e) =>  {
    e.preventDefault();
    console.log(e.target.innerText);
    this.setState({
      grade : e.target.innerText,
      value : 'navbar-collapse'
    })

  };

  toggleClick = (e) =>  {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({value : 'navbar-expand'})
  };

  render() {
    const { grade, value } = this.state
    return (
        <nav className="container navbar navbar-inverse" role="navigation" id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{grade}</span>
              <Btn handleClick={this.toggleClick} value={'navbar-expand'} selected={value} className="btn-inverse navbar-toggle">Menu <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" /></Btn>
            </div>
            <div className={value}>
              <ul className="nav nav-tabs nav-justified flex-column">
                <li className="nav-item"  onClick={this.handleClick} ><NavLink className="nav-link" to={`/9`}>9th Grade</NavLink></li>
                <li className="nav-item"  onClick={this.handleClick} ><NavLink className="nav-link" to={`/10`}>10th Grade</NavLink></li>
                <li className="nav-item"  onClick={this.handleClick} ><NavLink className="nav-link" to={`/11`}>11th Grade</NavLink></li>
                <li className="nav-item"  onClick={this.handleClick} ><NavLink className="nav-link" to={`/12`}>12th Grade</NavLink></li>
              </ul>
            </div>
        </nav>

    )
  }
}

export default Navigation
