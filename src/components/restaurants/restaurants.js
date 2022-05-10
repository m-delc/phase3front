import React from 'react';
import './restaurants.css'

export default function Restaurants({ restaurants }) {
    return  <>
                <div>
                    <header>
                        <h2>Read reviews about your favorite spots!</h2>
                    </header>
                </div>
                <div className="flexbox-container">
                    {restaurants.map(x => (
                            <div key={x.name} className="flexbox-item">
                                <h2>{x.name}</h2>
                                <p>Blurb about the place:</p>
                                <p>{x.description}</p>
                                <p>Most recent review:</p>
                                <p>{x.review}</p>
                            </div>
                    ))}
                </div>
    </>
}
