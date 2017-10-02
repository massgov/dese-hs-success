import React from 'react'
import './Navigation.css'
import Btn from './Btn'
import _ from 'lodash'
import { scrollToSection, animatePageScroll } from './scroll'

class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      value: 'navbar-collapse',
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
    e.preventDefault();
    const target = e.target
    this.setState({
      value: 'navbar-collapse',
    })
    animatePageScroll(target, 0,`#${target.getAttribute('href')}`)
    return true
  }


  isActive = (id) => {
    var currentSection = scrollToSection('.target-nav')
    return (currentSection===id) ? 'active' : ''
  }

  isScrolledTo = () => {
   const currentSection = scrollToSection()
   return currentSection
 }

  render() {
    const { sticky } = this.props
    const { value } = this.state
    var fixed
    if (sticky) { fixed = "navbar-fixed-top"} else {fixed = ""}

    const targets = {"intro": ["intro", "Intro"],"grade9":["grade9","9th Grade"],"grade10":["grade10","10th Grade"],"grade11":["grade11","11th Grade"],"grade12":["grade12", "12th Grade"],"conclusion":["conclusion", "Get on Track"],"district":["district", "Explore Your District"]}
    const navItems = _.map(targets, (id) =>
      <li key={id[0]} className="nav-item" onClick={this.onNavClick} ><a href={`${id[0]}`} className={`nav-link ${this.isActive(id[0])}`} value={id[0]}>{id[1]}</a></li>
    )
    const currentSectionName = () => {
      const id = this.isScrolledTo()
      if (id) return targets[id][1]

    }
    return (
        <nav className={`navbar navbar-inverse ${fixed}`} id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{currentSectionName()}</span>
              <Btn handleClick={this.toggleClick} value={value} selected={'navbar-expand'} className="btn-inverse navbar-toggle">Menu <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" /></Btn>
            </div>
            <div className={value}>
              <ul className="nav nav-tabs">
                {navItems}
              </ul>
            </div>
        </nav>

    )
  }
}

export default Navigation
