import * as React from 'react';
import { useState } from 'react'
// import { v4 } from 'uuid'
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

export default function MakeReservation({ postReservation, restaurants }) {

  // const [newReso, setNewReso] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    time: "",
    phone_number: "",
    restaurant_id: ""
  })

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]:e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault()
    postReservation(formData)
  }
  
  // console.log(formData)
  
  return (

    <div className="reservations">
    <h2>Make the rez.....</h2>
    <form onSubmit={handleSubmit}>
      <select name="restaurant_id" onChange={handleChange}>
        <option>Restaurants</option>
        {restaurants.map(x => (
          <option value={x.id}>{x.name}</option>
        ))}
      </select>
      <select name="time" onChange={handleChange}>
        <option>Time</option>
          {times.map(x =>(
            <option value={x.id}>{x}</option>
          ))}
      </select>
      <input type="text" name="name" placeholder="Whats Your Name?" value={formData.name} onChange={handleChange} />
      <input type="tel" name="phone_number" placeholder="Phone" value={formData.phone_number} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    </div>
    );

    // this worked, i copied it to try ix's thing
    // <div className="reservations">
    // <h2>Make the rez.....</h2>
    // <form onSubmit={handleSubmit}>
    //   <select>
    //     <option value="testing">Restaurants</option>
    //     {restaurants.map(x => (
    //       <option key={x.id}>{x.name}</option>
    //     ))}
    //   </select>
    //   <select>
    //     <option value="testing">Time</option>
    //       {times.map(x =>(
    //         <option key={x.id}>{x}</option>
    //       ))}
    //   </select>
    
    //   <input type="tel" name="tel" step="0.01" placeholder="Phone" />
    //   <button type="submit">Submit</button>
    // </form>
    // </div>
    // );


    // <form onSubmit={e => formSubmit}>
    //   <Stack direction="row">
    //     <Autocomplete
    //       disablePortal
    //       id="combo-box-demo"
    //       options={resto}
    //       sx={{ width: 300 }}
    //       renderInput={(params) => <TextField {...params} label="Hungry?" />}
    //     />
    //     <Autocomplete
    //     disablePortal
    //     id="combo-box-demo"
    //     options={times}
    //     sx={{ width: 300 }}
    //     renderInput={(params) => <TextField {...params} label="Time?" />}
    //     />
    //   <TextField
    //     hiddenLabel
    //     id="filled-hidden-label-normal"
    //     defaultValue="Your Phone?"
    //     variant="filled"
    //     type="tel"
    //   />
    //     <Button onSubmit={e => formSubmit} variant="outlined">Submit</Button>
    //   </Stack>
    // </form>



    // from plantsy, for testing
    //   <div className="new-plant-form">
    //   <h2>New Plant</h2>
    //   <form onSubmit={formSubmit}>
    //     <input type="text" name="name" placeholder="Plant name" />
    //     <input type="text" name="image" placeholder="Image URL" />
    //     <input type="number" name="price" step="0.01" placeholder="Price" />
    //     <button type="submit">Add Plant</button>
    //   </form>
    // </div>
    
}

const times = ["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00"]