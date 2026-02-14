import './Conservation.css';

function Conservation() {
    return (
        <div className="conservation-page">
            <section className="conservation-hero">
                <div className="container">
                    <h1 className="page-title fade-in"> Conservation & Awareness</h1>
                    <p className="page-subtitle fade-in">
                        Protecting our natural heritage for generations to come
                    </p>
                </div>
            </section>

            <section className="conservation-content section">
                <div className="container">
                    {/* Introduction */}
                    <div className="content-card intro-card">
                        <div className="card-icon">🌍</div>
                        <h2>Our Planet Needs You</h2>
                        <p className="lead-text">
                            India's national parks and wildlife sanctuaries are not just tourist destinations—they are
                            invaluable treasures that sustain life, preserve biodiversity, and maintain the ecological
                            balance of our planet. But they need our protection and care.
                        </p>
                    </div>

                    {/* Ways to Contribute */}
                    <h2 className="section-heading">How You Can Make a Difference</h2>

                    <div className="action-grid">
                        {/* Plant Trees */}
                        <div className="action-card">
                            <div className="action-icon">🌳</div>
                            <h3>Plant Trees</h3>
                            <p>
                                Every tree planted is a step towards a greener future. Trees absorb carbon dioxide,
                                provide oxygen, prevent soil erosion, and create habitats for countless species.
                            </p>
                            <ul className="action-list">
                                <li>Participate in local tree plantation drives</li>
                                <li>Plant native species in your area</li>
                                <li>Support organizations working on afforestation</li>
                                <li>Adopt and nurture saplings</li>
                            </ul>
                        </div>

                        {/* Save Wildlife */}
                        <div className="action-card">
                            <div className="action-icon">🐅</div>
                            <h3>Stop Poaching & Wildlife Crime</h3>
                            <p>
                                Poaching threatens our magnificent wildlife. Tigers, rhinos, elephants, and countless
                                other species are endangered due to illegal hunting and wildlife trade.
                            </p>
                            <ul className="action-list">
                                <li>Report any suspicious wildlife-related activities</li>
                                <li>Support anti-poaching initiatives</li>
                                <li>Never buy products made from endangered species</li>
                                <li>Spread awareness in your community</li>
                            </ul>
                        </div>

                        {/* Eco-Friendly Living */}
                        <div className="action-card">
                            <div className="action-icon">♻️</div>
                            <h3>Use Eco-Friendly Products</h3>
                            <p>
                                Small changes in our daily lives can have a massive impact on the environment.
                                Choose sustainable alternatives and reduce your ecological footprint.
                            </p>
                            <ul className="action-list">
                                <li>Use reusable bags, bottles, and containers</li>
                                <li>Choose biodegradable products</li>
                                <li>Reduce single-use plastics</li>
                                <li>Support eco-friendly brands</li>
                            </ul>
                        </div>

                        {/* Reduce Pollution */}
                        <div className="action-card">
                            <div className="action-icon">🌊</div>
                            <h3>stop Pollution</h3>
                            <p>
                                Pollution damages our ecosystems, contaminates water sources, and harms wildlife.
                                We must act now to reduce pollution in all its forms.
                            </p>
                            <ul className="action-list">
                                <li>Use public transport or carpooling</li>
                                <li>Properly dispose of waste and recycle</li>
                                <li>Avoid burning plastics and other materials</li>
                                <li>Conserve water and energy</li>
                            </ul>
                        </div>

                        {/* Responsible Tourism */}
                        <div className="action-card">
                            <div className="action-icon">📸</div>
                            <h3>Practice Responsible Tourism</h3>
                            <p>
                                When visiting national parks and sanctuaries, be a responsible visitor.
                                Respect wildlife and follow all guidelines.
                            </p>
                            <ul className="action-list">
                                <li>Maintain distance from wild animals</li>
                                <li>Do not litter—carry back all waste</li>
                                <li>Stay on designated paths</li>
                                <li>Do not feed or disturb wildlife</li>
                            </ul>
                        </div>

                        {/* Spread Awareness */}
                        <div className="action-card">
                            <div className="action-icon">📢</div>
                            <h3>Spread Awareness</h3>
                            <p>
                                Education and awareness are powerful tools for conservation. Share your knowledge
                                and inspire others to protect nature.
                            </p>
                            <ul className="action-list">
                                <li>Educate children about wildlife conservation</li>
                                <li>Share conservation messages on social media</li>
                                <li>Participate in environmental campaigns</li>
                                <li>Volunteer with conservation organizations</li>
                            </ul>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <div className="cta-icon">💚</div>
                        <h2>Every Action Counts</h2>
                        <p>
                            Conservation is not just the responsibility of the government or organizations—it starts
                            with each one of us. Your small efforts today will create a better tomorrow for our planet
                            and future generations.
                        </p>
                    </div>

                    {/* Ministry Letter */}
                    <div className="ministry-letter">
                        <div className="letter-header">
                            <img src="/images/national-emblem.jpg" alt="National Emblem" className="emblem" />
                            <h3>A Message from the Ministry</h3>
                            <p className="ministry-name">
                                Ministry of Environment, Forest and Climate Change<br />
                                Government of India
                            </p>
                        </div>

                        <div className="letter-content">
                            <p className="letter-greeting">Dear Citizens of India,</p>

                            <p>
                                It fills our hearts with pride to witness the growing interest in India's magnificent
                                national parks and wildlife sanctuaries. These protected areas are home to some of the
                                world's most incredible biodiversity—from the majestic Bengal tiger to the one-horned
                                rhinoceros, from snow leopards in the Himalayas to the unique mangrove forests of the Sundarbans.
                            </p>

                            <p>
                                But with this pride comes great responsibility. <strong>These natural treasures are not
                                    just ours to enjoy—they are ours to protect.</strong> Every species lost, every forest
                                cleared, every river polluted is an irreversible loss to humanity. The choices we make
                                today will determine whether future generations will experience the wonder of seeing a
                                tiger in the wild or the beauty of a pristine forest.
                            </p>

                            <p>
                                We urge each and every one of you to become guardians of nature. Plant a tree. Reduce
                                your plastic use. Speak out against pollution and poaching. Teach your children to love
                                and respect all living beings. Visit our national parks responsibly and spread the message
                                of conservation far and wide.
                            </p>

                            <p>
                                <strong>Remember, we do not inherit the Earth from our ancestors—we borrow it from our
                                    children.</strong> Let us ensure that what we pass on to them is as beautiful, diverse,
                                and vibrant as what we have been blessed with.
                            </p>

                            <p className="letter-closing">
                                Together, we can make a difference. Together, we can protect India's natural heritage.
                            </p>

                            <p className="letter-signature">
                                With hope and determination,<br />
                                <strong>Ministry of Environment, Forest and Climate Change</strong><br />
                                <em>Government of India</em>
                            </p>
                        </div>

                        <div className="letter-footer">
                            <p className="quote">
                                "The Earth does not belong to us; we belong to the Earth."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Conservation;
