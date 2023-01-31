import React from 'react'
import TeamCard from './TeamCard'
import PlayerTable from './PlayerTable'

const TeamPage = ({
  teamName,
  arena,
  location,
  conference,
  division,
  players
}) => {
  return (
    <div>
      <TeamCard
        teamName={teamName}
        arena={arena}
        location={location}
        conference={conference}
        division={division}
      />
      <h3>Roster:</h3>
      <PlayerTable players={players} />
    </div>
  )
}

export default TeamPage
