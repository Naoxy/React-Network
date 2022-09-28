import React, { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext';



function ProfilePage() {

  const {user, setUser} = useContext(UserContext)

  const [userNameText, setUserNameText] = useState(user.author)
  const [profilePictureText, setprofilePictureText] = useState(user.authorPicture)
  
  const updateProfile = e => {
    e.preventDefault()
    setUser({
      author: userNameText,
      authorPicture: profilePictureText,
    })
    alert("Profil mis à jour.")
  }
  return (
    <div>
      <h1>Modifier mon profil</h1>
      <form className='update_profile_form' onSubmit={updateProfile}>
        <h3>Votre nom :</h3>
        <input type="text" value={userNameText} onChange={e => setUserNameText(e.target.value)} />
        <h3>Votre photo de profil :</h3>
        <input type="text" value={profilePictureText} onChange={e => setprofilePictureText(e.target.value)} />
        <input className='btn' type="submit" value="Valider" />
      </form>
    </div>
  )
}

export default ProfilePage;