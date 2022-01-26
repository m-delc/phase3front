import * as React from 'react';
import { useState } from 'react'


export default function MakeReservation({ postReservation, restaurants }) {



  const [formData, setFormData] = useState({
    name: "",
    time: "",
    phone_number: "",
    party: "",
    restaurant_id: ""
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postReservation(formData)
  }
  
  console.log(formData)
  

  return (

    <div className="reservations">
    <h2>Make the rez.....</h2>
    <form onSubmit={handleSubmit}>
      <select name="restaurant_id" onChange={handleChange}>
        <option>Restaurants</option>
        {restaurants.map(x => (
          <option key={x.name} value={x.id}>{x.name}</option>
        ))}
      </select>
      <select name="time" onChange={handleChange}>
        <option>Time</option>
          {times.map(x =>(
            <option key={x} value={x.id}>{x}</option>
          ))}
      </select>
      <input type="text" name="name" placeholder="Whats Your Name?" value={formData.name} onChange={handleChange} />
      <input type="text" name="party" placeholder="How many people?" value={formData.party} onChange={handleChange} />
      <input type="tel" name="phone_number" placeholder="Phone" value={formData.phone_number} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    </div>
    );
}

const times = ["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00"]