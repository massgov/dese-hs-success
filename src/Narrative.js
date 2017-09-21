import React from 'react'
import FootNoteLink from './FootNoteLink'
import './Narrative.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>
People tend to look at grades and standardized test scores to figure out how a student is doing. This strategy is useful, but it doesn’t give us the whole story. That’s why it’s important to look at factors that help us predict academic performance, on-time high school graduation rates, and even a student’s likelihood to go to and stay in college. We need to look at what really influences grades and test scores.
            </p>
            <p>
Attendance, behavior, and course performance – the ABCs – give us much-needed insight into the success of a student in high school and beyond. By focusing on key metrics during specific time periods of a high school student’s academic career, we’re able to highlight some specific events, warning signs, and keys to success that can impact each student’s life.
            </p>
            <p>
              Job opportunities for people without a college degree are increasingly limited, and that can have a major impact on income and quality of life. U.S. Census data show the average annual income for someone without a high school diploma is $20,241. The average annual income for someone with a Bachelor’s Degree is $56,665
            </p>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-md-12">
            <p>We followed a cohort of students through their 4-year journey in high school and  looked at the how students who met certain indicators compare to those who did not. It highlights that the ABCs do matter:</p>
            <ul>
              <li><i className="glyphicon glyphicon-education list-icon" aria-hidden="true" /> A student who passes all grade 9 courses is more likely to graduate high school in 4 years than a student who fails one or more courses in ninth grade.</li>
              <li><i className="glyphicon glyphicon-education list-icon" aria-hidden="true" /> Students who are chronically absent (miss more than 10% of days) are less likely graduate than those with high attendance.</li>
              <li><i className="glyphicon glyphicon-education list-icon" aria-hidden="true" /> Students who take higher level coursework (higher level math courses or Advanced Placement courses) are more likely to go to and stay in college.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Content
