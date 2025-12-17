import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>MindCare</h4>
            <p>Supporting your mental wellness journey with compassion and evidence-based care.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">Online Therapy</a></li>
              <li><a href="/resources">Wellness Tools</a></li>
              <li><a href="/therapists">Find Therapist</a></li>
              <li><a href="/crisis">Crisis Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Emergency</h4>
            <p>Crisis Support Available 24/7</p>
            <a href="tel:988" className="emergency-link">Call 999</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MindCare. All rights reserved. HIPAA & GDPR Compliant.</p>
          <p>If you're in crisis, please reach out immediately. Help is available.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
