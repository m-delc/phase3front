import React from 'react';
import './reviews.css'

export default function reviews({ restaurants }) {
    return <div>
        <header>
            <h2>Read reviews about your favorite spots!</h2>
            </header>
        {restaurants.map(x => (
            <div className="cards" key={x.name}>
                <h4>Review for {x.name}</h4>
                <p>{x.review}</p>

            </div>

        ))}
    </div>



}
