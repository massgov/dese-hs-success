import React from 'react'
import FootNoteLink from './FootNoteLink'
import './Intro.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <div className="full-width-alt">
      <div className="container target-nav" id="intro" name="intro">
        <div className="row">
          <div className="col-md-12">
            <p>As a parent or educator of high school students, you want to give them the best chance to succeed today, tomorrow, and beyond. Letter grades and test scores provide insight into how well students master a subject or class but there are some key factors that heavily influence the letters and numbers that end up on report cards. By exploring data on Attendance, Behavior, and Course Performance - the ABCs - you can gain insight into a student's chances to graduate on time, go to college, or even stay in college.
            </p>
            <p>While the ABCs are important throughout high school, the information below provides a snapshot of how specific ABCs can significantly impact a student’s future at each stage of their high school journey. It might not be surprising that students who pass every class in 9th grade are more likely to graduate on time than their classmates. However, it might be surprising that their odds of graduating on time are 14 times higher.<FootNoteLink index={1}/>
            </p>
            <p>This data story aims to highlight the impact of the ABCs by following a group of students<FootNoteLink index={2}/> from the time they entered 9th grade, to when each left or completed high school. This information can help you setup your students for success or help them get back on track if they're behind.
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  };
}

export default Content
