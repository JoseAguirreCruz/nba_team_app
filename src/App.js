import React from 'react'
import TeamPage from './Components/TeamPage'
import nbaTeams from './nbateams.json'

const teams = Object.values(nbaTeams)

const App = () => {
  return (
    <div>
      {teams.map((team, index) => (
        <TeamPage
          key={index}
          teamName={team.teamName}
          arena={team.arena}
          location={team.location}
          conference={team.conference}
          division={team.division}
          players={team.players}
        />
      ))}
    </div>
  )
}

export default App
