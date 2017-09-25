import React from 'react'
import FootNoteLink from './FootNoteLink'
// import './Intro.css'

class Conclusion extends React.Component{

  render = () =>  {
    return (
      <div className="container"  id="conclusion" name="conclusion">
        <div className="row">
          <div className="col-md-12">
            <h2>Conclusion</h2>
            <p>
              Influential, positive adults are important points of contact for students. Talk to the students in your life about their goals and the importance of the ABC’s: Attendance, Behavior and Courses in high school. Hold high expectations for students, let them know when they’re doing well, and talk about how to be even more successful next time. For tips on guiding these conversations for elementary students through high school and for other resources, visit <a href="http://futurereadyma.org/" target="_blank">Future Ready</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-md-12">
            <h3>What else can you do?</h3>
            <ul>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> If you have failed a course, there are ways to get back on track. Ask a school counselor about credit recovery or other options at your school to get back on track.</li>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> Schools interested in learning more about supporting ninth grade students check out: <a href="https://www2.ed.gov/programs/slcp/ninthgradecounts/ninthgradecountsguide.pdf" target="_blank">9th grade counts</a></li>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> Need help improving attendance? <a href="http://www.attendanceworks.org/about/what-can-i-do/parents/" target="_blank">Attendance matters</a></li>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> Want to learn about taking rigorous courses? <a href="http://www.doe.mass.edu/ccr/masscore/MassCoreStudents.pdf" target="_blank">Masscore</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Conclusion
