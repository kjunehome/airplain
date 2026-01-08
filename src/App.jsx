import React, { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import FlightCard from './components/FlightCard';

import FlightList from './components/FlightList';
import FlightDetailModal from './components/FlightDetailModal';

import koreanAirLogo from './assets/korean_air_logo.svg';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (searchParams) => {
    setLoading(true);
    setSearchResults([]);
    setSelectedFlight(null);

    // Simulate API call
    setTimeout(() => {
      const { destination, date, seatClass } = searchParams;

      // Mock 3 flights for the day
      const mockFlights = [
        {
          id: 1,
          airline: 'KOREAN AIR',
          flightNumber: 'KE081',
          originCity: 'SEOUL',
          originCode: 'ICN',
          destCity: destination.toUpperCase(),
          destCode: destination.substring(0, 3).toUpperCase(),
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
          destCode: destination.substring(0, 3).toUpperCase(),
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
          destCode: destination.substring(0, 3).toUpperCase(),
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

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src={koreanAirLogo} alt="Korean Air" style={{ height: '40px' }} />
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

        {!loading && searchResults.length > 0 && (
          <FlightList flights={searchResults} onSelectFlight={setSelectedFlight} />
        )}

        {selectedFlight && (
          <FlightDetailModal
            flight={selectedFlight}
            onClose={() => setSelectedFlight(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
