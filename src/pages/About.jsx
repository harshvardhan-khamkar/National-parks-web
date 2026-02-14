import './About.css';

function About() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title fade-in">About Us</h1>
                    <p className="page-subtitle fade-in">
                        Protecting India's Natural Heritage for Future Generations
                    </p>
                </div>
            </section>

            <section className="about-content section">
                <div className="container">
                    <div className="content-card">
                        <h2>Welcome to Indian Wildlife & Forests</h2>
                        <p>
                            This is the official tourist guide for India's national parks and wildlife sanctuaries,
                            under the Ministry of Environment, Forest and Climate Change (MoEFCC), Government of India.
                        </p>
                        <p>
                            We are committed to raising awareness about India's rich biodiversity and promoting
                            conservation of our natural heritage. Through this platform, we aim to help visitors
                            discover and explore the incredible wildlife sanctuaries and national parks across the country.
                        </p>
                    </div>

                    <div className="content-card">
                        <h2>Our Mission</h2>
                        <ul className="mission-list">
                            <li>Conserve India's unique biodiversity and natural ecosystems</li>
                            <li>Promote sustainable eco-tourism and wildlife awareness</li>
                            <li>Protect endangered species and their habitats</li>
                            <li>Engage communities in conservation efforts</li>
                            <li>Educate visitors about responsible wildlife tourism</li>
                        </ul>
                    </div>

                    <div className="stats-showcase">
                        <div className="stat-box">
                            <h3>106</h3>
                            <p>National Parks protecting diverse ecosystems</p>
                        </div>
                        <div className="stat-box">
                            <h3>573</h3>
                            <p>Wildlife Sanctuaries across the country</p>
                        </div>
                        <div className="stat-box">
                            <h3>50+</h3>
                            <p>Tiger Reserves for tiger conservation</p>
                        </div>
                        <div className="stat-box">
                            <h3>18</h3>
                            <p>Biosphere Reserves recognized by UNESCO</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
