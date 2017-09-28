import React from 'react'
import FootNoteLink from './FootNoteLink'
import './Intro.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <div className="container target-nav" id="district" name="district">
        <div className="row">
          <div className="col-md-12">
            <h2 className="full-width-alt__title"><span>Explore Your District</span></h2>
            <h3 className="full-width-alt__title"><span>To learn more about the these trends and other information on your school or district:</span></h3>
            <ul className="icon-list">
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <a href="http://profiles.doe.mass.edu/" target="_blank">Massachusetts School and District Profiles</a></li>
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" /> <a href="http://profiles.doe.mass.edu/" target="_blank">Success after High School DART</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Content
