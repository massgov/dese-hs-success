import React from 'react'
import Option from './Option'

class Options extends React.Component{
  constructor(props) {
    super(props);
  };
  render() {
    const {selectedOption, handleOptionChange} = this.props
    return (
      <div>
          <Option value="rate_enroll" selectedOption={selectedOption} handleOptionChange={handleOptionChange}>College Enrollment</Option>
          <Option value="rate_persist" selectedOption={selectedOption} handleOptionChange={handleOptionChange}>College Persistence</Option>
      </div>

    )
  }
}

export default Options
