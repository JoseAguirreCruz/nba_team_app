import React from 'react'

const TeamCard = ({ teamName, arena, location, conference, division }) => {
  return (
    <div>
      <h2>{teamName}</h2>
      <p>Arena: {arena}</p>
      <p>Location: {location}</p>
      <p>Conference: {conference}</p>
      <p>Division: {division}</p>
    </div>
  )
}

export default TeamCard
