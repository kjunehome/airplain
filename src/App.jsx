import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import FlightCard from './components/FlightCard';

function App() {
  const [flightData, setFlightData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (destination) => {
    setLoading(true);
    setFlightData(null);

    // Simulate API call
    setTimeout(() => {
      // Mock data logic based on input (just returns the same data for now)
      setFlightData({
        originCity: 'SEOUL',
        originCode: 'ICN',
        destCity: destination.toUpperCase(),
        destCode: destination.substring(0, 3).toUpperCase(),
        departureTime: '10:00 AM',
        departureZone: 'KST',
        arrivalTime: '11:00 AM',
        arrivalZone: 'EST',
        status: 'On Time'
      });
      setLoading(false);
    }, 1500); // 1.5s delay for realistic feel
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">✈</span>
          AIRPLAIN
        </div>
        <div style={{ fontWeight: 600, color: 'var(--airline-blue)' }}>First Class Experience</div>
      </header>

      <main className="main-content">
        <div className="hero-text">
          <h1 className="title">Where to next?</h1>
          <p className="subtitle">Discover your next destination with premium comfort.</p>
        </div>

        <SearchInput onSearch={handleSearch} />

        {loading && (
          <div style={{
            padding: '1rem 2rem',
            color: 'var(--airline-blue)',
            fontWeight: '600',
            background: 'white',
            borderRadius: '50px',
            boxShadow: 'var(--shadow-lg)'
          }}>
            Searching flights...
          </div>
        )}

        {!loading && flightData && <FlightCard data={flightData} />}
      </main>
    </div>
  );
}

export default App;
