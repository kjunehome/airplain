import React from 'react';
import './FlightCard.css';

const FlightCard = ({ data, onSelect, t }) => {
    if (!data || !t) return null;

    return (
        <div className="flight-card">
            {/* Main Ticket Section (Left) */}
            <div className="card-main">
                <div className="flight-header">
                    <div className="airline-info">
                        <span className="airline-name">{data.airline}</span>
                        <span className="flight-num">{data.flightNumber}</span>
                        <span className="duration-badge">{data.duration}</span>
                    </div>
                </div>

                <div className="route">
                    <div className="city">
                        <span className="code">{data.originCode}</span>
                        <span className="time-small">{data.departureTime}</span>
                    </div>
                    <div className="flight-path">
                        <div className="line"></div>
                        <div className="plane-icon">✈</div>
                    </div>
                    <div className="city">
                        <span className="code">{data.destCode}</span>
                        <span className="time-small">{data.arrivalTime}</span>
                    </div>
                </div>

                <div className="seat-badge-container">
                    <span className="seats-left">{data.seatsAvailable} {t.seatsLeft}</span>
                </div>
            </div>

            {/* Perforation Line Visual */}
            <div className="ticket-separator">
                <div className="notch-top"></div>
                <div className="dashed-line"></div>
                <div className="notch-bottom"></div>
            </div>

            {/* Sidebar (Right - Price & Action) */}
            <div className="card-sidebar">
                <div className="price-info">
                    <span className="currency">{t.currency}</span>
                    <span className="amount">{data.price.toLocaleString()}</span>
                </div>
                <button className="select-button" onClick={() => onSelect(data)}>
                    {t.select}
                </button>
            </div>
        </div>
    );
};

export default FlightCard;
