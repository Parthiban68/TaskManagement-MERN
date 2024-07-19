import React from 'react'
import { useAuth } from '../../Context/AuthContext'

function Profile() {
  const { userData, logout} = useAuth()
  const handlelogout = async () =>{
      await logout();
      }
  return (
   
    <div>
      <h1>{userData.username}</h1>
      <h1>{userData.email}</h1>
      <button onClick={handlelogout}>Logout</button>

    </div>
  )
}

export default Profile