import React from 'react';
import './FlightDetailModal.css';

const FlightDetailModal = ({ flight, onClose }) => {
    if (!flight) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Flight Details</h2>
                    <span className="flight-number">{flight.airline} {flight.flightNumber}</span>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    <div className="route-detail">
                        <div className="city-block">
                            <span className="time-large">{flight.departureTime}</span>
                            <span className="code-large">{flight.originCode}</span>
                            <span className="city-name">{flight.originCity}</span>
                        </div>
                        <div className="path-visual">
                            <span className="duration">{flight.duration}</span>
                            <div className="line-visual"></div>
                            <span className="non-stop">Non-stop</span>
                        </div>
                        <div className="city-block">
                            <span className="time-large">{flight.arrivalTime}</span>
                            <span className="code-large">{flight.destCode}</span>
                            <span className="city-name">{flight.destCity}</span>
                        </div>
                    </div>

                    <div className="info-grid">
                        <div className="info-item">
                            <span className="label">Date</span>
                            <span className="value">{flight.date}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Aircraft</span>
                            <span className="value">Boeing 787-9</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Class</span>
                            <span className="value" style={{ textTransform: 'capitalize' }}>{flight.seatClass}</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Gate</span>
                            <span className="value">TBD</span>
                        </div>
                    </div>

                    <div className="price-section">
                        <div className="price-label">Total Price</div>
                        <div className="price-value">{flight.price.toLocaleString()} KRW</div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="secondary-button" onClick={onClose}>Close</button>
                    <button className="primary-button">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default FlightDetailModal;
