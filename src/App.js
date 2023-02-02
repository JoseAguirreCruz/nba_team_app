import React from 'react'
import Search from './Components/Search'
import nbateams from './nbateams.json'
import PlayerRow from './Components/PlayerRow'
import PlayerTable from './Components/PlayerTable'
import Header from './Components/Header'

const teams = Object.values(nbateams)

const App = () => {
  const test1 = teams.map((team) => {
    return team
  })
  const test2 = test1.map((test) => {
    return test.teamName
  })
  console.log(test2)
  return (
    <div>
      <Header />
      <Search />
      {teams.map((team, index) => (
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
