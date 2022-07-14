import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Home } from './pages/Home';
import { UserList } from './pages/UserList';
export function AppRoutes () {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/list"element={<UserList/>}/>
            </Routes>
        </Router>

  );
}
