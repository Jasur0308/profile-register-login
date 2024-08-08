import './Login.css'
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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUserLogin = (e) => {
    e.preventDefault()
    axios.post('/auth/login', {email, password})
      .then(response => {
        if(response.status === 201) {
          localStorage.setItem('token', response.data.access_token)
          navigate("/profile")
        }
      })
      Toastify({
        text: "Logged in successfully!!!",
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
    <div className='login'>
      <div className="login__wrapper">
        <h3 className='title'>Login</h3>
        <form className='login__form' onSubmit={handleUserLogin}>
          <input className='login__input' type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required/>
          <input className='login__input' type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required/>
          <button className='login__button' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login