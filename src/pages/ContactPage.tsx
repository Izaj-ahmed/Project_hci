import React from 'react';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>We're here to help. Reach out with any questions or feedback.</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more..."
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Contact Information</h2>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p><a href="tel:1-800-MINDCARE">(800) 646-3227</a></p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p><a href="mailto:support@mindcare.com">support@mindcare.com</a></p>
            </div>

            <div className="info-card">
              <h3>🆘 Crisis Support</h3>
              <p><a href="/crisis">24/7 Crisis Helpline Available</a></p>
            </div>

            <div className="info-card">
              <h3>⏰ Hours</h3>
              <p>Monday - Friday: 9 AM - 9 PM EST</p>
              <p>Saturday - Sunday: 10 AM - 6 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
