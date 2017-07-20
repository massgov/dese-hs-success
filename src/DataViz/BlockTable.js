import React from 'react'

const BlockTable = ({Yes, No}) => {
  return (
    <table className="table">
      <tbody>
          <tr>
            <th>Graduated on time</th>
            <th>Did not graduated on time</th>
          </tr>
          <tr>
            <td className="color_Yes">{Yes}%</td>
            <td className="color_No">{No}%</td>
          </tr>
      </tbody>
    </table>
  )
}

export default BlockTable
