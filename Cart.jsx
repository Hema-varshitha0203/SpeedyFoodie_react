
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('speedyFoodieCart')) || []
  })

  useEffect(() => {
    localStorage.setItem('speedyFoodieCart', JSON.stringify(cart))
  }, [cart])

  function increase(id) {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  function decrease(id) {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0))
  }

  function removeItem(id) {
    setCart(cart.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )

  const delivery = cart.length > 0 ? 40 : 0
  const total = subtotal + delivery

  return (
    <div className="cart-page">

      <nav className="navbar">
        <h2 className="logo">🍔 SpeedyFoodie</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/cart">Cart 🛒</Link>
        </div>
      </nav>

      <h1 className="cart-heading">Your Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>🛒 Your cart is empty!</h2>
          <p>Add delicious food to your cart.</p>
          <Link to="/restaurants" className="menu-btn">
            Explore Restaurants
          </Link>
        </div>
      ) : (
        <div className="cart-content">

          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>

                <div className="cart-food-image">
                  {item.image}
                </div>

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="quantity">
                    <button onClick={() => decrease(item.id)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                  </div>

                  <p>
                    Item Total: ₹{item.price * item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>Subtotal: ₹{subtotal}</p>
            <p>Delivery Fee: ₹{delivery}</p>

            <hr />

            <h3>Total: ₹{total}</h3>

            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout →
            </Link>
          </div>

        </div>
      )}

      <footer>
        <h2>🍔 SpeedyFoodie</h2>
        <p>Good Food. Great Mood. Fast Delivery.</p>
      </footer>

    </div>
  )
}

export default Cart
