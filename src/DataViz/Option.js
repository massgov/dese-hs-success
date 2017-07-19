import React from 'react'

class Option extends React.Component{
  constructor(props) {
    super(props);
  };
  render() {
    const {value, selectedOption, handleOptionChange} = this.props
    console.log(value)
    return (
          <div className="radio">
            <label><input type="radio" name="outcome" value={value} checked={selectedOption===value} onChange={handleOptionChange}/>{this.props.children}</label>
          </div>
    )
  }
}

export default Option
