import React from 'react'

const PlayerRow = ({ name, position, number }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{number}</td>
    </tr>
  )
}

export default PlayerRow
