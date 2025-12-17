import { create } from 'zustand';
import type { User, MoodEntry, Appointment, Notification } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (user: User) => void;
  updateUser: (user: Partial<User>) => void;
}

interface MoodStore {
  moods: MoodEntry[];
  addMood: (mood: MoodEntry) => void;
  getMoods: (userId: string) => MoodEntry[];
}

interface AppointmentStore {
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  bookAppointment: (appointment: Appointment) => void;
  cancelAppointment: (appointmentId: string) => void;
  getAppointments: (userId: string) => Appointment[];
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAsRead: (notificationId: string) => void;
  getUnreadCount: () => number;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  isAuthenticated: !!localStorage.getItem('user'),
  login: (email: string) => {
    const mockUser: User = {
      id: '1',
      email,
      name: 'User',
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem('user');
    set({ user: null, isAuthenticated: false });
  },
  register: (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },
  updateUser: (userUpdate: Partial<User>) => {
    set((state) => {
      const updated = { ...state.user, ...userUpdate } as User;
      localStorage.setItem('user', JSON.stringify(updated));
      return { user: updated };
    });
  },
}));

export const useMoodStore = create<MoodStore>((set, get) => ({
  moods: JSON.parse(localStorage.getItem('moods') || '[]'),
  addMood: (mood: MoodEntry) => {
    set((state) => {
      const updated = [...state.moods, mood];
      localStorage.setItem('moods', JSON.stringify(updated));
      return { moods: updated };
    });
  },
  getMoods: (userId: string) => {
    return get().moods.filter((mood) => mood.userId === userId);
  },
}));

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  appointments: JSON.parse(localStorage.getItem('appointments') || '[]'),
  addAppointment: (appointment: Appointment) => {
    set((state) => {
      const updated = [...state.appointments, appointment];
      localStorage.setItem('appointments', JSON.stringify(updated));
      return { appointments: updated };
    });
  },
  bookAppointment: (appointment: Appointment) => {
    set((state) => {
      const updated = [...state.appointments, appointment];
      localStorage.setItem('appointments', JSON.stringify(updated));
      return { appointments: updated };
    });
  },
  cancelAppointment: (appointmentId: string) => {
    set((state) => {
      const updated = state.appointments.map((apt) =>
        apt.id === appointmentId ? { ...apt, status: 'cancelled' as const } : apt
      );
      localStorage.setItem('appointments', JSON.stringify(updated));
      return { appointments: updated };
    });
  },
  getAppointments: (userId: string) => {
    return get().appointments.filter((apt) => apt.userId === userId);
  },
}));

export const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: JSON.parse(localStorage.getItem('notifications') || '[]'),
  addNotification: (notification: Notification) => {
    set((state) => {
      const updated = [...state.notifications, notification];
      localStorage.setItem('notifications', JSON.stringify(updated));
      return { notifications: updated };
    });
  },
  markAsRead: (notificationId: string) => {
    set((state) => {
      const updated = state.notifications.map((notif) =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      );
      localStorage.setItem('notifications', JSON.stringify(updated));
      return { notifications: updated };
    });
  },
  getUnreadCount: () => {
    return get().notifications.filter((n) => !n.read).length;
  },
}));
