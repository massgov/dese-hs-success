import React from 'react'
import FootNoteLink from './FootNoteLink'
import './Narrative.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              Education is a key component in building a young person’s economic future. According to the US Census, on average a high school dropout earns $20,241 annually, compared to $30,645 a year for the typical high school grad and $56,665 for someone with a Bachelor’s Degree.<FootNoteLink index={1} />   College not only helps students make more money, it can provide them more opportunity. There are increasingly fewer job opportunities for workers without any postsecondary degree and even less for high school dropouts.<FootNoteLink index={2} />
            </p>
          </div>
          <div className="col-md-6">
            <p>Getting through high school and preparing for college and careers can be challenging. There are some things students, families and schools can focus on to support a student’s success in  high school and beyond. Research shows that the ABC’s - Attendance, Behavior & Course Performance – are powerful predictors of success in high school and later. Help ensure that your students show up, are engaged in their school work and preparing for their future.</p>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-md-12">
            <p>We followed a cohort of students through their 4-year journey in high school and  looked at the how students who met certain indicators compare to those who did not. It highlights that the ABCs do matter:</p>
            <ul>
              <li><i className="glyphicon glyphicon-education color-primary" aria-hidden="true" /> A student who passes all grade 9 courses is more likely to graduate high school in 4 years than a student who fails one or more courses in ninth grade.</li>
              <li><i className="glyphicon glyphicon-education color-primary" aria-hidden="true" /> Students who are chronically absent (miss more than 10% of days) are less likely graduate than those with high attendance.</li>
              <li><i className="glyphicon glyphicon-education color-primary" aria-hidden="true" /> Students who take higher level coursework (higher level math courses or Advanced Placement courses) are more likely to go to and stay in college.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Content
