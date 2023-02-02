const PlayerRow = ({ name, position, number }) => {
  return (
    <tr className="player-row">
      <td>{name}</td>
      <td>{position}</td>
      <td>{number}</td>
    </tr>
  )
}

export default PlayerRow
