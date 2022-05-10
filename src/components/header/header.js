import React from 'react';
import './header.css'

export default function header() {
  return <div>
              <div className="topnav">
                <a href="/reservations">Reservations</a>
                <a href="/restaurants">Restaurants</a>
                <a href="/about">About</a>
            </div> 
  </div>;
}
