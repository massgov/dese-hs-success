import React from 'react'
import './FootNote.css'
import { Glyphicon, Glyphicon2, Glyphicon3 } from 'react-bootstrap'

const FootNote = () => {
  return(
    <div className="sources-section">
    <div className="container">
        <h1 id="footnote-label" className="sr-only">Footnotes</h1>
        <ol>
            <li id="footnotemsg1"><p>http://www.pbs.org/wgbh/frontline/article/by-the-numbers-dropping-out-of-high-school/ <a href="#footnoteref1"><i className="glyphicon glyphicon-arrow-up" aria-hidden="true" /></a></p></li>
            <li id="footnotemsg2"><p>https://cew.georgetown.edu/cew-reports/americas-divided-recovery/ <a href="#footnoteref2"><i className="glyphicon glyphicon-arrow-up" aria-hidden="true" /></a></p></li>
            <li id="footnotemsg3"><p>Core subjects are English/Language Arts, Math, Science and Social Studies. <a href="#footnoteref3"><i className="glyphicon glyphicon-arrow-up" aria-hidden="true" /></a></p></li>
            <li id="footnotemsg4"><span>High attendance = 90% and above attendance rate. Low attendance = below 90% attendance rate, which is considered chronically absence.</span> <a href="#footnoteref4"><i className="glyphicon glyphicon-arrow-up" aria-hidden="true" /></a></li>
        </ol>
    </div>
</div>
  )
}

export default FootNote
