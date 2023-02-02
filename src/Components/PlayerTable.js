import React from 'react'
import PlayerRow from './PlayerRow'

const PlayerTable = ({
  teamName,
  arena,
  location,
  conference,
  division,
  players,
  image
}) => {
  return (
    <div className="player-table">
      <h2>{teamName}</h2>
      <img src={image} />
      <p>Arena: {arena}</p>
      <p>Location: {location}</p>
      <p>Conference: {conference}</p>
      <p>Division: {division}</p>
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
    </div>
  )
}

export default PlayerTable
