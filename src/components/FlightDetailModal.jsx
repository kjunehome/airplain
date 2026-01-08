import React from 'react';
import './FlightDetailModal.css';
import aircraftImg from '../assets/aircraft_787.png';

const FlightDetailModal = ({ flight, onClose, t }) => {
    if (!flight || !t) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{flight.originCode} ✈ {flight.destCode}</h2>
                    <span className="flight-detail-num">{flight.airline} {flight.flightNumber}</span>
                </div>

                <div className="modal-body">
                    <div className="detail-row">
                        <div className="info-item">
                            <span className="label">{t.modalAircraft}</span>
                            <span className="value">Boeing 787-9</span>
                            {/* Aircraft Image */}
                            <img
                                src={aircraftImg}
                                alt="Boeing 787"
                                style={{
                                    width: '100%',
                                    marginTop: '0.5rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                        <div className="info-item">
                            <span className="label">{t.modalClass}</span>
                            <span className="value" style={{ textTransform: 'capitalize' }}>{flight.seatClass}</span>
                        </div>
                    </div>

                    <div className="detail-row">
                        <div className="info-item">
                            <span className="label">{t.modalTime}</span>
                            <div className="time-display">
                                <div className="time-point">
                                    <span className="tp-time">{flight.departureTime}</span>
                                    <span className="tp-city">{flight.originCity} ({flight.originCode})</span>
                                </div>
                                <div className="time-arrow">→</div>
                                <div className="time-point">
                                    <span className="tp-time">{flight.arrivalTime}</span>
                                    <span className="tp-city">{flight.destCity} ({flight.destCode})</span>
                                </div>
                            </div>
                            <div className="detail-duration">{flight.duration}</div>
                        </div>
                    </div>

                    <div className="detail-total">
                        <span className="label">{t.modalPrice}</span>
                        <span className="total-amount">{t.currency} {flight.price.toLocaleString()}</span>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="confirm-button" onClick={onClose}>{t.btnClose}</button>
                </div>
            </div>
        </div>
    );
};

export default FlightDetailModal;
