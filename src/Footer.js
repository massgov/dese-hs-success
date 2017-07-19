import React from 'react'
import './Footer.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <footer>
        <div className="container">
            <div className="col-xs-12 col-md-6">
                    <div className="logo">
                      <img src="" className="img-responsive" alt="DESE logo" />
                    </div>
                    <address>
                      <strong>Massachusetts Department of Elementary & Secondary Education</strong>
                      <br />
                      <i className="glyphicon glyphicon-map-marker" aria-hidden="true" /> 250 Washington St, Boston, MA 02108
                      <br />
                      <a href="tel:xxx-xxx-xxxx" aria-label="Massachusetts Department of Elementary & Secondary Education phone number"><i className="glyphicon glyphicon-earphone" aria-hidden="true" /> (617) 624-6000</a>
                      <br />
                    </address>
            </div>
        </div>

      </footer>

    );
  };
}

export default Content
