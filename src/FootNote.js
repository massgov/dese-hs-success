import React from 'react'
import './FootNote.css'
import { animatePageScroll } from './scroll'

class FootNote extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      const {children, i} = this.props
      return(
        <li id={`footnotemsg${i}`} onClick={() => animatePageScroll(i,70, `#footnoteref${i}`)}>
          <span>{children} </span>
          <a><i className="glyphicon glyphicon-arrow-up" alt="back to top"/></a>
        </li>
      )
    }
  }

class FootNotes extends React.Component {
  render(){
    return(
      <div className="sources-section">
      <div className="container">
          <h1 id="footnote-label" className="sr-only">Footnotes</h1>
          <ol>
            <FootNote i={1}><a href="http://www.pbs.org/wgbh/frontline/article/by-the-numbers-dropping-out-of-high-school" target="_blank">Front line article By The Numbers Dropping Out of High School</a></FootNote>
            <FootNote i={2}><a href="https://cew.georgetown.edu/cew-reports/americas-divided-recovery" target="_blank">Georgetown Cew Reports Americas Divided Recovery</a></FootNote>
            <FootNote i={3}>Core subjects are English/Language Arts, Math, Science and Social Studies.</FootNote>
            <FootNote i={4}>High attendance = 90% and above attendance rate. Low attendance = below 90% attendance rate, which is considered chronically absence.</FootNote>
          </ol>
      </div>
  </div>
    )
  }

}

export default FootNotes
