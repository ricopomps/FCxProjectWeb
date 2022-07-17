import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Login';
import { UserList } from './pages/UserList';
import { UserForm } from './pages/UserForm';
export function AppRoutes () {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/list"element={
                <PrivateRoute>
                  <UserList/>
                </PrivateRoute>}/>
                <Route path="/form"element={
                <PrivateRoute>
                  <UserForm/>
                </PrivateRoute>}/>
            </Routes>
        </Router>

  );
}
