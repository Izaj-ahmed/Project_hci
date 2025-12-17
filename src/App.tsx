import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import TherapistsPage from './pages/TherapistsPage';
import ResourcesPage from './pages/ResourcesPage';
import CrisisPage from './pages/CrisisPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';
import SettingsPage from './pages/SettingsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ChatBotPage from './pages/ChatBotPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage isLogin={true} />} />
          <Route path="/register" element={<AuthPage isLogin={false} />} />
          <Route path="/crisis" element={<CrisisPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/therapists" element={<TherapistsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <AppointmentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/journal"
            element={
              <ProtectedRoute>
                <JournalPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
