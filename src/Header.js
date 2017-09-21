import React from 'react'
import './Header.css'

class Content extends React.Component{

  render = () =>  {
    return (
      <header className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>The ABCs: Predicting success in high school and beyond<br /></h1>
              <h3>A data story from the Massachusetts Department of Elementary and Secondary Education (DESE) on how attendance, behavior, and course performance information can forecast student achievement.</h3>
            </div>
          </div>
        </div>
      </header>

    );
  };
}

export default Content
