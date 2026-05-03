import { Navigate } from 'react-router-dom';
import { useUser } from '../../hooks/userContext';

export function PrivateRoute({ children, adminOnly = false }) {
  const { userInfo } = useUser();

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && !userInfo.admin) {
    return <Navigate to="/" />;
  }

  return children;
}