import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4>About Us</h4>
                        <p>
                            Official site of Indian Wildlife & Forests, under the Ministry of Environment,
                            Forest and Climate Change, Government of India.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/parks">Explore Parks</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">National Parks</a></li>
                            <li><a href="#">Wildlife Sanctuaries</a></li>
                            <li><a href="#">Conservation Projects</a></li>
                            <li><a href="#">Research Papers</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact Info</h4>
                        <p>
                            Ministry of Environment, Forest and Climate Change<br />
                            Indira Paryavaran Bhawan, Jor Bagh Road<br />
                            New Delhi - 110003
                        </p>
                        <p className="contact-detail">Email: info@moefcc.gov.in</p>
                        <p className="contact-detail">Phone: +91-9999999999</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Ministry of Environment, Forest and Climate Change, Government of India. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
