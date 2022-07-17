import { Navigate } from 'react-router-dom';
type PrivateRouteProps = {
    children:any;
};
export function PrivateRoute ({ children }:PrivateRouteProps) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to='/'/>;
}
