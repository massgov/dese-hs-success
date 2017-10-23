import React from 'react'
import './FootNote.css'
import { animatePageScroll } from './scroll'

class FootNote extends React.Component {
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
            <FootNote i={1}>This is an odds ratio comparing the likelihood that an outcome will occur for two different groups of students. In this case we are comparing the likelihood of graduating from high school for students who passed all 9th grade courses, to the likelihood of graduating from high school for students who failed at least one course in 9th grade.  Among students who passed all 9th grade courses, 96% graduated in 4 years, while 4% did not. This means that the odds of graduating for a student who passes all 9th grade courses is 0.96/.04, or 24. Among students who failed at least one course in 9th grade, 64% graduated in 4 years and 36% did not. This means that the odds of graduating is 0.64/0.36 or 1.77, for students who failed at least one 9th grade course.  Comparing the odds, a student who passes all grade nine courses is 14 times more likely to graduate high school than the same odds for student who failed at least one course (24/1.77=13.5 or with rounding, 14).</FootNote>
            <FootNote i={2}>The cohort studied consists of all Massachusetts high school students who entered 9th grade in the fall of 2011.</FootNote>
            <FootNote i={3}>Core subjects are English/Language Arts, Math, Science and Social Studies.</FootNote>
            <FootNote i={4}>High attendance means 90% attendance rate or higher. Low attendance means below 90% attendance rate, which is considered chronically absent.</FootNote>
            <FootNote i={5}>Many colleges give college credit to students scoring a 3 or above on an AP Test. Contact your school counselor for more information.</FootNote>
            <FootNote i={6}>Suspension rate are suppressed when: 1.There are fewer than 6 students reported. 2. There are fewer than 6 students reported who were disciplined. 3.The number of students disciplined and the types of discipline are suppressed.</FootNote>
            <FootNote i={7}>To learn more about suspension data, please visit <a href="https://urldefense.proofpoint.com/v2/url?u=http-3A__www.doe.mass.edu_infoservices_data_guides_ssdr.docx&d=DwMGaQ&c=lDF7oMaPKXpkYvev9V-fVahWL0QWnGCCAfCDz1Bns_w&r=t62XKMRsifGbGA2Q2zL6gAvpLbpWJfyuQlPQQZh4smY&m=k71uqIVWFtabUCD_G9sUqrRgxN0DAdlxLznwnCmNogs&s=hagiYNeKiPfHeA5FAHIbIGIDsRIdRicynryNyJi1jtw&e=">2013-2014 School Safety and Discipline Report Instructions</a>.</FootNote>
            <FootNote i={8}>Many colleges give college credit to students who take International Baccalaureate (IB) courses. Contact your school counselor for more information.</FootNote>
          </ol>
      </div>
  </div>
    )
  }

}

export default FootNotes
