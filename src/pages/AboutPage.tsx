import { Heart, Users, Target, Award, Zap, Shield } from 'lucide-react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>About MindCare</h1>
          <p>Empowering mental health through technology and compassionate support</p>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-grid">
            <div className="mission-card">
              <Heart size={40} />
              <h3>Our Mission</h3>
              <p>
                To provide accessible, affordable, and professional mental health support to everyone,
                breaking barriers and stigma through innovative technology and compassionate care.
              </p>
            </div>
            <div className="mission-card">
              <Target size={40} />
              <h3>Our Vision</h3>
              <p>
                A world where mental health support is as accessible as physical health care,
                and everyone has the resources they need to thrive emotionally and psychologically.
              </p>
            </div>
            <div className="mission-card">
              <Users size={40} />
              <h3>Our Values</h3>
              <p>
                Compassion, Accessibility, Integrity, Confidentiality, and Innovation guide everything we do.
                We prioritize user privacy and evidence-based mental health practices.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-section">
          <h2>Why Choose MindCare?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <Award size={32} />
              </div>
              <h3>Licensed Professionals</h3>
              <p>Connect with certified therapists and counselors trained in evidence-based treatments.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Shield size={32} />
              </div>
              <h3>Privacy & Security</h3>
              <p>Your data is encrypted and protected. All conversations remain completely confidential.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Zap size={32} />
              </div>
              <h3>Quick & Easy</h3>
              <p>Schedule appointments in minutes. Access support from anywhere, anytime, 24/7.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Heart size={32} />
              </div>
              <h3>Holistic Care</h3>
              <p>Combine therapy with mood tracking, wellness resources, and personalized recommendations.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Users size={32} />
              </div>
              <h3>Community Support</h3>
              <p>Join a supportive community and access resources created by mental health experts.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Target size={32} />
              </div>
              <h3>Personalized Plans</h3>
              <p>Get tailored recommendations based on your mental health profile and goals.</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="story-section">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              MindCare was founded with a simple but powerful vision: to make quality mental health support
              accessible to everyone. We recognized that mental health is just as important as physical health,
              yet many people struggle to find affordable, stigma-free support.
            </p>
            <p>
              Our team of mental health professionals, technologists, and advocates came together to create
              a platform that combines clinical expertise with user-friendly technology. We believe that everyone
              deserves access to mental health support, regardless of their background or circumstances.
            </p>
            <p>
              Today, MindCare serves thousands of users across Bangladesh and beyond. We continue to grow and
              innovate, always keeping our users' needs and wellbeing at the center of everything we do.
            </p>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Users Supported</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Licensed Therapists</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>User Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://i.ibb.co.com/QFhSjG0g/confident-doctor-clinic-23-2151983463.jpg" alt="Dr. Rahman" />
              <h3>Dr. Fatima Rahman</h3>
              <p className="role">Founder & Chief Psychologist</p>
              <p className="bio">M.Phil Clinical Psychology with 15+ years of experience in mental health.</p>
            </div>
            <div className="team-card">
              <img src="https://i.ibb.co.com/sJsFzzXP/doctor-with-his-arms-crossed-white-background.jpg" alt="Mr. Hasan" />
              <h3>Mr. Kamal Hassan</h3>
              <p className="role">Chief Technology Officer</p>
              <p className="bio">Tech innovator with expertise in healthcare technology and AI solutions.</p>
            </div>
            <div className="team-card">
              <img src="https://i.ibb.co.com/yt4b4Dt/attractive-medical-professional-uniform-standing-with-arms-crossed-against-isolated-background.jpg" alt="Ms. Nadia" />
              <h3>Ms. Nadia Akter</h3>
              <p className="role">Head of Clinical Operations</p>
              <p className="bio">Clinical specialist focused on ensuring quality care and user safety.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta-section">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you!</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="/chatbot" className="btn btn-secondary">
              Start Chatting
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
