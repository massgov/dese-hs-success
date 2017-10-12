import React from 'react'
import './Intro.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <div className="container target-nav" id="district" name="district">
        <div className="row">
          <div className="col-md-12">
            <h2 className="full-width-alt__title"><span>Explore Your District</span></h2>
            <p>Use the tool below to find ABC data specific to your student’s school district, and see how it compares to the rest of the Commonwealth. To learn even more information about the performance of a school or district, explore ESE’s <a href="http://profiles.doe.mass.edu/" target="_blank" rel="noopener noreferrer">School and District Profiles</a> and <a href="http://www.doe.mass.edu/dart/" target="_blank" rel="noopener noreferrer">DART</a> resources.</p>
          </div>
        </div>
      </div>
    );
  };
}

export default Content
