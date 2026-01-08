import React from 'react';
import './FlightCard.css';

const FlightCard = ({ data }) => {
    if (!data) return null;

    return (
        <div className="flight-card glass-panel">
            <div className="route">
                <div className="city">
                    <span className="code">{data.originCode}</span>
                    <span className="name">{data.originCity}</span>
                </div>
                <div className="flight-path">
                    <div className="plane-icon">✈</div>
                    <div className="line"></div>
                </div>
                <div className="city">
                    <span className="code">{data.destCode}</span>
                    <span className="name">{data.destCity}</span>
                </div>
            </div>

            <div className="details">
                <div className="detail-item">
                    <span className="label">Departure</span>
                    <span className="time">{data.departureTime}</span>
                    <span className="zone">{data.departureZone}</span>
                </div>
                <div className="detail-item">
                    <span className="label">Arrival</span>
                    <span className="time">{data.arrivalTime}</span>
                    <span className="zone">{data.arrivalZone}</span>
                </div>
            </div>

            <div className="status">
                <span className="status-badge on-time">On Time</span>
            </div>
        </div>
    );
};

export default FlightCard;
