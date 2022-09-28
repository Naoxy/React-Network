import React, {useContext } from 'react'
import UserContext from '../contexts/UserContext';

function AboutPage() {
  const {user} = useContext(UserContext)

  return (
    <div>
      <h1>À propos</h1>
      <p>Bienvenue sur React Network</p>
      <p>Application développée en React.js</p>
      <p>Vous êtes connecté en tant que {user.author}.</p>
    </div>
  )
}

export default AboutPage;