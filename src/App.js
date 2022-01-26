import './App.css';
import MakeReservation from './components/makereservation'
import {useEffect, useState} from 'react'

function App() {

  const [reservations, setReservations] = useState([])
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/reservations')
    .then(r => r.json())
    .then(setReservations)

    fetch('http://localhost:9292/restaurants')
    .then(r => r.json())
    .then(setRestaurants)
  }, [])



  const postReservation = (x) => {
    fetch('http://localhost:9292/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(x)
    })
    .then(r => r.json())
    .then(newOne => {
      setReservations([newOne, ...reservations])
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <MakeReservation postReservation={postReservation} restaurants={restaurants} />
      </header>
    </div>
  );
}

export default App;
