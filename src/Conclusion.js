import React from 'react'
import './Intro.css'

class Conclusion extends React.Component{

  render = () =>  {
    return (
      <div className="full-width-alt">
      <div className="container target-nav"  id="conclusion" name="conclusion">
        <div className="row">
          <div className="col-md-12">
            <h2 className="full-width-alt__title"><span>Get On Track</span></h2>
            <p>Students benefit when they have engaged adults in their lives who help them stay positive and focus on goals. Start the conversation with the students in your life about their plans and dreams, and let them know how the ABCs can influence their futures. For tips on guiding these conversations for elementary, middle, and high school students visit <a href="http://futurereadyma.org/" target="_blank" rel="noopener noreferrer">Future Ready</a>. For more information on the ways parents and educators can help their students succeed:
            </p>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-md-12">
            <ul className="icon-list">
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <strong>Get off to a good start</strong> — Prepare 9th graders for the transition to high school by encouraging your school district to follow the <a href="https://www2.ed.gov/programs/slcp/ninthgradecounts/ninthgradecountsguide.pdf" target="_blank" rel="noopener noreferrer">Ninth Grade Counts guide</a>.</li>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <strong>Recover credits from failed courses</strong> — Discuss credit recovery options with school counselors to get your student back on track.</li>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <strong>Boost attendance</strong> — Use tips from <a href="http://www.attendanceworks.org/about/what-can-i-do/parents/" target="_blank" rel="noopener noreferrer">Attendance Works</a> to help students develop good attendance habits.</li>
               <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <strong>Watch for warning signs</strong> — Absentee rates of 10% or higher and behavioral challenges leading to suspensions may be signs of larger life problems your student is facing. ESE’s <a href="https://www2.ed.gov/policy/gen/guid/school-discipline/rethink-discipline-resource-guide-supt-action.pdf" target="_blank" rel="noopener noreferrer">Rethinking Discipline Initiative</a> provides resources to schools and districts to reduce out of school suspensions and promote a positive school climate.</li>
               <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <strong>Take rigorous courses</strong> — Learn about the Commonwealth’s <a href="http://www.doe.mass.edu/ccr/masscore/" target="_blank" rel="noopener noreferrer">MassCore course recommendations</a>. MassCore is a roadmap for students to take rigorous courses such as 4 years of math, and advanced courses such as AP, Capstone, or work-based learning. MassCore prepares students for success in college.</li>
               <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <strong>Learn about your school district</strong> — Explore data specific to your school district in the section below.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  };
}

export default Conclusion
