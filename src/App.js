import React from 'react'
import Search from './Components/Search'
import nbateams from './nbateams.json'
import PlayerRow from './Components/PlayerRow'
import PlayerTable from './Components/PlayerTable'
import Header from './Components/Header'

const teams = Object.values(nbateams)

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      {teams.map((teams, index) => (
        <PlayerTable
          key={index}
          teamName={teams.teamName}
          arena={teams.arena}
          location={teams.location}
          conference={teams.conference}
          division={teams.division}
          players={teams.players}
        />
      ))}
    </div>
  )
}

export default App
