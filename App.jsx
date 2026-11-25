
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { LanguageProvider, useLanguage } from './LanguageContext'

import Login from './pages/Login'
import Register from './pages/Register'
import Restaurants from './pages/Restaurants'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Suggestions from './pages/Suggestions'
import OrderHistory from './pages/OrderHistory'
import RestaurantDashboard from './pages/RestaurantDashboard'

function Home() {
  const [theme, setTheme] = useState('light')
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className={`app ${theme}`}>

      <nav className="navbar">
        <h2 className="logo">🍔 SpeedyFoodie</h2>

        <div className="nav-links">
          <a href="#home">{t('home')}</a>
          <Link to="/restaurants">{t('restaurants')}</Link>
          <Link to="/suggestions">{t('suggestions')} ✨</Link>
          <Link to="/orders">{t('orders')} 📦</Link>
          <Link to="/admin">{t('admin')} ⚙️</Link>
          <a href="#features">{t('features')}</a>
          <a href="#contact">{t('contact')}</a>
        </div>

        <div className="nav-actions">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>తెలుగు</option>
            <option>हिन्दी</option>
          </select>

          <button onClick={() =>
            setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <Link className="login-btn" to="/login">
            {t('login')}
          </Link>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            {t('welcome')}<br />
            <span>{t('delivered')}</span>
          </h1>

          <p>
            {language === 'English'
              ? 'Order your favourite meals from the best restaurants and enjoy delicious food at your doorstep.'
              : language === 'తెలుగు'
              ? 'మీకు ఇష్టమైన భోజనాన్ని ఉత్తమ రెస్టారెంట్ల నుండి ఆర్డర్ చేసి మీ ఇంటి వద్దే ఆస్వాదించండి.'
              : 'अपने पसंदीदा भोजन को बेहतरीन रेस्तरां से ऑर्डर करें और घर पर स्वादिष्ट खाने का आनंद लें।'}
          </p>

          <a href="#restaurants" className="order-btn">
            {t('orderNow')} →
          </a>
        </div>

        <div className="hero-food">🍕🍔🍟</div>
      </section>

      <section className="categories" id="restaurants">
        <h2>{t('explore')}</h2>
        <p>{t('choose')}</p>

        <div className="food-grid">
          <div className="food-card">🍕<h3>{language === 'English' ? 'Pizza' : language === 'తెలుగు' ? 'పిజ్జా' : 'पिज़्ज़ा'}</h3></div>
          <div className="food-card">🍔<h3>{language === 'English' ? 'Burgers' : language === 'తెలుగు' ? 'బర్గర్లు' : 'बर्गर'}</h3></div>
          <div className="food-card">🍝<h3>{language === 'English' ? 'Pasta' : language === 'తెలుగు' ? 'పాస్తా' : 'पास्ता'}</h3></div>
          <div className="food-card">🍰<h3>{language === 'English' ? 'Desserts' : language === 'తెలుగు' ? 'డెజర్ట్స్' : 'मिठाइयाँ'}</h3></div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>{t('whyChoose')}</h2>

        <div className="food-grid">
          <div className="food-card">
            <h3>📅 {t('schedule')}</h3>
            <p>
              {language === 'English'
                ? 'Plan your food orders in advance.'
                : language === 'తెలుగు'
                ? 'మీ ఆహార ఆర్డర్లను ముందుగానే ప్లాన్ చేసుకోండి.'
                : 'अपने खाने के ऑर्डर पहले से तय करें।'}
            </p>
          </div>

          <div className="food-card">
            <h3>✨ {t('suggestions')}</h3>
            <p>
              {language === 'English'
                ? 'Discover meals based on your preferences.'
                : language === 'తెలుగు'
                ? 'మీ అభిరుచులకు అనుగుణంగా ఆహారాన్ని కనుగొనండి.'
                : 'अपनी पसंद के अनुसार भोजन खोजें।'}
            </p>
          </div>

          <div className="food-card">
            <h3>🚚 {t('fastDelivery')}</h3>
            <p>
              {language === 'English'
                ? 'Get your favourite food delivered.'
                : language === 'తెలుగు'
                ? 'మీకు ఇష్టమైన ఆహారాన్ని ఇంటి వద్ద పొందండి.'
                : 'अपना पसंदीदा खाना घर पर पाएं।'}
            </p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <h2>🍔 SpeedyFoodie</h2>
        <p>{t('goodFood')}</p>
        <p>© 2026 SpeedyFoodie. All rights reserved.</p>
      </footer>

    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/admin" element={<RestaurantDashboard />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
