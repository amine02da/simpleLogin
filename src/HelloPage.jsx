import React from 'react';
import { useLocation } from 'react-router-dom';


function HelloPage() {
    const location = useLocation()
  return (
    <div>
        <h1>Accueil</h1>
        <h1>Bonjour {location.state.name}</h1>
    </div>
  )
}

export default HelloPage