import { useState } from 'react';
import { Calendar, Clock, User, MapPin, Video, Phone, CheckCircle } from 'lucide-react';
import { useAuthStore, useAppointmentStore } from '../store';
import { MOCK_THERAPISTS } from '../utils/mockData';
import './AppointmentsPage.css';

export const AppointmentsPage: React.FC = () => {
  const { user } = useAuthStore();
  const { getAppointments, bookAppointment } = useAppointmentStore();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'book'>('upcoming');
  const [bookingData, setBookingData] = useState({
    therapistId: '',
    date: '',
    time: '',
    type: 'video',
  });

  const userAppointments = getAppointments(user?.id || '');
  const upcomingAppointments = userAppointments.filter((apt) => apt.status === 'scheduled');
  const pastAppointments = userAppointments.filter((apt) => apt.status === 'completed');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingData.therapistId && bookingData.date && bookingData.time) {
      bookAppointment({
        id: Math.random().toString(),
        userId: user?.id || '',
        therapistId: bookingData.therapistId,
        date: bookingData.date,
        time: bookingData.time,
        type: bookingData.type as 'video' | 'phone' | 'in-person',
        status: 'scheduled',
        notes: '',
        duration: 50,
      });
      setBookingData({ therapistId: '', date: '', time: '', type: 'video' });
      setActiveTab('upcoming');
    }
  };

  const getTherapistName = (id: string) => {
    return MOCK_THERAPISTS.find((t) => t.id === id)?.name || 'Therapist';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="appointments-page">
      <div className="appointments-header">
        <h1>Your Appointments</h1>
        <p>Manage and schedule your therapy sessions</p>
      </div>

      <div className="appointments-container">
        {/* Tabs */}
        <div className="appointments-tabs">
          <button
            className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <Calendar size={20} />
            Upcoming ({upcomingAppointments.length})
          </button>
          <button
            className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <CheckCircle size={20} />
            Past ({pastAppointments.length})
          </button>
          <button
            className={`tab-button ${activeTab === 'book' ? 'active' : ''}`}
            onClick={() => setActiveTab('book')}
          >
            <Clock size={20} />
            Book New
          </button>
        </div>

        {/* Upcoming Appointments */}
        {activeTab === 'upcoming' && (
          <div className="appointments-content">
            {upcomingAppointments.length > 0 ? (
              <div className="appointments-list">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="appointment-card">
                    <div className="appointment-card-header">
                      <div className="appointment-card-title">
                        <h3>{getTherapistName(apt.therapistId)}</h3>
                        <span className={`appointment-type-badge ${apt.type}`}>
                          {apt.type === 'video' && <Video size={16} />}
                          {apt.type === 'phone' && <Phone size={16} />}
                          {apt.type === 'in-person' && <MapPin size={16} />}
                          {apt.type.charAt(0).toUpperCase() + apt.type.slice(1)}
                        </span>
                      </div>
                    </div>

                  <div className="appointment-card-details">
                      <div className="detail-item">
                        <Calendar size={18} />
                        <span>{formatDate(apt.date)}</span>
                      </div>
                      <div className="detail-item">
                        <Clock size={18} />
                        <span>{apt.time} • {apt.duration} minutes</span>
                      </div>
                    </div>

                    <div className="appointment-card-actions">
                      <button className="btn btn-primary btn-sm">Join Session</button>
                      <button className="btn btn-outline btn-sm">Reschedule</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <Calendar size={48} />
                <h3>No Upcoming Appointments</h3>
                <p>You don't have any scheduled appointments yet.</p>
                <button className="btn btn-primary" onClick={() => setActiveTab('book')}>
                  Book Your First Session
                </button>
              </div>
            )}
          </div>
        )}

        {/* Past Appointments */}
        {activeTab === 'past' && (
          <div className="appointments-content">
            {pastAppointments.length > 0 ? (
              <div className="appointments-list">
                {pastAppointments.map((apt) => (
                  <div key={apt.id} className="appointment-card past">
                    <div className="appointment-card-header">
                      <div className="appointment-card-title">
                        <h3>{getTherapistName(apt.therapistId)}</h3>
                        <span className="appointment-status-badge">
                          <CheckCircle size={16} />
                          Completed
                        </span>
                      </div>
                    </div>

                    <div className="appointment-card-details">
                      <div className="detail-item">
                        <Calendar size={18} />
                        <span>{formatDate(apt.date)}</span>
                      </div>
                      <div className="detail-item">
                        <Clock size={18} />
                        <span>{apt.time}</span>
                      </div>
                    </div>

                    <div className="appointment-card-actions">
                      <button className="btn btn-outline btn-sm">Write Notes</button>
                      <button className="btn btn-outline btn-sm">Schedule Follow-up</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <CheckCircle size={48} />
                <h3>No Past Appointments</h3>
                <p>You haven't completed any sessions yet.</p>
              </div>
            )}
          </div>
        )}

        {/* Book Appointment */}
        {activeTab === 'book' && (
          <div className="book-appointment-section">
            <form onSubmit={handleBooking} className="booking-form">
              <div className="form-group">
                <label htmlFor="therapist" className="form-label">
                  <User size={18} />
                  Select Therapist
                </label>
                <select
                  id="therapist"
                  value={bookingData.therapistId}
                  onChange={(e) => setBookingData({ ...bookingData, therapistId: e.target.value })}
                  className="form-input"
                  required
                >
                  <option value="">Choose a therapist...</option>
                  {MOCK_THERAPISTS.map((therapist) => (
                    <option key={therapist.id} value={therapist.id}>
                      Dr. {therapist.name} - {therapist.specialization[0]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    <Calendar size={18} />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="form-label">
                    <Clock size={18} />
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="type" className="form-label">
                  <Video size={18} />
                  Session Type
                </label>
                <div className="session-type-options">
                  <label className="option-label">
                    <input
                      type="radio"
                      name="type"
                      value="video"
                      checked={bookingData.type === 'video'}
                      onChange={(e) => setBookingData({ ...bookingData, type: e.target.value })}
                    />
                    <span className="option-content">
                      <Video size={16} />
                      Video Call
                    </span>
                  </label>
                  <label className="option-label">
                    <input
                      type="radio"
                      name="type"
                      value="phone"
                      checked={bookingData.type === 'phone'}
                      onChange={(e) => setBookingData({ ...bookingData, type: e.target.value })}
                    />
                    <span className="option-content">
                      <Phone size={16} />
                      Phone Call
                    </span>
                  </label>
                  <label className="option-label">
                    <input
                      type="radio"
                      name="type"
                      value="in-person"
                      checked={bookingData.type === 'in-person'}
                      onChange={(e) => setBookingData({ ...bookingData, type: e.target.value })}
                    />
                    <span className="option-content">
                      <MapPin size={16} />
                      In-Person
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Confirm Booking
              </button>
            </form>

            <div className="booking-info">
              <div className="info-card">
                <h3>Booking Information</h3>
                <ul>
                  <li>Sessions are 50 minutes long</li>
                  <li>You can reschedule up to 24 hours before</li>
                  <li>Cancellations must be made 12 hours in advance</li>
                  <li>All sessions are confidential and secure</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
