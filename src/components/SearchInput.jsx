import React from 'react';
import './SearchInput.css';

const SearchInput = ({ onSearch, t }) => {
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

    if (!t) return null; // Safe guard

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <div className="input-group">
                <label>{t.labelDest}</label>
                <input
                    type="text"
                    className="search-input"
                    placeholder={t.placeholderDest}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>

            <div className="divider"></div>

            <div className="input-group">
                <label>{t.labelDate}</label>
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
                <label>{t.labelClass}</label>
                <select
                    className="search-input"
                    value={seatClass}
                    onChange={(e) => setSeatClass(e.target.value)}
                >
                    <option value="all">{t.optionAll}</option>
                    <option value="economy">{t.optionEconomy}</option>
                    <option value="prestige">{t.optionPrestige}</option>
                    <option value="first">{t.optionFirst}</option>
                </select>
            </div>

            <button type="submit" className="search-button">
                {t.btnSearch}
            </button>
        </form>
    );
};

export default SearchInput;
