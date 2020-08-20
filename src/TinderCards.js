import React, { useState, useEffect } from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"
import database from './firebase'

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    //we got to firebase to the people 'collection' and listen to whenever anything changes inside that collection
    //onSnapshot - its basically like taking a picture of the database, and it is going to give you back all the documents inside
    //snapshot - we now have that with all the documents inside of it
    //snapshot.doc.map - will get you what is inside the doc and we map through them
    // doc.data - will have each individual person
    // setPeople - we will add all of the data we got to the state
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
  },[])

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
