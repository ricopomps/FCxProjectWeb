import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
// import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { UserList } from './pages/UserList';
import { UserForm } from './pages/UserForm';
export function AppRoutes () {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/list"element={<UserList/>}/>
                <Route path="/form"element={<UserForm/>}/>
            </Routes>
        </Router>

  );
}
