'use client';

import React from 'react';
import { useFormViewModel } from '../viewmodels/useFormViewModel';

const InterestModal = ({ isOpen, onClose }) => {
    const { formData, status, isSubmitting, handleChange, handleSubmit, resetForm } = useFormViewModel();

    // Handle modal close - reset form if closing manually (not after success)
    const handleClose = () => {
        // Only reset if not a successful submission
        if (status.type !== 'success') {
            resetForm();
        } else {
            // If closing after success, just clear status
            resetForm();
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={(e) => { 
            if (e.target === e.currentTarget) {
                handleClose();
            }
        }}>
            <div className="modal-content">
                <button 
                    className="close-modal" 
                    onClick={handleClose}
                    aria-label="Close modal"
                    type="button"
                >
                    &times;
                </button>

                <div className="form-container">
                    <h2 style={{ color: 'var(--accent-color)', textAlign: 'center', marginBottom: '1.5rem' }}>
                        Join Our Organic Community
                    </h2>
                    <form onSubmit={(e) => handleSubmit(e, onClose)}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="name@example.com"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '1rem' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Interest'}
                        </button>

                        {status.message && (
                            <p className="error-msg" style={{
                                textAlign: 'center',
                                height: 'auto',
                                color: status.type === 'success' ? 'green' : '#d32f2f',
                                display: 'block',
                                marginTop: '1rem'
                            }}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InterestModal;
