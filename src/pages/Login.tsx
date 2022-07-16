import { Paper, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
type LoginProps = {
  user:any
};
export function Login (props:LoginProps) {
  const [user, setUser] = useState({
    login: '',
    password: ''
  });
  const handleStateChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const handleLogin = async () => {
    return await axios.get('http://localhost:5000/login').then((resp) => {
      console.log(resp);
    });
  };
  return (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 3rem' }}>
    <Paper style={{ display: 'grid', width: '60%', padding: '3rem', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        <div style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
                <Button onClick={() => handleLogin()}variant="contained" >
                    Login
                </Button>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <Link >
                Esqueci a senha
            </Link>
            </div>
        </div>
    </Paper>
  </div>

  );
}
