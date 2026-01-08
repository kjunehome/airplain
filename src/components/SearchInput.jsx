import React from 'react';
import './SearchInput.css';

const SearchInput = ({ onSearch }) => {
    const [destination, setDestination] = React.useState('');
    const [date, setDate] = React.useState('');
    const [seatClass, setSeatClass] = React.useState('economy');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (destination.trim() && date && seatClass) {
            onSearch({ destination, date, seatClass });
        } else {
            alert('Please fill in all fields (Destination, Date, and Seat Class).');
        }
    };

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <div className="input-group">
                <label>DESTINATION</label>
                <input
                    type="text"
                    className="search-input"
                    placeholder="City (e.g. JFK)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>

            <div className="divider"></div>

            <div className="input-group">
                <label>DATE</label>
                <input
                    type="date"
                    className="search-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                />
            </div>

            <div className="divider"></div>

            <div className="input-group">
                <label>CLASS</label>
                <select
                    className="search-input"
                    value={seatClass}
                    onChange={(e) => setSeatClass(e.target.value)}
                >
                    <option value="all">All Classes</option>
                    <option value="economy">Economy</option>
                    <option value="prestige">Prestige</option>
                    <option value="first">First Class</option>
                </select>
            </div>

            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    );
};

export default SearchInput;
