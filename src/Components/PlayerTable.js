import React from 'react'
import PlayerRow from './PlayerRow'

const PlayerTable = ({ players }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {players &&
          players.map((player, index) => (
            <PlayerRow
              key={index}
              name={player.name}
              position={player.position}
              number={player.number}
            />
          ))}
      </tbody>
    </table>
  )
}

export default PlayerTable
