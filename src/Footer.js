import React from 'react'
import './Footer.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <footer>
        <div className="container">
            <div className="col-xs-12 col-md-6">
                    <div className="logo">
                      <img src="/images/DESE-logo.png" height='50px' className="img-responsive" alt="DESE logo" />
                    </div>
                    <address>
                      <strong>Massachusetts Department of Elementary & Secondary Education</strong>
                      <br />
                      <i className="glyphicon glyphicon-map-marker" aria-hidden="true" /> 75 Pleasant St, Malden, MA 02148
                      <br />
                      <i className="glyphicon glyphicon-earphone" aria-hidden="true" /><a href="tel:(781) 338-3000" aria-label="Massachusetts Department of Elementary & Secondary Education phone number"> (781) 338-3000</a>
                      <br />
                    </address>
            </div>
        </div>

      </footer>

    );
  };
}

export default Content
