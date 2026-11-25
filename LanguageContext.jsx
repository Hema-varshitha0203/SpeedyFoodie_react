
import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

const translations = {
  English: {
    home: 'Home',
    restaurants: 'Restaurants',
    suggestions: 'Smart Suggestions',
    orders: 'My Orders',
    admin: 'Admin Dashboard',
    features: 'Features',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    orderNow: 'Order Now',
    welcome: 'Delicious Food,',
    delivered: 'Delivered Fast!',
    explore: 'Explore Our Food',
    choose: 'Choose your favourite category',
    whyChoose: 'Why Choose SpeedyFoodie?',
    schedule: 'Schedule Your Meal',
    fastDelivery: 'Fast Delivery',
    goodFood: 'Good Food. Great Mood. Fast Delivery.'
  },

  తెలుగు: {
    home: 'హోమ్',
    restaurants: 'రెస్టారెంట్లు',
    suggestions: 'స్మార్ట్ సూచనలు',
    orders: 'నా ఆర్డర్లు',
    admin: 'అడ్మిన్ డాష్‌బోర్డ్',
    features: 'ఫీచర్లు',
    contact: 'సంప్రదించండి',
    login: 'లాగిన్',
    register: 'రిజిస్టర్',
    orderNow: 'ఇప్పుడే ఆర్డర్ చేయండి',
    welcome: 'రుచికరమైన ఆహారం,',
    delivered: 'వేగంగా డెలివరీ!',
    explore: 'మా ఆహారాన్ని చూడండి',
    choose: 'మీకు ఇష్టమైన వంటకాన్ని ఎంచుకోండి',
    whyChoose: 'SpeedyFoodie నే ఎందుకు ఎంచుకోవాలి?',
    schedule: 'మీ భోజనాన్ని షెడ్యూల్ చేయండి',
    fastDelivery: 'వేగవంతమైన డెలివరీ',
    goodFood: 'మంచి ఆహారం. మంచి ఆనందం. వేగవంతమైన డెలివరీ.'
  },

  हिन्दी: {
    home: 'होम',
    restaurants: 'रेस्तरां',
    suggestions: 'स्मार्ट सुझाव',
    orders: 'मेरे ऑर्डर',
    admin: 'एडमिन डैशबोर्ड',
    features: 'विशेषताएं',
    contact: 'संपर्क करें',
    login: 'लॉगिन',
    register: 'रजिस्टर',
    orderNow: 'अभी ऑर्डर करें',
    welcome: 'स्वादिष्ट खाना,',
    delivered: 'तेज़ डिलीवरी!',
    explore: 'हमारा खाना देखें',
    choose: 'अपना पसंदीदा खाना चुनें',
    whyChoose: 'SpeedyFoodie क्यों चुनें?',
    schedule: 'अपना भोजन शेड्यूल करें',
    fastDelivery: 'तेज़ डिलीवरी',
    goodFood: 'अच्छा खाना। अच्छा मूड। तेज़ डिलीवरी।'
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English')

  const t = (key) => translations[language][key] || key

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
