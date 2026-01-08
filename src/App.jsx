import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import FlightCard from './components/FlightCard';

import FlightList from './components/FlightList';
import FlightDetailModal from './components/FlightDetailModal';

import koreanAirLogo from './assets/korean_air_logo.svg';
import heroBg from './assets/hero_bg.png';
import seoulImg from './assets/seoul.png';
import newYorkImg from './assets/new_york.png';
import aircraftImg from './assets/aircraft_787.png';
import { translations } from './constants/translations';

// Map for destination images
const destinationImages = {
  'ICN': seoulImg,
  'SEL': seoulImg,
  'JFK': newYorkImg,
  'NYC': newYorkImg
};

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('ko'); // Default to Korean

  const t = translations[lang];

  const handleSearch = (searchParams) => {
    setLoading(true);
    setSearchResults([]);
    setSelectedFlight(null);

    // Simulate API call
    setTimeout(() => {
      const { destination, date, seatClass } = searchParams;
      const destCode = destination.substring(0, 3).toUpperCase();

      const destImage = destinationImages[destCode] || (destCode === 'JFK' ? newYorkImg : seoulImg);

      // Mock 3 flights for the day
      const mockFlights = [
        {
          id: 1,
          airline: 'KOREAN AIR',
          flightNumber: 'KE081',
          originCity: 'SEOUL',
          originCode: 'ICN',
          destCity: destination.toUpperCase(),
          destCode: destCode,
          destImage: destImage,
          departureTime: '10:00',
          arrivalTime: '11:20', // Mock arrival
          duration: '13h 20m',
          date: date,
          seatsAvailable: Math.floor(Math.random() * 10) + 1,
          price: seatClass === 'first' ? 12500000 : seatClass === 'prestige' ? 4500000 : 1850000,
          seatClass: seatClass
        },
        {
          id: 2,
          airline: 'KOREAN AIR',
          flightNumber: 'KE085',
          originCity: 'SEOUL',
          originCode: 'ICN',
          destCity: destination.toUpperCase(),
          destCode: destCode,
          destImage: destImage,
          departureTime: '14:30',
          arrivalTime: '15:50',
          duration: '13h 20m',
          date: date,
          seatsAvailable: Math.floor(Math.random() * 10) + 1,
          price: seatClass === 'first' ? 12800000 : seatClass === 'prestige' ? 4600000 : 1950000,
          seatClass: seatClass
        },
        {
          id: 3,
          airline: 'KOREAN AIR',
          flightNumber: 'KE251',
          originCity: 'SEOUL',
          originCode: 'ICN',
          destCity: destination.toUpperCase(),
          destCode: destCode,
          destImage: destImage,
          departureTime: '20:00',
          arrivalTime: '21:30',
          duration: '13h 30m',
          date: date,
          seatsAvailable: Math.floor(Math.random() * 5) + 1,
          price: seatClass === 'first' ? 11500000 : seatClass === 'prestige' ? 4200000 : 1650000,
          seatClass: seatClass
        }
      ];

      setSearchResults(mockFlights);
      setLoading(false);
    }, 1500);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'ko' ? 'en' : 'ko');
  };

  return (
    <div className="app-container">
      {/* Top Utility Bar */}
      <div className="top-utility-bar" style={{
        background: '#f8fafc',
        padding: '0.5rem 2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '1rem',
        fontSize: '0.8rem',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <a href="#" style={{ textDecoration: 'none', color: '#64748b' }}>{t.login}</a>
        <span style={{ color: '#cbd5e1' }}>|</span>
        <button
          onClick={toggleLanguage}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#0065b3',
            fontWeight: 600,
            padding: 0
          }}
        >
          {lang === 'ko' ? 'English' : '한국어'}
        </button>
      </div>

      <header className="header">
        <div className="logo">
          <img src={koreanAirLogo} alt="Korean Air" style={{ height: '40px' }} />
        </div>
        <div style={{ fontWeight: 600, color: 'var(--airline-blue)' }}>{t.headerTitle}</div>
      </header>

      {/* Hero Section with Background Image */}
      <div className="hero-section" style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: '-3rem'
      }}>
        <div className="hero-text" style={{ textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          <h1 className="title" style={{ color: 'white', marginBottom: '0.5rem' }}>{t.heroTitle}</h1>
          <p className="subtitle" style={{ color: 'white', opacity: 0.9 }}>{t.heroSubtitle}</p>
        </div>
      </div>

      <main className="main-content" style={{ marginTop: '0' }}>
        <div style={{ transform: 'translateY(-50%)' }}>
          <SearchInput onSearch={handleSearch} t={t} />
        </div>

        {loading && (
          <div style={{
            padding: '1rem 2rem',
            color: 'var(--airline-blue)',
            fontWeight: '600',
            background: 'white',
            borderRadius: '50px',
            boxShadow: 'var(--shadow-lg)',
            marginTop: '2rem'
          }}>
            {t.searching}
          </div>
        )}

        {!loading && searchResults.length > 0 && (
          <FlightList flights={searchResults} onSelectFlight={setSelectedFlight} t={t} />
        )}

        {selectedFlight && (
          <FlightDetailModal
            flight={selectedFlight}
            onClose={() => setSelectedFlight(null)}
            t={t}
          />
        )}
      </main>
    </div>
  );
}

export default App;
