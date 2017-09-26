import React from 'react'
import './Navigation.css'
import Btn from './Btn'
import $ from 'jquery'

export const scrollToSection = () => {
  var $id
  $('.target-nav').each(function() {
      if ($(window).scrollTop() >= ($(this).offset().top) - 100) {
          $id = $(this).attr('id');
      }
  });
  return ($id)
}

export const animatePageScroll = (target) => {
    var h = target.getAttribute('href')
    var top = document.getElementById(h).offsetTop;
    $('html, body').animate({
        scrollTop: top
    }, 500);
  }

class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      value: 'navbar-collapse',
      currentId: ''
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
      currentId : target.getAttribute("value"),
    })
    animatePageScroll(target)
    return true
  }


  isActive = (id) => {
    var currentSection = scrollToSection()
    return (currentSection===id) ? 'active' : ''
  }

  isScrolledTo = () => {
   const currentSection = scrollToSection()
   return currentSection
 }

  render() {
    const { sticky } = this.props
    const { value, currentId } = this.state
    var fixed
    if (sticky) { fixed = "navbar-fixed-top"} else {fixed = ""}

    const targets = [["intro", "Intro"],["grade9","9th Grade"],["grade10","10th Grade"],["grade11","11th Grade"],["grade12", "12th Grade"],["conclusion", "Conclusion"],["district", "Explore Your District"]]
    const navItems = targets.map((id) =>
      <li key={id[0]} className="nav-item" onClick={this.onNavClick} ><a href={`${id[0]}`} id={`${id[0]}1`} className={`nav-link ${this.isActive(id[0])}`} value={id[0]}>{id[1]}</a></li>
    )
    return (
        <nav className={`navbar navbar-inverse ${fixed}`} role="navigation" id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{this.isScrolledTo()}</span>
              <Btn handleClick={this.toggleClick} value={value} selected={'navbar-expand'} className="btn-inverse navbar-toggle">Menu <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" /></Btn>
            </div>
            <div className={value}>
              <ul className="nav nav-tabs flex-column">
                {navItems}
              </ul>
            </div>
        </nav>

    )
  }
}

export default Navigation
