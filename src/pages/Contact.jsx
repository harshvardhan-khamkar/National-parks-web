import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, you would send this data to a backend
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title fade-in">Contact Us</h1>
                    <p className="page-subtitle fade-in">
                        Get in touch with us for any queries or information
                    </p>
                </div>
            </section>

            <section className="contact-content section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrapper">
                            <h2>Send us a Message</h2>
                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">✓</div>
                                    <h3>Message Sent Successfully!</h3>
                                    <p>We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="6"
                                            className="form-textarea"
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-submit">
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="contact-info-wrapper">
                            <div className="contact-info-card">
                                <h3>Contact Information</h3>
                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <div>
                                        <strong>Address</strong>
                                        <p>
                                            Ministry of Environment, Forest and Climate Change<br />
                                            Indira Paryavaran Bhawan, Jor Bagh Road<br />
                                            New Delhi - 110003, India
                                        </p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📧</span>
                                    <div>
                                        <strong>Email</strong>
                                        <p>info@moefcc.gov.in</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <span className="info-icon">📞</span>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91-9999999999</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <h3>Office Hours</h3>
                                <p className="office-hours">
                                    <strong>Monday - Friday:</strong> 9:00 AM - 5:30 PM<br />
                                    <strong>Saturday - Sunday:</strong> Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
