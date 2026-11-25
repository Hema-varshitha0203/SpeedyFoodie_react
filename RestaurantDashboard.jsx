
import { useState } from 'react'

function RestaurantDashboard() {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: 249 },
    { id: 2, name: 'Chicken Burger', price: 199 },
    { id: 3, name: 'Chicken Biryani', price: 299 }
  ])

  const [orders, setOrders] = useState(
  JSON.parse(localStorage.getItem('speedyFoodieOrders')) || []
)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const addFood = () => {
    if (!name || !price || Number(price) <= 0) {
      alert('Please enter valid food details!')
      return
    }

    setFoodItems([
      ...foodItems,
      { id: Date.now(), name, price: Number(price) }
    ])

    setName('')
    setPrice('')
  }

  const deleteFood = (id) => {
    setFoodItems(foodItems.filter(item => item.id !== id))
  }
const editFood = (id) => {
  const item = foodItems.find(food => food.id === id)

  const newName = prompt('Enter new food name:', item.name)
  const newPrice = prompt('Enter new price:', item.price)

  if (!newName || !newPrice || Number(newPrice) <= 0) return

  setFoodItems(foodItems.map(food =>
    food.id === id
      ? { ...food, name: newName, price: Number(newPrice) }
      : food
  ))
}
  return (
    <div className="dashboard">
      <h1>Restaurant Admin Dashboard 🍽️</h1>
      <p>Manage your restaurant menu</p>

      <div className="admin-form">
        <input
          placeholder="Food name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addFood}>Add Food</button>
      </div>

      <h2>Food Menu</h2>

      {foodItems.map(item => (
        <div className="admin-food" key={item.id}>
  <span>{item.name} - ₹{item.price}</span>

  <div>
    <button onClick={() => editFood(item.id)}>
      Edit
    </button>

    <button onClick={() => deleteFood(item.id)}>
      Delete
    </button>
  </div>
</div>
           ))}

      <h2>Customer Orders 📦</h2>

      {orders.length === 0 ? (
        <p>No customer orders yet!</p>
      ) : (
        orders.map((order, index) => (
          <div className="admin-food" key={index}>
            <div>
              <h3>Order #{index + 1}</h3>
              <p>Total: ₹{order.total}</p>
              <p>Payment: {order.payment}</p>
            </div>
          </div>
        ))
      )}

    </div>
  )
}

export default RestaurantDashboard
