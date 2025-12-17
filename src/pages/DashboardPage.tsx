import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { useAuthStore, useMoodStore, useAppointmentStore } from '../store';
import { Activity, TrendingUp, Heart, Clock, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();
  const { moods, addMood } = useMoodStore();
  const { getAppointments } = useAppointmentStore();
  const [moodValue, setMoodValue] = useState(5);

  const userMoods = moods.filter((m) => m.userId === user?.id);
  const userAppointments = getAppointments(user?.id || '');

  const handleAddMood = () => {
    if (user?.id) {
      addMood({
        id: Math.random().toString(),
        userId: user.id,
        mood: moodValue,
        notes: '',
        timestamp: new Date().toISOString(),
      });
    }
  };

  const chartData = userMoods.slice(-7).map((mood) => ({
    date: new Date(mood.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    mood: mood.mood,
  }));

  const upcomingAppointments = userAppointments.filter((apt) => apt.status === 'scheduled');

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Welcome Section */}
        <div className="dashboard-header">
          <div className="greeting">
            <h1>Welcome back, {user?.name || 'Friend'}!</h1>
            <p>Your mental wellbeing is our priority. Let's check in today.</p>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <Heart size={24} />
              <div>
                <p className="stat-label">Daily Check-in</p>
                <p className="stat-value">{userMoods.length}</p>
              </div>
            </div>
            <div className="stat-card">
              <Clock size={24} />
              <div>
                <p className="stat-label">Appointments</p>
                <p className="stat-value">{upcomingAppointments.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mood Tracker */}
        <div className="dashboard-section">
          <h2>How Are You Feeling Today?</h2>
          <div className="mood-tracker-card">
            <div className="mood-slider">
              <label>Mood Level</label>
              <input
                type="range"
                min="1"
                max="10"
                value={moodValue}
                onChange={(e) => setMoodValue(parseInt(e.target.value))}
                className="slider"
              />
              <div className="mood-display">
                <span className="mood-emoji">
                  {['😢', '😟', '😐', '🙂', '😊', '😄', '😁', '🤩', '🥰', '🌟'][moodValue - 1]}
                </span>
                <span className="mood-text">{moodValue}/10</span>
              </div>
              <div className="mood-labels">
                <span>Not Well</span>
                <span>Feeling Great</span>
              </div>
            </div>
            <button onClick={handleAddMood} className="btn btn-primary">
              Save Mood Check-in
            </button>
          </div>
        </div>

        {/* Mood Trends */}
        {chartData.length > 0 && (
          <div className="dashboard-section">
            <h2>Your Mood Trends (Last 7 Days)</h2>
            <div className="chart-card">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[1, 10]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="var(--primary)"
                    dot={{ fill: 'var(--primary)', r: 6 }}
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="dashboard-section">
          <h2>🚀 Quick Actions</h2>
          <div className="actions-grid">
            {/* Replace <a> with <Link> */}
            <Link to="/resources" className="action-card">
              <Zap size={32} />
              <h3>Wellness Tools</h3>
              <p>Guided meditations & exercises</p>
            </Link>
            <Link to="/therapists" className="action-card">
              <Activity size={32} />
              <h3>Book Therapist</h3>
              <p>Connect with a professional</p>
            </Link>
            <Link to="/journal" className="action-card">
              <Heart size={32} />
              <h3>Journal Entry</h3>
              <p>Express your thoughts</p>
            </Link>
            <Link to="/assessments" className="action-card">
              <TrendingUp size={32} />
              <h3>Mental Health Check</h3>
              <p>Take a quick assessment</p>
            </Link>
          </div>
        </div>

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div className="dashboard-section">
            <h2><Clock size={24} /> Upcoming Appointments</h2>
            <div className="appointments-list">
              {upcomingAppointments.map((apt) => (
                <div key={apt.id} className="appointment-item">
                  <div className="appointment-info">
                    <p className="appointment-time">
                      {new Date(apt.dateTime || apt.date).toLocaleString()}
                    </p>
                    <p className="appointment-type">{apt.type?.toUpperCase()} • {apt.duration} min</p>
                  </div>
                  {/* You might want to create a dynamic route for appointments */}
                  <Link to={`/appointments/${apt.id}`} className="btn btn-sm btn-primary">
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="dashboard-section">
          <h2><Zap size={24} /> AI Recommendations For You</h2>
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <h4>Start Your Day with Meditation</h4>
              <p>A 5-minute morning meditation can improve focus and reduce anxiety throughout the day.</p>
              <Link to="/resources" className="btn btn-sm btn-outline">
                Explore
              </Link>
            </div>
            <div className="recommendation-card">
              <h4>Sleep Better Tonight</h4>
              <p>Try our guided sleep meditation to improve your sleep quality.</p>
              <Link to="/resources" className="btn btn-sm btn-outline">
                Start
              </Link>
            </div>
            <div className="recommendation-card">
              <h4>Connect with Support</h4>
              <p>Consider scheduling a therapy session to discuss your recent mood patterns.</p>
              <Link to="/therapists" className="btn btn-sm btn-outline">
                Browse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;