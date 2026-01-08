import React from 'react';
import FlightCard from './FlightCard';

const FlightList = ({ flights, onSelectFlight, t }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', alignItems: 'center' }}>
            {flights.map(flight => (
                <FlightCard
                    key={flight.id}
                    data={flight}
                    onSelect={onSelectFlight}
                    t={t}
                />
            ))}
        </div>
    );
};

export default FlightList;
