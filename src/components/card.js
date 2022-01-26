function Card({reservation, handleDelete}){
    console.log(reservation)
      return(
          <div>
            <h3>Name: {reservation.name}</h3>
            <p>Phone Number: {reservation.phone_number}</p>
            <p>Time: {reservation.time}</p>
            <p>Party: {reservation.party}</p>
            <p>Restaurant: {reservation.restaurant.name}</p>
            {/* {reservation.active? <button onClick={()=> patchReservation(reservation)}>Deactivate Pet</button> : <p>reservation is no longer active</p>} */}
            <button onClick={() => handleDelete(reservation.id)}>Delete Reservation</button>
          </div> 
        )
    }
    
    export default Card;


    // patient.clinic.clinic_name

    // reservation.restaurant_id