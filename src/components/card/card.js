import './card.css'

function Card ({ reservation, handleDelete }) {
      return(
          <div className="flexbox-container">
            <div className="flexbox-item">
            <h3>Name: {reservation.name}</h3>
            <p>Restaurant: {reservation.restaurant.name}</p>
            <p>Day: {reservation.day}</p>
            <p>Time: {reservation.time}</p>
            <p>Party: {reservation.party}</p>
            <p>Phone Number: {reservation.phone_number}</p>
            <button onClick={() => handleDelete(reservation.id)}>Delete Reservation</button>

            </div>
          </div> 
        )
    }
    export default Card;
