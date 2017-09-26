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


class Navigation extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      value: 'navbar-collapse',
      grade: 9
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
    this.setState({
      value: 'navbar-collapse',
      grade : e.target.getAttribute("value"),
    })
    var h = e.target.getAttribute('href')
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
    return true
  }

  isActive = (id) => {
    const currentSection = scrollToSection()
    const sectionId = id
    return (currentSection==sectionId) ? 'active' : ''
  }

  isScrolledTo = () => {
   const currentSection = scrollToSection()
   return currentSection
 }

  render() {
    const { sticky } = this.props
    const { value, grade } = this.state
    var fixed
    if (sticky) { fixed = "navbar-fixed-top"} else {fixed = ""}

    const grades = ["intro","grade9","grade10","grade11","grade12","conclusion","district"]
    const navItems = grades.map((grade) =>
      <li key={grade} className="nav-item" onClick={this.onNavClick} ><a href={`${grade}`} id={`${grade}1`} className={`nav-link ${this.isActive(grade)}`} value={grade}>{grade}</a></li>
    )
    return (
        <nav className={`container navbar navbar-inverse ${fixed}`} role="navigation" id="navigation">
            <div className="navbar-header">
              <span className="navbar-brand" id="current-section">{this.isScrolledTo()}</span>
              <Btn handleClick={this.toggleClick} value={value} selected={'navbar-expand'} className="btn-inverse navbar-toggle">Menu <i className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" /></Btn>
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
