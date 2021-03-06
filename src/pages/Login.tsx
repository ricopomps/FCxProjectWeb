import { Paper, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { toast } from 'react-toastify';
import '../styles/login.scss';

type LoginProps = {
  user:any
};
export function Login (props:LoginProps) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  const [user, setUser] = useState({
    login: '',
    password: ''
  });
  const handleStateChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const handleLoginSucess = (response) => {
    toast.success('Login realizado com sucesso');
    localStorage.setItem('token', response.data.accessToken);
    navigate('/list');
  };

  const handleLoginFailure = (message) => {
    toast.error(message);
  };

  const handleLogin = async () => {
    return await axios.post('http://localhost:5000/login', user).then((resp) => {
      handleLoginSucess(resp);
    }).catch((error) => {
      handleLoginFailure(error.response.data);
    });
  };
  return (
  <div className="loginContainer">
    <Paper className="paper">
        <div className="container">
            <PersonIcon />
        </div>
            <TextField
                value={props?.user?.email}
                label="Login"
                variant="standard"
                onChange={((e) => handleStateChange('login', e.target.value))}
                />
            <TextField
                value={props?.user?.email}
                label="Senha"
                type='password'
                variant="standard"
                onChange={((e) => handleStateChange('password', e.target.value))}
                />
            <div className="flex">
              <div className="flexGrow">
                  <Button onClick={() => handleLogin()}variant="contained" >
                      Login
                  </Button>
              </div>
              <div className="flex alignCenter"
              >
                <Link href="/recover">
                    Esqueci a senha
                </Link>
              </div>
        </div>
    </Paper>
  </div>

  );
}
