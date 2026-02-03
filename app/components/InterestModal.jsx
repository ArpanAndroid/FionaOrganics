'use client';

import React from 'react';
import { useFormViewModel } from '../viewmodels/useFormViewModel';

const InterestModal = ({ isOpen, onClose }) => {
    const { formData, status, isSubmitting, handleChange, handleSubmit, resetForm } = useFormViewModel();

    const handleClose = () => {
        resetForm();
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
                    ✕
                </button>

                <div className="form-container">
                    <span className="section-subtitle" style={{ fontSize: '0.75rem' }}>Join the community</span>
                    <h2 style={{
                        color: 'var(--primary-color)',
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        fontFamily: 'Playfair Display, serif'
                    }}>
                        Get in Touch
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        fontSize: '0.95rem'
                    }}>
                        Discover the purity of nature. Leave your details and we will reach out to you shortly.
                    </p>

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
                                placeholder="e.g. Arpan Chakraborty"
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
                                placeholder="e.g. +91 89006 86683"
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
                            style={{ width: '100%', marginTop: '1rem', padding: '20px' }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Processing...' : 'Send Inquiry'}
                        </button>

                        {status.message && (
                            <div style={{
                                textAlign: 'center',
                                padding: '15px',
                                borderRadius: '12px',
                                background: status.type === 'success' ? 'rgba(26, 77, 46, 0.05)' : 'rgba(211, 47, 47, 0.05)',
                                color: status.type === 'success' ? 'var(--primary-color)' : '#d32f2f',
                                fontSize: '0.9rem',
                                marginTop: '1.5rem',
                                fontWeight: '500'
                            }}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InterestModal;
