import { Link } from 'react-router-dom';
import { getFeaturedParks } from '../data/parks';
import ParkCard from '../components/ParkCard';
import './Home.css';

function Home() {
    const featuredParks = getFeaturedParks();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in">
                        Discover India's<br />Natural Treasures
                    </h1>
                    <p className="hero-subtitle fade-in">
                        Explore biodiverse ecosystems across 106 national parks and 573 wildlife sanctuaries
                    </p>
                    <div className="hero-buttons fade-in">
                        <Link to="/parks" className="btn btn-primary">Explore All Parks</Link>
                        <Link to="/about" className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section section">
                <div className="container">
                    <div className="stats-grid stagger-children">
                        <div className="stat-card">
                            <div className="stat-number">106</div>
                            <div className="stat-label">National Parks</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">573</div>
                            <div className="stat-label">Wildlife Sanctuaries</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Tiger Reserves</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">18</div>
                            <div className="stat-label">Biosphere Reserves</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Parks Section */}
            <section className="featured-section section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Featured National Parks</h2>
                        <p className="section-description">
                            Explore some of India's most iconic wildlife destinations
                        </p>
                    </div>

                    <div className="parks-grid stagger-children">
                        {featuredParks.map((park) => (
                            <ParkCard key={park.id} park={park} />
                        ))}
                    </div>

                    <div className="section-footer text-center">
                        <Link to="/parks" className="btn btn-accent">View All Parks →</Link>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="gallery-preview section" style={{ background: 'linear-gradient(135deg, #E8F5EC 0%, #F9FAFB 100%)' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Wildlife Gallery</h2>
                        <p className="section-description">
                            Witness the stunning biodiversity of India's protected areas
                        </p>
                    </div>

                    <div className="gallery-grid">
                        <img src="/images/jim-corbett.jpeg" alt="Wildlife" className="gallery-image" />
                        <img src="/images/kaziranga.jpg" alt="Wildlife" className="gallery-image" />
                        <img src="/images/ranthambor.jpg" alt="Wildlife" className="gallery-image" />
                        <img src="/images/wildlife1.jpg" alt="Wildlife" className="gallery-image" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Explore India's Wilderness?</h2>
                        <p>Discover detailed information about every national park and plan your next adventure</p>
                        <Link to="/parks" className="btn btn-primary btn-lg">Start Exploring</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
