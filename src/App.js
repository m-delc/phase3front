import './App.css';
import MakeReservation from './components/makereservation/makereservation'
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Restaurants from './components/restaurants/restaurants'


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

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => {
      setReservations(reservations.filter(x => x.id !== id))
    })
  }
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/reservations" element={<MakeReservation postReservation={postReservation} 
                                                                restaurants={restaurants} 
                                                                reservations={reservations} 
                                                                handleDelete={handleDelete} />} />
          <Route path="/restaurants" element={<Restaurants restaurants={restaurants} />} />
          <Route path="/about" element={null} />
      </Routes>
    </div>
  );
}

export default App;