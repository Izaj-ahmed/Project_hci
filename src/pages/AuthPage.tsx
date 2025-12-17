import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useAuthStore } from '../store';
import './AuthPage.css';

interface AuthPageProps {
  isLogin?: boolean;
}

export const AuthPage: React.FC<AuthPageProps> = ({ isLogin = true }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const { login, register } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isLogin) {
      if (!formData.name) {
        setError('Name is required');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (formData.password.length < 8) {
        setError('Password must be at least 8 characters');
        return;
      }
      register({
        id: Math.random().toString(),
        email: formData.email,
        name: formData.name,
        role: 'user',
        createdAt: new Date().toISOString(),
      });
    } else {
      login(formData.email, formData.password);
    }

    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1>🧠 MindCare</h1>
            <h2>{isLogin ? 'Welcome Back' : 'Join MindCare'}</h2>
            <p>{isLogin ? 'Sign in to access your wellness journey' : 'Start your mental health journey today'}</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="auth-error">{error}</div>}

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User size={18} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="form-input"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <Mail size={18} />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <Lock size={18} />
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="form-input"
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="form-group forgot-password">
                <a href="#forgot">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-lg auth-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

            {isLogin && (
              <div className="auth-terms">
                <p>By signing in, you agree to our Privacy Policy and Terms of Service</p>
              </div>
            )}
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <a href={isLogin ? '/register' : '/login'}>
                {isLogin ? 'Sign up' : 'Sign in'}
              </a>
            </p>
          </div>

          {isLogin && (
            <div className="auth-demo">
              <p>Demo credentials:</p>
              <code>demo@mindcare.com / password123</code>
            </div>
          )}
        </div>

        <div className="auth-benefits">
          <h3>Why Join MindCare?</h3>
          <ul>
            <li>✅ Connect with licensed therapists</li>
            <li>✅ Track your mental wellness journey</li>
            <li>✅ Access unlimited wellness resources</li>
            <li>✅ 100% confidential and secure</li>
            <li>✅ 24/7 crisis support available</li>
            <li>✅ Personalized AI wellness coach</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
