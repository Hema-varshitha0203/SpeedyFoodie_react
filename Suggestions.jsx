
function Suggestions() {
  const previousOrders =
    JSON.parse(localStorage.getItem('speedyFoodieOrders')) || []

  const popularFoods = [
    { id: 1, name: 'Margherita Pizza', price: 249, image: '🍕' },
    { id: 2, name: 'Classic Chicken Burger', price: 199, image: '🍔' },
    { id: 3, name: 'Chicken Biryani', price: 299, image: '🍛' },
    { id: 4, name: 'Veg Hakka Noodles', price: 179, image: '🍜' },
    { id: 5, name: 'Chocolate Cake', price: 149, image: '🍰' }
  ]

  const orderHistory = {}

  previousOrders.forEach(order => {
    (order.items || []).forEach(item => {
      if (orderHistory[item.name]) {
        orderHistory[item.name].quantity += item.quantity
      } else {
        orderHistory[item.name] = {
          ...item,
          image: item.image || '🍽️'
        }
      }
    })
  })

  const recommendations = Object.values(orderHistory)
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5)

  const suggestions =
    recommendations.length > 0 ? recommendations : popularFoods

  return (
    <div className="suggestions-page">

      <h1>✨ Smart Food Suggestions</h1>
      <p>Discover delicious food you may love!</p>

      <h2>
        {recommendations.length > 0
          ? '❤️ Recommended Based on Your Orders'
          : '🔥 Popular Food Suggestions'}
      </h2>

      <div className="suggestions-list">
        {suggestions.map((item, index) => (
          <div className="suggestion-card" key={item.id || item.name}>
            <h1>{item.image}</h1>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            {recommendations.length > 0 && (
              <p>Ordered {item.quantity} time(s)</p>
            )}
          </div>
        ))}
      </div>

      <h2>🛍️ Your Previous Orders</h2>

      {previousOrders.length > 0 ? (
        previousOrders.map((order, index) => (
          <div key={index}>
            <p>
              {order.items.map(item => item.name).join(', ')}
            </p>
          </div>
        ))
      ) : (
        <p>No previous orders yet. Start ordering to get personalized suggestions!</p>
      )}

    </div>
  )
}

export default Suggestions
