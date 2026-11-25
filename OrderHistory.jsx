
import { Link } from 'react-router-dom'

function OrderHistory() {
  const orders =
    JSON.parse(localStorage.getItem('speedyFoodieOrders')) || []

  return (
    <div className="order-history-page">

      <nav className="navbar">
        <h2 className="logo">🍔 SpeedyFoodie</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/suggestions">Smart Suggestions</Link>
        </div>
      </nav>

      <h1>📦 My Order History</h1>
      <p>Check all your previous orders here!</p>

      {orders.length === 0 ? (
        <h2>No orders yet! Start ordering 🍔</h2>
      ) : (
        orders.slice().reverse().map((order, index) => (
          <div className="order-card" key={index}>

            <h2>Order #{orders.length - index}</h2>

            <p><b>Name:</b> {order.name}</p>
            <p><b>Phone:</b> {order.phone}</p>
            <p><b>Address:</b> {order.address}</p>

            <h3>Ordered Items</h3>

            {order.items.map((item, i) => (
              <p key={i}>
                {item.name} × {item.quantity}
              </p>
            ))}

            <p><b>Payment:</b> {order.payment === 'COD' ? 'Cash on Delivery' : 'QR Code'}</p>

            <p>
              <b>Delivery:</b> {order.deliveryType || 'Now'}
            </p>

            {order.deliveryType === 'Scheduled' && (
              <>
                <p><b>Date:</b> {order.scheduledDate}</p>
                <p><b>Time:</b> {order.scheduledTime}</p>
              </>
            )}

            <h3>Total: ₹{order.total}</h3>
            <p><b>Order Date:</b> {order.date}</p>

          </div>
        ))
      )}

    </div>
  )
}

export default OrderHistory
