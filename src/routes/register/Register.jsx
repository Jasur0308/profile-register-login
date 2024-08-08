import './Register.css'
import axios from '../../api/Axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { Audio } from 'react-loader-spinner'
;<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="three-dots-loading"
  wrapperStyle
  wrapperClass
/>

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleUserRegister = (e) => {
    e.preventDefault()
    axios.post('users', {name, email, password, avatar})
      .then(response => {
        if(response.status === 201) {
          navigate("/login")
        }
      })
      Toastify({
        text: "Registered successfully!!!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
  }

  return (
    <div className='register'>
      <div className="register__wrapper">
        <h3 className='title'>Register</h3>
        <form className='register__form' onSubmit={handleUserRegister}>
          <input className='register__input' type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required/>
          <input className='register__input' type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required/>
          <input className='register__input' type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required/>
          <input className='register__input' type="url" placeholder='Enter your avatar' onChange={(e) => setAvatar(e.target.value)} required/>
          <button className='register__button' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register