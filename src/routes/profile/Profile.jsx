import axios from '../../api/Axios'
import React, { useEffect, useState } from 'react'
import './Profile.css'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  
  useEffect(() => {
    axios("/auth/profile")
      .then(response => setProfile(response.data))
  }, [])

  console.log(profile);

  return (
    <div>
      {
        profile && 
        <div className='profile-container'>
      <div className='profile-card'>
        <div className='profile-header'>
          <img src={profile.avatar} alt="Avatar" className="avatar" />
          <h4>{profile.name}</h4>
        </div>
        <div className="profile-details">
          <div className="profile-group">
            <span className="custom-icon email-icon"></span>
            <label>Email:</label>
            <div>{profile.email}</div>
          </div>
          <div className="profile-group">
            <span className="custom-icon password-icon"></span>
            <label>Password:</label>
            <div>{profile.password}</div>
          </div>
        </div>
      </div>
    </div>
      }
    </div>
  )
}

export default Profile