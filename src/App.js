import React, { useState } from 'react'
import Search from './Components/Search'
import nbateams from './nbateams.json'
import PlayerTable from './Components/PlayerTable'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import './App.css'

console.log(nbateams)
const App = () => {
  const [searchResults, setSearchResults] = useState(nbateams.teams)
  const handleSearch = (e) => {
    e.preventDefault()
    const searchTerm = e.target.elements.search.value
    const filteredTeams = nbateams.teams.filter((team) =>
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(filteredTeams)
  }
  return (
    <div>
      <Header />
      <NavBar />
      <Search handleSearch={handleSearch} />
      {searchResults.map((team, index) => (
        <PlayerTable
          key={index}
          image={team.image}
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
