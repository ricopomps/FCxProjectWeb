import { AppBar } from './components/AppBar';
import { AppRoutes } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';

function App () {
  return (
    <>
      <ToastContainer/>
      <AppBar/>
      <AppRoutes/>
    </>
  );
}

export default App;
