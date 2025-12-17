import { useState } from 'react';
import { Leaf, Zap, BookOpen, Video, Brain, Compass } from 'lucide-react';
import { MOCK_WELLNESS_RESOURCES } from '../utils/mockData';
import './ResourcesPage.css';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');

  const categories = ['meditation', 'exercise', 'article', 'video', 'cbt'];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  let filtered = MOCK_WELLNESS_RESOURCES;
  if (selectedCategory) {
    filtered = filtered.filter((r) => r.category === selectedCategory);
  }
  if (selectedDifficulty) {
    filtered = filtered.filter((r) => r.difficulty === selectedDifficulty);
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'meditation':
        return <Leaf size={20} />;
      case 'exercise':
        return <Zap size={20} />;
      case 'article':
        return <BookOpen size={20} />;
      case 'video':
        return <Video size={20} />;
      case 'cbt':
        return <Brain size={20} />;
      default:
        return <Compass size={20} />;
    }
  };

  return (
    <div className="resources-page">
      <div className="container">
        <div className="resources-header">
          <h1>Mental Wellness Resources</h1>
          <p>Access expert-curated content to support your mental health journey</p>
        </div>

        <div className="resources-filters">
          <div className="filter-group">
            <label>Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Difficulty Level</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="form-select"
            >
              <option value="">All Levels</option>
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="resources-grid">
          {filtered.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-image">
                <img src={resource.image} alt={resource.title} />
                <div className="resource-overlay">
                  {resource.category === 'meditation' || resource.category === 'exercise' ? (
                    <div className="play-button">▶</div>
                  ) : (
                    <span className="read-button">Read →</span>
                  )}
                </div>
              </div>

              <div className="resource-content">
                <div className="resource-header">
                  <span className="resource-icon">{getCategoryIcon(resource.category)}</span>
                  <span className={`difficulty-badge difficulty-${resource.difficulty}`}>
                    {resource.difficulty}
                  </span>
                </div>

                <h3>{resource.title}</h3>
                <p>{resource.description}</p>

                {resource.duration && (
                  <div className="resource-duration">
                    ⏱ {resource.duration} minutes
                  </div>
                )}

                <div className="resource-tags">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="btn btn-primary btn-sm">
                  {resource.category === 'article' || resource.category === 'video' ? 'Read More' : 'Start'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p>No resources found matching your criteria. Try different filters.</p>
          </div>
        )}

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long should I meditate daily?</h4>
              <p>Start with 5-10 minutes daily and gradually increase to 20-30 minutes as you build the habit.</p>
            </div>
            <div className="faq-item">
              <h4>Are these resources evidence-based?</h4>
              <p>Yes, all our resources are created by licensed mental health professionals and based on scientific research.</p>
            </div>
            <div className="faq-item">
              <h4>Can I use resources offline?</h4>
              <p>Guided meditations and exercises can be downloaded for offline access through our mobile app.</p>
            </div>
            <div className="faq-item">
              <h4>What if I need immediate help?</h4>
              <p>If you're in crisis, please call 988 or visit our Crisis Support page for immediate assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
