import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navigation.css'

class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      grade: '9th Grade'
    }
  }
  render() {
    return (
        <nav className="container navbar navbar-inverse" role="navigation" id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{this.state.grade}</span>
              <button type="button" className="btn btn-inverse navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">Menu <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" />
              </button>
            </div>
            <div className="navbar-collapse navbar-main-collapse">
              <ul className="nav nav-tabs nav-justified flex-column">
                <li className="nav-item"><NavLink className="nav-link"  to={`/9`}>9th Grade</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link"         to={`/10`}>10th Grade</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link"         to={`/11`}>11th Grade</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link"         to={`/12`}>12th Grade</NavLink></li>
              </ul>
            </div>
        </nav>

    )
  }
}

export default Navigation
