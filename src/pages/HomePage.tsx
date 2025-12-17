import { Link } from 'react-router-dom';
import { Heart, Shield, Zap, Clock, Users, Award, MessageCircle, Leaf, TrendingUp, Cpu, Activity, Lock, AlertCircle } from 'lucide-react';
import { TESTIMONIALS, MOCK_THERAPISTS } from '../utils/mockData';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Mental Wellbeing Matters</h1>
          <p className="hero-subtitle">
            Compassionate, accessible mental health support tailored to your needs.
            Connect with licensed therapists, practice wellness tools, and prioritize your mental health.
          </p>
          <div className="hero-cta">
            <Link to="/login" className="btn btn-primary btn-lg">
              Start Your Journey
            </Link>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Learn More
            </Link>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
              <Shield size={24} />
              <span>100% Confidential</span>
            </div>
            <div className="hero-feature">
              <Clock size={24} />
              <span>24/7 Support</span>
            </div>
            <div className="hero-feature">
              <Users size={24} />
              <span>Licensed Therapists</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          
        </div>
      </section>

      {/* Emergency Help */}
      <section className="emergency-section">
        <div className="container">
          <div className="emergency-banner">
            <div className="emergency-content">
              <AlertCircle size={32} className="emergency-icon" />
              <div>
                <h3>In Crisis?</h3>
                <p>Get immediate support</p>
              </div>
            </div>
            <a href="tel:988" className="btn btn-danger btn-lg">
              Call 988 (24/7)
            </a>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose MindCare?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><MessageCircle size={32} /></div>
              <h3>Online Therapy</h3>
              <p>Connect with licensed therapists via video, chat, or voice at your convenience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Leaf size={32} /></div>
              <h3>Wellness Tools</h3>
              <p>Access guided meditations, breathing exercises, and CBT resources anytime.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><TrendingUp size={32} /></div>
              <h3>Mood Tracking</h3>
              <p>Monitor your emotional patterns and see tangible progress over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Cpu size={32} /></div>
              <h3>AI Assistant</h3>
              <p>Get personalized recommendations and immediate support from our AI wellness coach.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Activity size={32} /></div>
              <h3>Progress Insights</h3>
              <p>Visualize your mental health journey with detailed analytics and reports.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Lock size={32} /></div>
              <h3>Privacy First</h3>
              <p>Your data is encrypted, secure, and compliant with healthcare privacy standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Showcase */}
      <section className="therapists-section">
        <div className="container">
          <h2 className="section-title">Meet Our Licensed Therapists</h2>
          <div className="therapists-grid">
            {MOCK_THERAPISTS.slice(0, 3).map((therapist) => (
              <div key={therapist.id} className="therapist-card">
                <img src={therapist.image} alt={therapist.name} className="therapist-image" />
                <h3>{therapist.name}</h3>
                <p className="therapist-spec">{therapist.specialization.join(', ')}</p>
                <div className="therapist-rating">
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.round(therapist.rating) ? 'star filled' : 'star'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-value">{therapist.rating}</span>
                </div>
                <p className="therapist-bio">{therapist.bio}</p>
                <Link to="/therapists" className="btn btn-primary btn-sm">
                  View Profile
                </Link>
              </div>
            ))}
          </div>
          <div className="view-all-therapists">
            <Link to="/therapists" className="btn btn-outline">
              View All Therapists
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                  <p>{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <h2 className="section-title">Trusted by Healthcare Providers</h2>
          <div className="trust-badges">
            <div className="badge">
              <Award size={32} />
              <span>HIPAA Compliant</span>
            </div>
            <div className="badge">
              <Shield size={32} />
              <span>GDPR Compliant</span>
            </div>
            <div className="badge">
              <Heart size={32} />
              <span>Licensed Professionals</span>
            </div>
            <div className="badge">
              <Zap size={32} />
              <span>Evidence-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Wellness Journey?</h2>
            <p>Join thousands of people prioritizing their mental health with MindCare.</p>
            <div className="cta-buttons">
              <Link to="/login" className="btn btn-primary btn-lg">
                Create Account
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
