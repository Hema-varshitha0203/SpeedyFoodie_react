
import { useLocation, Link } from 'react-router-dom'

function Menu() {
  const location = useLocation()
  const restaurant = location.state?.restaurant || 'Our Restaurants'

  const foods = [
    { id: 1, name: 'Margherita Pizza', price: 249, image: '🍕' },
    { id: 2, name: 'Classic Chicken Burger', price: 199, image: '🍔' },
    { id: 3, name: 'Chicken Biryani', price: 299, image: '🍛' },
    { id: 4, name: 'Veg Hakka Noodles', price: 179, image: '🍜' },
    { id: 5, name: 'Grilled Chicken', price: 279, image: '🍗' },
    { id: 6, name: 'Chocolate Cake', price: 149, image: '🍰' }
  ]

  function addToCart(food) {
    const cart = JSON.parse(localStorage.getItem('speedyFoodieCart')) || []

    const existing = cart.find(item => item.id === food.id)

    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({
        ...food,
        quantity: 1
      })
    }

    localStorage.setItem('speedyFoodieCart', JSON.stringify(cart))
    alert(food.name + ' added to cart! 🛒')
  }

  return (
    <div className="menu-page">

      <nav className="navbar">
        <h2 className="logo">🍔 SpeedyFoodie</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/cart">Cart 🛒</Link>
        </div>
      </nav>

      <section className="menu-heading">
        <h1>{restaurant}</h1>
        <p>Explore our delicious menu!</p>
      </section>

      <section className="menu-grid">
        {foods.map(food => (
          <div className="menu-card" key={food.id}>

            <div className="menu-image">
              {food.image}
            </div>

            <div className="menu-info">
              <h2>{food.name}</h2>

              <h3>₹{food.price}</h3>

              <button onClick={() => addToCart(food)}>
                Add to Cart +
              </button>
            </div>

          </div>
        ))}
      </section>

      <footer>
        <h2>🍔 SpeedyFoodie</h2>
        <p>Good Food. Great Mood. Fast Delivery.</p>
      </footer>

    </div>
  )
}

export default Menu
