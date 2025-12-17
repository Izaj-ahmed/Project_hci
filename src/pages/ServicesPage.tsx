import { Users, MessageSquare, Calendar, BookOpen, Activity, Shield, Clock, Zap } from 'lucide-react';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Users size={40} />,
      title: 'Therapy & Counseling',
      description: 'Connect with licensed therapists for one-on-one sessions via video, phone, or in-person.',
      features: ['Licensed Professionals', 'Multiple Specializations', 'Flexible Scheduling', 'Confidential Sessions'],
      price: 'From ৳1,200/session',
    },
    {
      icon: <MessageSquare size={40} />,
      title: 'ChatBot Support',
      description: 'Get instant support and guidance from our AI-powered chatbot available 24/7.',
      features: ['Instant Responses', '24/7 Availability', 'Multiple Therapists', 'Quick Check-ins'],
      price: 'Free',
    },
    {
      icon: <Calendar size={40} />,
      title: 'Appointment Scheduling',
      description: 'Easily schedule and manage your therapy appointments with professional therapists.',
      features: ['Easy Booking', 'Reminders', 'Rescheduling', 'Cancellation Policy'],
      price: 'Included',
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Wellness Resources',
      description: 'Access comprehensive resources including meditation guides, exercises, and educational content.',
      features: ['Guided Meditations', 'CBT Exercises', 'Articles', 'Video Tutorials'],
      price: 'Free',
    },
    {
      icon: <Activity size={40} />,
      title: 'Mood Tracking',
      description: 'Monitor your mental health with our intelligent mood tracking and trend analysis.',
      features: ['Daily Check-ins', 'Trend Analysis', 'Pattern Recognition', 'Progress Insights'],
      price: 'Free',
    },
    {
      icon: <Shield size={40} />,
      title: 'Crisis Support',
      description: 'Access immediate crisis support with emergency hotlines and safety resources.',
      features: ['24/7 Emergency', 'Safety Tips', 'Professional Resources', 'Immediate Help'],
      price: 'Free',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Create Account',
      description: 'Sign up for free and complete your mental health profile for personalized recommendations.',
    },
    {
      step: 2,
      title: 'Browse Services',
      description: 'Explore our range of services including therapy, resources, and support options.',
    },
    {
      step: 3,
      title: 'Choose Therapist',
      description: 'Select a licensed therapist that matches your needs and preferences.',
    },
    {
      step: 4,
      title: 'Schedule Session',
      description: 'Book a convenient time for your therapy session via video, phone, or in-person.',
    },
    {
      step: 5,
      title: 'Access Support',
      description: 'Get professional support and use additional resources for your mental wellbeing.',
    },
    {
      step: 6,
      title: 'Track Progress',
      description: 'Monitor your progress through mood tracking and regular check-ins with your therapist.',
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive mental health support tailored to your needs</p>
        </div>
      </div>

      <div className="container">
        {/* Services Grid */}
        <section className="services-section">
          <h2>What We Offer</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <Zap size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="service-price">{service.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-grid">
            {howItWorks.map((item) => (
              <div key={item.step} className="step-card">
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.step < 6 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <h2>Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Clock size={32} />
              <h3>24/7 Support</h3>
              <p>Access support anytime, anywhere. Our chatbot and resources are always available.</p>
            </div>
            <div className="benefit-card">
              <Users size={32} />
              <h3>Professional Team</h3>
              <p>Work with licensed therapists and mental health professionals with years of experience.</p>
            </div>
            <div className="benefit-card">
              <Shield size={32} />
              <h3>Complete Privacy</h3>
              <p>Your data is encrypted and your privacy is our top priority. All sessions are confidential.</p>
            </div>
            <div className="benefit-card">
              <Zap size={32} />
              <h3>Personalized Care</h3>
              <p>Receive customized recommendations and treatment plans based on your specific needs.</p>
            </div>
            <div className="benefit-card">
              <Activity size={32} />
              <h3>Progress Tracking</h3>
              <p>Monitor your mental health journey with detailed mood tracking and progress analytics.</p>
            </div>
            <div className="benefit-card">
              <BookOpen size={32} />
              <h3>Educational Resources</h3>
              <p>Access comprehensive learning materials, guides, and evidence-based practices.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section">
          <h2>Transparent Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card free">
              <h3>Free Services</h3>
              <p className="price">৳0</p>
              <ul className="pricing-features">
                <li>Mood Tracking</li>
                <li>Wellness Resources</li>
                <li>ChatBot Support (Basic)</li>
                <li>Crisis Support</li>
                <li>Community Features</li>
              </ul>
              <button className="btn btn-secondary">Get Started</button>
            </div>
            <div className="pricing-card premium">
              <div className="popular-badge">Most Popular</div>
              <h3>Premium Therapy</h3>
              <p className="price">From ৳1,200/session</p>
              <ul className="pricing-features">
                <li>All Free Services</li>
                <li>Licensed Therapist Access</li>
                <li>Video/Phone/In-person</li>
                <li>Personalized Treatment Plan</li>
                <li>Session Recordings (Optional)</li>
              </ul>
              <button className="btn btn-primary">Book Session</button>
            </div>
            <div className="pricing-card corporate">
              <h3>Corporate Plans</h3>
              <p className="price">Custom</p>
              <ul className="pricing-features">
                <li>Bulk Therapy Sessions</li>
                <li>Team Workshops</li>
                <li>Mental Health Training</li>
                <li>Dedicated Support</li>
                <li>Custom Integration</li>
              </ul>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>Is my information kept confidential?</h3>
              <p>
                Yes, absolutely. All conversations and personal information are encrypted and kept strictly
                confidential. We comply with all privacy regulations.
              </p>
            </div>
            <div className="faq-card">
              <h3>Can I switch therapists?</h3>
              <p>
                Yes, you can change your therapist at any time. We help match you with a professional
                who best fits your needs.
              </p>
            </div>
            <div className="faq-card">
              <h3>What if I need emergency support?</h3>
              <p>
                For emergencies, please call 999 immediately. We also provide 24/7 crisis resources and
                professional support through our platform.
              </p>
            </div>
            <div className="faq-card">
              <h3>Do you offer refunds?</h3>
              <p>
                We offer a satisfaction guarantee. If you're not satisfied with your first session,
                we can arrange a different therapist at no extra cost.
              </p>
            </div>
            <div className="faq-card">
              <h3>Are the therapists verified?</h3>
              <p>
                All our therapists are licensed professionals with credentials verified by Bangladesh
                regulatory bodies and undergo regular background checks.
              </p>
            </div>
            <div className="faq-card">
              <h3>Can I use MindCare if I'm in crisis?</h3>
              <p>
                While we provide excellent support, if you're in immediate danger, please call emergency
                services at 999 or visit your nearest hospital.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands who have already improved their mental health with MindCare</p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary btn-large">
              Get Started Free
            </a>
            <a href="/contact" className="btn btn-secondary btn-large">
              Learn More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
