import { useState } from 'react';
import { Star, Clock, BookOpen } from 'lucide-react';
import { MOCK_THERAPISTS } from '../utils/mockData';
import './TherapistsPage.css';
import { Link } from 'react-router-dom';


export const TherapistsPage: React.FC = () => {
  const [filteredSpecialization, setFilteredSpecialization] = useState<string>('');
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');

  const specializations = Array.from(
    new Set(MOCK_THERAPISTS.flatMap((t) => t.specialization))
  );

  let filteredTherapists = MOCK_THERAPISTS;
  if (filteredSpecialization) {
    filteredTherapists = filteredTherapists.filter((t) =>
      t.specialization.includes(filteredSpecialization)
    );
  }

  if (sortBy === 'rating') {
    filteredTherapists = [...filteredTherapists].sort((a, b) => b.rating - a.rating);
  } else {
    filteredTherapists = [...filteredTherapists].sort((a, b) => a.sessionPrice - b.sessionPrice);
  }

  return (
    <div className="therapists-page">
      <div className="container">
        <div className="therapists-header">
          <h1>Find Your Therapist</h1>
          <p>Connect with licensed mental health professionals specializing in your needs</p>
        </div>

        <div className="therapists-controls">
          <div className="filter-group">
            <label>Filter by Specialization</label>
            <select
              value={filteredSpecialization}
              onChange={(e) => setFilteredSpecialization(e.target.value)}
              className="form-select"
            >
              <option value="">All Specializations</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'rating' | 'price')} className="form-select">
              <option value="rating">Highest Rating</option>
              <option value="price">Lowest Price</option>
            </select>
          </div>
        </div>

        <div className="therapists-grid">
          {filteredTherapists.map((therapist) => (
            <div key={therapist.id} className="therapist-profile-card">
              <div className="therapist-header-section">
                <img src={therapist.image} alt={therapist.name} className="therapist-photo" />
                <div className="therapist-rating-badge">
                  <Star fill="currentColor" size={16} />
                  {therapist.rating.toFixed(1)}
                </div>
              </div>

              <div className="therapist-details">
                <h3>{therapist.name}</h3>
                <p className="credentials">{therapist.credentials}</p>

                <div className="spec-tags">
                  {therapist.specialization.map((spec) => (
                    <span key={spec} className="spec-tag">
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="bio">{therapist.bio}</p>

                <div className="therapist-info-row">
                  <span>
                    <Clock size={16} />
                    {therapist.experience} years exp.
                  </span>
                  <span>
                    ৳ {therapist.sessionPrice}/session
                  </span>
                </div>

                <div className="therapist-availability">
                  <BookOpen size={16} />
                  <span>{therapist.availability.join(', ')}</span>
                </div>

                <button className="btn btn-primary btn-block">Book Appointment</button>
                <Link to="/chatbot"><button className="btn btn-primary btn-block">Chat</button></Link>
                
              </div>
            </div>
          ))}
        </div>

        {filteredTherapists.length === 0 && (
          <div className="no-results">
            <p>No therapists found matching your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TherapistsPage;
