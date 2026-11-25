
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleRegister(e) {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    alert('Registration successful! Welcome to SpeedyFoodie 🍔')
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleRegister}>
        <h1>🍔 SpeedyFoodie</h1>
        <h2>Create Account</h2>
        <p>Join us and enjoy delicious food!</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
        <Link to="/">Back to Home</Link>
      </form>
    </div>
  )
}

export default Register
