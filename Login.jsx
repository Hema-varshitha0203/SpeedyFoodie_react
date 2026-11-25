
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (!email || !password) {
      alert('Please fill all fields!')
      return
    }

    localStorage.setItem('loggedIn', 'true')

    alert('Login successful! Welcome to SpeedyFoodie 🍔')

    navigate('/restaurants')
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>🍔 SpeedyFoodie</h1>
        <h2>Welcome Back!</h2>
        <p>Login to enjoy your favourite food.</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <Link to="/">Back to Home</Link>
      </form>
    </div>
  )
}

export default Login
