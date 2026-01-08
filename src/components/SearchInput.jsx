import React from 'react';
import './SearchInput.css';

const SearchInput = ({ onSearch }) => {
    const [destination, setDestination] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (destination.trim()) {
            onSearch(destination);
        }
    };

    return (
        <form className="search-container glass-panel" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-input"
                placeholder="Enter destination (e.g., JFK, LHR)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
            />
            <button type="submit" className="search-button">
                Find Flights
            </button>
        </form>
    );
};

export default SearchInput;
