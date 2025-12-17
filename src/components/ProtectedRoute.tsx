import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'user' | 'therapist' | 'admin';
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
