import { useState } from 'react';
import { Plus, Trash2, Lock } from 'lucide-react';
import { useAuthStore } from '../store';
import './JournalPage.css';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  mood: number;
  isPrivate: boolean;
}

export const JournalPage: React.FC = () => {
  useAuthStore();
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      title: 'First Steps',
      content: 'Today I started my mental health journey. I feel hopeful about making positive changes.',
      timestamp: new Date().toISOString(),
      mood: 7,
      isPrivate: true,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', content: '', mood: 5, isPrivate: true });

  const addEntry = () => {
    if (formData.title && formData.content) {
      setEntries([
        ...entries,
        {
          id: Math.random().toString(),
          ...formData,
          timestamp: new Date().toISOString(),
        },
      ]);
      setFormData({ title: '', content: '', mood: 5, isPrivate: true });
      setShowForm(false);
    }
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="journal-page">
      <div className="container">
        <div className="journal-header">
          <h1>My Journal</h1>
          <p>A safe space for your thoughts and reflections</p>
          <button onClick={() => setShowForm(!showForm)} className="btn btn-primary">
            <Plus size={20} /> New Entry
          </button>
        </div>

        {showForm && (
          <div className="journal-form-card">
            <h3>Write Your Thoughts</h3>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Give your entry a title..."
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">How are you feeling? (1-10)</label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.mood}
                onChange={(e) => setFormData({ ...formData, mood: parseInt(e.target.value) })}
                className="slider"
              />
              <span className="mood-value">{formData.mood}/10</span>
            </div>

            <div className="form-group">
              <label className="form-label">Your Thoughts</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write whatever is on your mind..."
                className="form-textarea"
              />
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.isPrivate}
                  onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
                />
                Keep this entry private
              </label>
            </div>

            <div className="form-actions">
              <button onClick={addEntry} className="btn btn-primary">
                Save Entry
              </button>
              <button onClick={() => setShowForm(false)} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="journal-entries">
          {entries.length === 0 ? (
            <p className="no-entries">No journal entries yet. Start writing to begin your reflective journey.</p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="journal-entry">
                <div className="entry-header">
                  <div>
                    <h3>{entry.title}</h3>
                    <p className="entry-date">{new Date(entry.timestamp).toLocaleDateString()} • Mood: {entry.mood}/10</p>
                  </div>
                  <div className="entry-actions">
                    {entry.isPrivate && <Lock size={16} className="private-icon" />}
                    <button onClick={() => deleteEntry(entry.id)} className="icon-btn">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="entry-content">{entry.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
