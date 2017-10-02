import React from 'react'
import './Intro.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <div className="container target-nav" id="district" name="district">
        <div className="row">
          <div className="col-md-12">
            <div className="dist__title"><h2>Explore Your District</h2></div>
            <ul className="icon-list">
              <li><i className="glyphicon glyphicon-arrow-right list-icon" aria-hidden="true" />To learn more about the these trends and other information on your school or district: <br />
              <a href="http://profiles.doe.mass.edu/" target="_blank" rel="noopener noreferrer">Massachusetts School and District Profiles</a>, <a href="http://profiles.doe.mass.edu/" target="_blank" rel="noopener noreferrer">Success after High School DART</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default Content
