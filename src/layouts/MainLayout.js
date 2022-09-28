import React, { useState } from 'react'
import Header from '../components/Header';

function MainLayout(props) {

  const [isConnected, setIsConnected] = useState(false)

  return (
      <div id='mainLayout'>
        <Header />
        <div style={{ display: 'flex', flex: 1}}>
          <div className="center500px">
            {props.children}
          </div>
          <div className="sidebar">
            <p>{`Vous êtes actuellement ${isConnected ? 'connecté' : 'déconnecter'} du chat.`}</p>
            <button className='btn' onClick={() => setIsConnected(!isConnected)}> {isConnected ? "Déconnecter" : "Connecter"} 
            </button>
          </div>
        </div>
      </div>
  )
}

export default MainLayout