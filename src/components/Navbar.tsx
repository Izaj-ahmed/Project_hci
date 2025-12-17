import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, LogOut, Home, Settings, Users } from 'lucide-react';
import { useAuthStore, useNotificationStore } from '../store';
import './Navbar.css';

interface NavbarProps {
  title?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title = 'MindCare' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuthStore();
  const { notifications } = useNotificationStore();
  const navigate = useNavigate();
  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🧠</span>
          {title}
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {isAuthenticated ? (
            <>
              <li className="navbar-item">
                <Link to="/dashboard" className="navbar-link">
                  <Home size={18} />
                  Dashboard
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/therapists" className="navbar-link">
                  Therapists
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/appointments" className="navbar-link">
                  Appointments
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/resources" className="navbar-link">
                  Resources
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/analytics" className="navbar-link">
                  Analytics
                </Link>
              </li>
              <li className="navbar-item notification-item">
                <Link to="/notifications" className="navbar-link">
                  <Bell size={18} />
                  {unreadCount > 0 && (
                    <span className="notification-badge">{unreadCount}</span>
                  )}
                </Link>
              </li>
              <li className="navbar-item dropdown">
                <div className="user-menu">
                  <img
                    src={user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`}
                    alt={user?.name}
                    className="user-avatar"
                  />
                  <span className="user-name">{user?.name || 'User'}</span>
                </div>
                <div className="dropdown-menu">
                  <Link to="/dashboard" className="dropdown-item">
                    <Users size={16} />
                    Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    <Settings size={16} />
                    Settings
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item">
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="navbar-link">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/services" className="navbar-link">
                  Services
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="navbar-link">
                  Contact
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="btn btn-primary btn-sm">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
