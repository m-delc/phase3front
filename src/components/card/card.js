

function Card ({ reservation, handleDelete }) {
    console.log(reservation)
      return(
          <div>
            <h3>Name: {reservation.name}</h3>
            <p>Restaurant: {reservation.restaurant.name}</p>
            <p>Day: {reservation.day}</p>
            <p>Time: {reservation.time}</p>
            <p>Party: {reservation.party}</p>
            <p>Phone Number: {reservation.phone_number}</p>
            <button onClick={() => handleDelete(reservation.id)}>Delete Reservation</button>
          </div> 
        )
    }
    export default Card;
