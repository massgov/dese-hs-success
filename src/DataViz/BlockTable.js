import React from 'react'
import './BlockTable.css'

const BlockTable = ({Yes, No}) => {
  return (
    <table className="table">
      <tbody>
          <tr>
            <th className="fit">Graduated in 4 years</th>
            <td className="fit color_Yes">{Yes}%</td>
          </tr>
          <tr>
            <th className="fit">Did not graduate in 4 years</th>
            <td className="fit color_No">{No}%</td>
          </tr>
      </tbody>
    </table>
  )
}

export default BlockTable
