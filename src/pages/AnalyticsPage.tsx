import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import './AnalyticsPage.css';

export const AnalyticsPage: React.FC = () => {
  // Dataset based on provided metadata
  const occupationData = [
    { name: 'Students', value: 72, percentage: 60 },
    { name: 'Job Holders', value: 48, percentage: 40 },
  ];

  const primaryConcernsData = [
    { name: 'Academic Stress', value: 38, count: 46 },
    { name: 'Anxiety', value: 29, count: 35 },
    { name: 'Work Stress', value: 21, count: 25 },
    { name: 'Emotional Burnout', value: 12, count: 14 },
  ];

  const sleepIssuesData = [
    { quality: 'Poor (≤2)', percentage: 34, count: 41 },
    { quality: 'Moderate (3)', percentage: 41, count: 49 },
    { quality: 'Good (≥4)', percentage: 25, count: 30 },
  ];

  const professionalHelpData = [
    { category: 'Ever Consulted', value: 27, count: 32 },
    { category: 'Diagnosed', value: 14, count: 17 },
    { category: 'On Medication', value: 9, count: 11 },
  ];

  const copingStrategiesData = [
    { strategy: 'Healthy Coping', percentage: 58, count: 70 },
    { strategy: 'Avoidant Coping', percentage: 31, count: 37 },
    { strategy: 'Substance Use', percentage: 11, count: 13 },
  ];

  const symptomSeverityData = [
    { severity: 'Very Mild (1)', count: 8 },
    { severity: 'Mild (2-3)', count: 24 },
    { severity: 'Moderate (4-5)', count: 36 },
    { severity: 'Severe (6-7)', count: 32 },
    { severity: 'Extreme (8-10)', count: 20 },
  ];

  const ageDistributionData = [
    { range: '18-21', count: 32, percentage: 27 },
    { range: '22-25', count: 45, percentage: 37 },
    { range: '26-29', count: 28, percentage: 23 },
    { range: '30-35', count: 15, percentage: 13 },
  ];

  const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];

  return (
    <div className="analytics-page">
      <div className="analytics-container">
        {/* Header */}
        <div className="analytics-header">
          <h1>Research Study Analytics Dashboard</h1>
          <p className="study-info">HCI-Based Intelligent Health and Wellness Application Study</p>
          <div className="study-metadata">
            <span className="metadata-item">Sample Size: <strong>120</strong> participants</span>
            <span className="metadata-item">Age Range: <strong>18–35</strong> years</span>
            <span className="metadata-item">Population: <strong>Bangladeshi</strong> students & professionals</span>
            <span className="metadata-item">Data Type: <strong>Synthetic anonymized</strong></span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="key-metrics">
          <div className="metric-card">
            <div className="metric-icon">👥</div>
            <h3>Total Participants</h3>
            <p className="metric-value">120</p>
            <span className="metric-label">Consented & Anonymized</span>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎓</div>
            <h3>Students</h3>
            <p className="metric-value">72 (60%)</p>
            <span className="metric-label">Undergraduate & Graduate</span>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💼</div>
            <h3>Job Holders</h3>
            <p className="metric-value">48 (40%)</p>
            <span className="metric-label">Professional & Career-focused</span>
          </div>
          <div className="metric-card">
            <div className="metric-icon">✅</div>
            <h3>Informed Consent</h3>
            <p className="metric-value">100%</p>
            <span className="metric-label">Ethics approved</span>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="charts-grid charts-2col">
          {/* Occupation Distribution */}
          <div className="chart-card">
            <h3>Occupation Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={occupationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {occupationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} participants`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Primary Concerns */}
          <div className="chart-card">
            <h3>Primary Mental Health Concerns</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={primaryConcernsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sleep Quality */}
          <div className="chart-card">
            <h3>Sleep Quality Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sleepIssuesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="quality" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="percentage" fill="#ec4899" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Professional Help */}
          <div className="chart-card">
            <h3>Professional Mental Health Support</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={professionalHelpData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="category" width={80} />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="value" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Coping Strategies */}
          <div className="chart-card">
            <h3>Primary Coping Strategies</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={copingStrategiesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {copingStrategiesData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Symptom Severity */}
          <div className="chart-card">
            <h3>Symptom Severity Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={symptomSeverityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="severity" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => `${value} participants`} />
                <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Age Distribution */}
          <div className="chart-card">
            <h3>Age Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageDistributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} participants`} />
                <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Statistics Table */}
        <div className="statistics-section">
          <h2>Detailed Study Statistics</h2>
          
          <div className="stats-grid">
            <div className="stats-card">
              <h4>Demographics</h4>
              <ul>
                <li><strong>Total Sample:</strong> 120 participants</li>
                <li><strong>Age Range:</strong> 18–35 years</li>
                <li><strong>Education:</strong> Undergraduate & Graduate</li>
                <li><strong>Nationality:</strong> Bangladeshi</li>
                <li><strong>Gender Distribution:</strong> Mixed</li>
              </ul>
            </div>

            <div className="stats-card">
              <h4>Mental Health Metrics</h4>
              <ul>
                <li><strong>Symptom Frequency:</strong> Likert 1-5 scale</li>
                <li><strong>Severity Ratings:</strong> 1-10 scale</li>
                <li><strong>Sleep Quality:</strong> Highly variable</li>
                <li><strong>Concentration Issues:</strong> 47% reported</li>
                <li><strong>Chronic Worry:</strong> 52% moderate-high</li>
              </ul>
            </div>

            <div className="stats-card">
              <h4>Clinical History</h4>
              <ul>
                <li><strong>Previous Episodes:</strong> 63% reported</li>
                <li><strong>Professional Help:</strong> 27% consulted</li>
                <li><strong>Formal Diagnosis:</strong> 14% diagnosed</li>
                <li><strong>Current Medication:</strong> 9% on medication</li>
                <li><strong>Data Classification:</strong> Non-diagnostic</li>
              </ul>
            </div>

            <div className="stats-card">
              <h4>Protective & Risk Factors</h4>
              <ul>
                <li><strong>Healthy Coping:</strong> 58% primary strategy</li>
                <li><strong>Social Support:</strong> Variable quality</li>
                <li><strong>Environmental Stressors:</strong> Moderate-high</li>
                <li><strong>Substance Use Coping:</strong> 11% reported</li>
                <li><strong>Relationship Quality:</strong> Generally good</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ethics & Disclaimer */}
        <div className="ethics-section">
          <h2>Research Ethics & Data Protection</h2>
          <div className="ethics-grid">
            <div className="ethics-card">
              <h4>✅ Informed Consent</h4>
              <p>All participants provided informed consent prior to participation in this study.</p>
            </div>
            <div className="ethics-card">
              <h4>🔒 Anonymization</h4>
              <p>All personally identifiable information has been removed. Data is fully anonymized.</p>
            </div>
            <div className="ethics-card">
              <h4>⚕️ Clinical Disclaimer</h4>
              <p>This is non-diagnostic, self-report data. Professional evaluation required for diagnosis.</p>
            </div>
            <div className="ethics-card">
              <h4>📊 Data Integrity</h4>
              <p>Synthetic data with realistic distributions validated for research purposes.</p>
            </div>
          </div>
        </div>

        {/* Study Information */}
        <div className="study-info-section">
          <h2>Study Information</h2>
          <div className="info-content">
            <p><strong>Study Title:</strong> HCI-Based Intelligent Health and Wellness Application Study</p>
            <p><strong>Data Type:</strong> Synthetic anonymized self-report survey data</p>
            <p><strong>Population:</strong> Bangladeshi students and job holders aged 18-35</p>
            <p><strong>Sample Size:</strong> 120 participants</p>
            <p><strong>Measurement Scales:</strong></p>
            <ul>
              <li>Likert Scale (1-5): 1=Not at all / Never, 5=Extremely / Almost always</li>
              <li>Severity Scale (1-10): 1=Very mild, 10=Extremely severe</li>
            </ul>
            <p><strong>Data Collection Methods:</strong> Self-report questionnaire with standardized instruments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
