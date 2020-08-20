import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"

const TinderCards = () => {
  const [people, setpeople] = useState([
    {
      name: "Steve Jobs",
      url: "https://www.gstatic.com/tv/thumb/persons/476283/476283_v9_ba.jpg"
    },
    {
      name: "Bill Gates",
      url: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHiqcJBsYq6c/v0/640x-1.jpg"
    }
  ])
  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
