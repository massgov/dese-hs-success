import React from 'react'
import './FootNote.css'

const FootNote = () => {
  return(
    <div className="sources-section">
    <div className="container">
        <h1 id="footnote-label" className="sr-only">Footnotes</h1>
        <ol>
            <li id="footnotemsg1"><a href="#footnoteref1">http://www.pbs.org/wgbh/frontline/article/by-the-numbers-dropping-out-of-high-school/</a></li>
            <li id="footnotemsg2"><a href="#footnoteref2">https://cew.georgetown.edu/cew-reports/americas-divided-recovery/</a></li>
            <li id="footnotemsg3"><a href="#footnoteref3">Core subjects are English/Language Arts, Math, Science and Social Studies.</a></li>
            <li id="footnotemsg4"><a href="#footnoteref4">High attendance = 90% and above attendance rate. Low attendance = below 90% attendance rate, which is considered chronically absence.</a></li>
        </ol>
    </div>
</div>
  )
}

export default FootNote
