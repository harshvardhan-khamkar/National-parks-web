import { Link } from 'react-router-dom';
import './ParkCard.css';

function ParkCard({ park }) {
    return (
        <Link to={`/park/${park.id}`} className="park-card">
            <div className="park-card-image-wrapper">
                <img
                    src={park.image}
                    alt={park.name}
                    className="park-card-image"
                    loading="lazy"
                />
                <div className="park-card-overlay">
                    <span className="badge badge-primary">{park.region}</span>
                </div>
            </div>

            <div className="park-card-content">
                <h3 className="park-card-title">{park.name}</h3>
                <p className="park-card-location">{park.state}</p>
                <p className="park-card-description">{park.description.substring(0, 120)}...</p>

                <div className="park-card-tags">
                    {park.famousFor.slice(0, 2).map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="park-card-footer">
                    <span className="park-card-area">Area: {park.area}</span>
                    <span className="park-card-link">Learn More →</span>
                </div>
            </div>
        </Link>
    );
}

export default ParkCard;
