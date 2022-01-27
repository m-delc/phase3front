import './App.css';
import MakeReservation from './components/makereservation/makereservation'
import {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Reviews from './components/reviews/reviews'

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

  // const patchReservation = (x) => {
  //   fetch('http://localhost:9292/reservations/${x.id}', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({...x, active: false})
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //     setReservations(reservations.map(p => {
  //       if(reservations.id === data.id){
  //         return data
  //       } else {
  //         return p
  //       }
  //     }))
  //   })
  // } 

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => {
      setReservations(reservations.filter(x => x.id !== id))
    })
  }

console.log(reservations)
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/reservations" element={<MakeReservation postReservation={postReservation} 
                                                                restaurants={restaurants} 
                                                                reservations={reservations} 
                                                                handleDelete={handleDelete} />} />
          <Route path="/reviews" element={<Reviews restaurants={restaurants} />} />
      </Routes>
    </div>
  );
}

export default App;