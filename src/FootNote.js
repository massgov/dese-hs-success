import React from 'react'
import './FootNote.css'

const FootNote = () => {
  return(
    <div className="sources-section">
    <div className="container">
        <h1 id="footnote-label" className="sr-only">Footnotes</h1>
        <ol>
            <li id="footnote-1">http://www.pbs.org/wgbh/frontline/article/by-the-numbers-dropping-out-of-high-school/</li>
            <li id="footnote-2">https://cew.georgetown.edu/cew-reports/americas-divided-recovery/</li>
            <li id="footnote-3">Core subjects are English/Language Arts, Math, Science and Social Studies.</li>
            <li id="footnote-4">High attendance = 90% and above attendance rate. Low attendance = below 90% attendance rate, which is considered chronically absence.</li>
        </ol>
    </div>
</div>
  )
}

export default FootNote
