
import { Link } from 'react-router-dom'

function Restaurants() {

  const restaurants = [
    {
      name: 'Pizza Palace',
      category: 'Italian • Pizza',
      image: '🍕'
    },
    {
      name: 'Burger Hub',
      category: 'American • Burgers',
      image: '🍔'
    },
    {
      name: 'Spice Garden',
      category: 'Indian • Biryani',
      image: '🍛'
    },
    {
      name: 'Dragon Bowl',
      category: 'Chinese • Noodles',
      image: '🍜'
    },
    {
      name: 'Sweet Treats',
      category: 'Desserts • Bakery',
      image: '🍰'
    },
    {
      name: 'Grill House',
      category: 'Grill • Fast Food',
      image: '🍗'
    }
  ]

  return (
    <div className="restaurants-page">

      <nav className="navbar">
        <h2 className="logo">🍔 SpeedyFoodie</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <section className="restaurant-heading">
        <h1>Explore Restaurants</h1>
        <p>Discover delicious food from your favourite restaurants!</p>
      </section>

      <section className="restaurant-grid">

        {restaurants.map((restaurant, index) => (
          <div className="restaurant-card" key={index}>

            <div className="restaurant-image">
              {restaurant.image}
            </div>

            <div className="restaurant-info">
              <h2>{restaurant.name}</h2>
              <p>{restaurant.category}</p>

              <Link
                to="/menu"
                className="menu-btn"
                state={{ restaurant: restaurant.name }}
              >
                Explore Menu →
              </Link>
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

export default Restaurants
