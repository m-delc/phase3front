import { React, useState } from 'react';
import './makereservation.css'

export default function MakeReservation({ postReservation, restaurants }) {

    const times = ["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const [formData, setFormData] = useState({
        name: "",
        time: "",
        day: "",
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
    

    return  <div>
                <div className="container">
                    <form action="action_page.php" onSubmit={handleSubmit}>

                        <select name="restaurant_id" name="restaurant_id" onChange={handleChange}>
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
                        <select name="day" onChange={handleChange}>
                            <option>Day</option>
                                {days.map(x =>(
                                    <option key={x} value={x.id}>{x}</option>
                                ))}
                        </select>
                            <input type="text" name="name" placeholder="Whats Your Name?" value={formData.name} onChange={handleChange} />
                            <input type="text" name="party" placeholder="How many people?" value={formData.party} onChange={handleChange} />
                            <input type="text" name="phone_number" placeholder="Sup with your phone number?" value={formData.phone_number} onChange={handleChange} />
                            <input type="submit" value="Submit" />

                    </form>
                </div> 
            </div>;
}
