import React from 'react'
import './FootNote.css'

const FootNote = () => {
  return(
    <div className="sources-section">
    <div className="container">
        <h1 id="footnote-label" className="sr-only">Footnotes</h1>
        <ol>
            <li id="footnote-1">The confirmed opioid-related death rate was suppressed in towns that were detected as strong outliers using Tukey’s outlier filter. All values that fell outside of the upperbound, calculated using three times the interquartile range, were considered strong outliers. Rates for Provincetown, Cummington, and Granville were suppressed from 2001 to 2005. Rates for Aquinnah, New Ashford, and Tyringham were suppressed from 2011 to 2015.</li>
            <li id="footnote-2">In both 2014 and 2015, there was one death of a Massachusetts resident whose city/town of residence was not known.</li>
            <li id="footnote-3">Please note that data for 2000-2013 have been updated following a review of cases that did not receive an official cause of death at the time the file was closed. Death data for 2014-2015 are preliminary and subject to updates. Case reviews of deaths are evaluated and updated on an ongoing basis. A large number of death certificates have yet to be assigned final cause-of-death codes. These counts are based on the estimates rather than confirmed cases.</li>
            <li id="footnote-4">Cases were defined using the International Classification of Disease, Tenth Revision (ICD-10) codes for mortality. The following codes were selected from the underlying cause of death field to identify poisonings/overdoses: X40-X49, Y10-Y19. All multiple cause of death fields were then used to identify an opioid-related death: T40.0, T40.1, T40.2, T40.3, T40.4, and T40.6.</li>
        </ol>
    </div>
</div>
  )
}

export default FootNote
