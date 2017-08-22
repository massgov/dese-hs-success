import React from 'react'

const BlockTable = ({Yes, No}) => {
  return (
    <table className="table">
      <tbody>
          <tr>
            <th>Graduated in 4 years</th>
            <td className="color_Yes">{Yes}%</td>
          </tr>
          <tr>
            <th>Did not graduate in 4 years</th>
            <td className="color_No">{No}%</td>
          </tr>
      </tbody>
    </table>
  )
}

export default BlockTable
