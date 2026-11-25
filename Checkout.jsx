
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Checkout() {
  const navigate = useNavigate()

  const cart = JSON.parse(localStorage.getItem('speedyFoodieCart')) || []

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [payment, setPayment] = useState('COD')
  const [deliveryType, setDeliveryType] = useState('Now')
const [scheduledDate, setScheduledDate] = useState('')
const [scheduledTime, setScheduledTime] = useState('')
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  const delivery = cart.length > 0 ? 40 : 0
  const total = subtotal + delivery

  function placeOrder(e) {
    e.preventDefault()

    if (cart.length === 0) {
      alert('Your cart is empty!')
      navigate('/restaurants')
      return
    }

    if (phone.length !== 10) {
      alert('Enter a valid 10-digit phone number!')
      return
    }
if (deliveryType === 'Scheduled' && (!scheduledDate || !scheduledTime)) {
  alert('Please select delivery date and time!')
  return
}
    
const order = {
  name,
  phone,
  address,
  payment,
  deliveryType,
  scheduledDate: deliveryType === 'Scheduled' ? scheduledDate : '',
  scheduledTime: deliveryType === 'Scheduled' ? scheduledTime : '',
  items: cart,
  total,
  date: new Date().toLocaleString()
}


    const orders = JSON.parse(localStorage.getItem('speedyFoodieOrders')) || []

    orders.push(order)

    localStorage.setItem('speedyFoodieOrders', JSON.stringify(orders))
    localStorage.removeItem('speedyFoodieCart')

    alert('Order placed successfully! Thank you for choosing SpeedyFoodie 🍔')

    navigate('/')
  }

  return (
    <div className="checkout-page">

      <nav className="navbar">
        <h2 className="logo">🍔 SpeedyFoodie</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>

      <h1 className="checkout-heading">Checkout 🛒</h1>

      <div className="checkout-content">

        <form className="checkout-form" onSubmit={placeOrder}>

          <h2>Delivery Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="10-digit Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="10"
            pattern="[0-9]{10}"
            required
          />

          <textarea
            placeholder="Enter Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        
<h2>Schedule Your Meal 🕒</h2>

<label className="payment-option">
  <input
    type="radio"
    value="Now"
    checked={deliveryType === 'Now'}
    onChange={(e) => setDeliveryType(e.target.value)}
  />
  Deliver Now
</label>

<label className="payment-option">
  <input
    type="radio"
    value="Scheduled"
    checked={deliveryType === 'Scheduled'}
    onChange={(e) => setDeliveryType(e.target.value)}
  />
  Schedule for Later
</label>

{deliveryType === 'Scheduled' && (
  <div>
    <label>Select Date</label>
    <input
      type="date"
      min={new Date().toLocaleDateString('en-CA')}
      value={scheduledDate}
      onChange={(e) => setScheduledDate(e.target.value)}
      required
    />

    <label>Select Time</label>
    <input
      type="time"
      value={scheduledTime}
      onChange={(e) => setScheduledTime(e.target.value)}
      required
    />
  </div>
)}

          <h2>Select Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              value="COD"
              checked={payment === 'COD'}
              onChange={(e) => setPayment(e.target.value)}
            />
            💵 Cash on Delivery
          </label>

          <label className="payment-option">
            <input
              type="radio"
              value="QR"
              checked={payment === 'QR'}
              onChange={(e) => setPayment(e.target.value)}
            />
            📱 QR Code Payment
          </label>

          {payment === 'QR' && (
            <div className="qr-section">
              <h3>Scan QR Code to Pay</h3>

              <img
                src="/qr-code.jpeg"
                alt="SpeedyFoodie Payment QR Code"
                className="payment-qr"
              />

              <h3>Amount: ₹{total}</h3>
              <p>Scan using Google Pay, PhonePe or Paytm.</p>
              <p>Demo only: payment is not verified.</p>
            </div>
          )}

          <button type="submit" className="place-order-btn">
            Place Order - ₹{total}
          </button>

        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.map(item => (
            <p key={item.id}>
              {item.name} × {item.quantity}
              <span>₹{item.price * item.quantity}</span>
            </p>
          ))}

          <hr />

          <p>Subtotal: ₹{subtotal}</p>
          <p>Delivery Fee: ₹{delivery}</p>

          <h3>Total: ₹{total}</h3>
        </div>

      </div>

      <footer>
        <h2>🍔 SpeedyFoodie</h2>
        <p>Good Food. Great Mood. Fast Delivery.</p>
      </footer>

    </div>
  )
}

export default Checkout
