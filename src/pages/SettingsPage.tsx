import React from 'react';
import './SettingsPage.css';

export const SettingsPage: React.FC = () => {
  const [settings, setSettings] = React.useState({
    emailNotifications: true,
    pushNotifications: false,
    smsReminders: false,
    dataCollection: true,
    language: 'en',
    theme: 'light',
  });

  const handleChange = (key: string, value: boolean | string) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="settings-page">
      <div className="container">
        <div className="settings-header">
          <h1>⚙️ Settings</h1>
          <p>Manage your preferences and account settings</p>
        </div>

        <div className="settings-tabs">
          <div className="settings-section">
            <h2>📬 Notification Preferences</h2>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) => handleChange('emailNotifications', e.target.checked)}
                />
                Email Notifications
              </label>
              <p>Receive updates via email</p>
            </div>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={(e) => handleChange('pushNotifications', e.target.checked)}
                />
                Push Notifications
              </label>
              <p>Get alerts on your browser</p>
            </div>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.smsReminders}
                  onChange={(e) => handleChange('smsReminders', e.target.checked)}
                />
                SMS Reminders
              </label>
              <p>Appointment reminders via text</p>
            </div>
          </div>

          <div className="settings-section">
            <h2>🌐 Preferences</h2>
            <div className="setting-item">
              <label>Language</label>
              <select
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
                className="form-select"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Theme</label>
              <select
                value={settings.theme}
                onChange={(e) => handleChange('theme', e.target.value)}
                className="form-select"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <div className="settings-section">
            <h2>🔒 Privacy & Security</h2>
            <div className="setting-item">
              <label>
                <input
                  type="checkbox"
                  checked={settings.dataCollection}
                  onChange={(e) => handleChange('dataCollection', e.target.checked)}
                />
                Allow Analytics
              </label>
              <p>Help us improve with anonymized data</p>
            </div>
            <button className="btn btn-outline">Download My Data</button>
            <button className="btn btn-danger">Delete Account</button>
          </div>

          <div className="settings-section">
            <h2>ℹ️ About</h2>
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Last Updated:</strong> December 2024</p>
            <p><strong>Support:</strong> support@mindcare.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
