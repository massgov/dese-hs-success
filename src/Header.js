import React from 'react'
import './Header.css'
import SocialMedia from './SocialMedia'

class Content extends React.Component{
  render = () =>  {
    return (
      <header className="page-header" id="header" name="header">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>The ABCs of Success in High School and Beyond<br /></h1>
              <h3>This data story provides information for parents, community members, and educators from the Massachusetts Department of Elementary and Secondary Education (ESE) on how attendance, behavior, and course performance in Massachusetts high schools affects post-secondary outcomes.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 ">
                <SocialMedia />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 ">
                <SocialMedia />
            </div>
          </div>
        </div>
      </header>

    );
  };
}

export default Content
