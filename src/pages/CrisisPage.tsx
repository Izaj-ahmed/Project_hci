import { AlertCircle, Phone, MessageCircle, Shield, Clock } from 'lucide-react';
import { CRISIS_RESOURCES } from '../utils/mockData';
import './CrisisPage.css';

export const CrisisPage: React.FC = () => {
  return (
    <div className="crisis-page">
      <div className="crisis-alert">
        <AlertCircle size={48} />
        <h1>Crisis Support</h1>
        <p>You are not alone. Help is available 24/7.</p>
      </div>

      <div className="container">
        <div className="crisis-ctas">
          <a href="tel:999" className="cta-button emergency">
            <Phone size={32} />
            <span>Call 999</span>
            <small>Emergency Services</small>
          </a>
          <a href="tel:01877020020" className="cta-button emergency">
            <MessageCircle size={32} />
            <span>01877-020020</span>
            <small>Bangladesh Psychological Helpline</small>
          </a>
          <a href="tel:999" className="cta-button emergency critical">
            <AlertCircle size={32} />
            <span>Call 999</span>
            <small>Immediate Emergency</small>
          </a>
        </div>

        <div className="crisis-resources">
          <h2>Available Resources</h2>
          <div className="resources-list">
            {CRISIS_RESOURCES.resources.map((resource, idx) => (
              <div key={idx} className="resource-item">
                <h3>{resource.name}</h3>
                <p className="phone"><Phone size={16} /> {resource.phone}</p>
                <p className="hours"><Clock size={16} /> {resource.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="safety-information">
          <h2>Safety Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <Shield size={24} />
              <h4>Remove Harmful Items</h4>
              <p>Put away anything that could be used for self-harm.</p>
            </div>
            <div className="tip-card">
              <Shield size={24} />
              <h4>Reach Out to Someone</h4>
              <p>Tell a trusted friend, family member, or therapist how you're feeling.</p>
            </div>
            <div className="tip-card">
              <Shield size={24} />
              <h4>Go to Safe Place</h4>
              <p>Move to a place where you feel safe and supported.</p>
            </div>
            <div className="tip-card">
              <Shield size={24} />
              <h4>Create Safety Plan</h4>
              <p>Work with a therapist to develop a personalized safety plan.</p>
            </div>
          </div>
        </div>

        <div className="support-message">
          <h2>Remember</h2>
          <p>
            Suicidal thoughts are a symptom of mental health conditions that can be treated.
            With proper support, these feelings can improve. You deserve help and support.
            Please reach out today—it does get better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrisisPage;
