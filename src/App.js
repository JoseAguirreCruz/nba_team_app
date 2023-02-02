import React from 'react'
import Search from './Components/Search'
import nbateams from './nbateams.json'
import PlayerRow from './Components/PlayerRow'
import PlayerTable from './Components/PlayerTable'
import Header from './Components/Header'

// const teams = Object.values(nbateams)
console.log(nbateams)
const App = () => {
  return (
    <div>
      <Header />
      <Search />
      {nbateams.teams.map((team, index) => (
        <PlayerTable
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
