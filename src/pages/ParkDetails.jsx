import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getParkById } from '../data/parks';
import { FiArrowLeft, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { GiLion } from 'react-icons/gi';
import './ParkDetails.css';

function ParkDetails() {
    const { id } = useParams();
    const park = getParkById(id);

    const [wikiContent, setWikiContent] = useState(null);
    const [wikiLoading, setWikiLoading] = useState(true);
    const [wikiError, setWikiError] = useState(null);

    useEffect(() => {
        if (!park) return;

        // Fetch Wikipedia content
        const fetchWikiContent = async () => {
            try {
                setWikiLoading(true);
                setWikiError(null);

                // Wikipedia API endpoint
                const searchTerm = park.name;
                const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`;

                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Failed to fetch Wikipedia content');
                }

                const data = await response.json();
                setWikiContent(data);
            } catch (error) {
                console.error('Error fetching Wikipedia:', error);
                setWikiError('Could not load additional information from Wikipedia');
            } finally {
                setWikiLoading(false);
            }
        };

        fetchWikiContent();
    }, [park]);

    if (!park) {
        return <Navigate to="/parks" replace />;
    }

    return (
        <div className="park-details-page">
            <div className="park-hero" style={{ backgroundImage: `url(${park.image})` }}>
                <div className="park-hero-overlay"></div>
                <div className="container park-hero-content">
                    <Link to="/parks" className="back-button">
                        <FiArrowLeft /> Back to All Parks
                    </Link>
                    <h1 className="park-name">{park.name}</h1>
                    <div className="park-meta">
                        <span className="badge badge-accent">{park.region} India</span>
                        <span className="badge badge-primary">{park.state}</span>
                    </div>
                </div>
            </div>

            <div className="park-content section">
                <div className="container">
                    <div className="park-details-grid">
                        <div className="park-main-content">
                            <section className="detail-section">
                                <h2>About this Park</h2>

                                {wikiLoading ? (
                                    <div className="wiki-loading">
                                        <div className="loader"></div>
                                        <p>Loading information from Wikipedia...</p>
                                    </div>
                                ) : wikiError ? (
                                    <div className="wiki-error">
                                        <p className="error-message">{wikiError}</p>
                                        <p className="park-description">{park.description}</p>
                                    </div>
                                ) : wikiContent ? (
                                    <div className="wiki-content">
                                        <p className="park-description">{wikiContent.extract || park.description}</p>

                                        {wikiContent.thumbnail && (
                                            <div className="wiki-image">
                                                <img src={wikiContent.thumbnail.source} alt={park.name} />
                                            </div>
                                        )}

                                        {wikiContent.content_urls && (
                                            <a
                                                href={wikiContent.content_urls.desktop.page}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="wiki-link"
                                            >
                                                Read more on Wikipedia →
                                            </a>
                                        )}
                                    </div>
                                ) : (
                                    <p className="park-description">{park.description}</p>
                                )}
                            </section>

                            <section className="detail-section">
                                <h2>Famous Wildlife</h2>
                                <div className="wildlife-tags">
                                    {park.famousFor.map((wildlife, index) => (
                                        <span key={index} className="wildlife-tag">
                                            <GiLion /> {wildlife}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section className="detail-section">
                                <h2>Best Time to Visit</h2>
                                <p className="visit-time">
                                    <FiCalendar className="icon" />
                                    {park.bestTime}
                                </p>
                            </section>
                        </div>

                        <aside className="park-sidebar">
                            <div className="info-card">
                                <h3>Quick Facts</h3>
                                <div className="fact-item">
                                    <span className="fact-label"><FiMapPin /> Location</span>
                                    <span className="fact-value">{park.state}</span>
                                </div>
                                <div className="fact-item">
                                    <span className="fact-label">📏 Area</span>
                                    <span className="fact-value">{park.area}</span>
                                </div>
                                <div className="fact-item">
                                    <span className="fact-label">📆 Established</span>
                                    <span className="fact-value">{park.established}</span>
                                </div>
                                <div className="fact-item">
                                    <span className="fact-label">🗺️ Region</span>
                                    <span className="fact-value">{park.region}</span>
                                </div>
                            </div>

                            {/* Google Maps Location */}
                            {park.coordinates && (
                                <div className="info-card">
                                    <h3>📍 Park Location</h3>
                                    <div className="map-container">
                                        <iframe
                                            title={`Map of ${park.name}`}
                                            width="100%"
                                            height="300"
                                            frameBorder="0"
                                            style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                                            src={`https://www.google.com/maps?q=${park.coordinates.lat},${park.coordinates.lng}&hl=en&z=12&output=embed`}
                                            allowFullScreen
                                        ></iframe>
                                        <a
                                            href={`https://www.google.com/maps?q=${park.coordinates.lat},${park.coordinates.lng}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="map-link"
                                        >
                                            Open in Google Maps →
                                        </a>
                                    </div>
                                </div>
                            )}

                            <div className="info-card plan-card">
                                <h3>Plan Your Visit</h3>
                                <p className="plan-text">
                                    Contact the local forest department for permits, timings, and safari bookings.
                                </p>
                                <a href="#" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                    Get Visitor Information
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParkDetails;
