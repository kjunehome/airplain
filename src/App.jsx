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
      <h1 className="title">AIRPLAIN</h1>

      <SearchInput onSearch={handleSearch} />

      {loading && (
        <div className="glass-panel" style={{ padding: '1rem 2rem', borderRadius: '50px', color: 'var(--accent-primary)' }}>
          Searching flights...
        </div>
      )}

      {!loading && flightData && <FlightCard data={flightData} />}
    </div>
  );
}

export default App;
