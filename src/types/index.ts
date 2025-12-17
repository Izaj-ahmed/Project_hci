export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'therapist' | 'admin';
  phone?: string;
  avatar?: string;
  bio?: string;
  createdAt: string;
}

export interface MoodEntry {
  id: string;
  userId: string;
  mood: number; // 1-10
  emoji?: string;
  notes: string;
  timestamp: string;
  activities?: string[];
}

export interface Therapist {
  id: string;
  name: string;
  specialization: string[];
  experience: number;
  rating: number;
  bio: string;
  image: string;
  sessionPrice: number;
  availability: string[];
  credentials: string;
}

export interface Appointment {
  id: string;
  userId: string;
  therapistId: string;
  date: string;
  time: string;
  dateTime?: string;
  duration: number; // minutes
  type: 'video' | 'phone' | 'in-person';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface JournalEntry {
  id: string;
  userId: string;
  title: string;
  content: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  timestamp: string;
  tags?: string[];
  isPrivate: boolean;
}

export interface MentalHealthAssessment {
  id: string;
  userId: string;
  type: 'PHQ-9' | 'GAD-7' | 'DASS-21';
  score: number;
  timestamp: string;
  recommendations: string[];
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'reminder' | 'alert' | 'message' | 'achievement';
  read: boolean;
  timestamp: string;
  actionUrl?: string;
}

export interface WellnessResource {
  id: string;
  title: string;
  description: string;
  content: string;
  category: 'meditation' | 'exercise' | 'article' | 'video' | 'cbt';
  duration?: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  tags: string[];
}
