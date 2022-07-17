import { useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Button,
  Typography
} from '@mui/material';
import { toast } from 'react-toastify';

import { FormLine } from '../components/FormLine';

type RecoverPasswordProps = {
  user:any
};
export function RecoverPassword (props:RecoverPasswordProps) {
  const [user, setUser] = useState({ });

  const handleStateChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const handleSucess = () => {
    toast.success('Nova senha cadastrada com sucesso');
  };

  const handleFailure = (message) => {
    toast.error(message);
  };

  const handleSubmit = async () => {
    return await axios.post('http://localhost:5000/recover', user).then((resp) => {
      handleSucess();
    }).catch((error) => {
      handleFailure(error.response.data);
    });
  };

  return (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
    <Paper style={{ width: '80%', padding: '1rem' }}>
        <Typography style={{ display: 'flex', justifyContent: 'center' }}>Recuperar senha</Typography>
        <FormLine onChange={handleStateChange} data={[{ value: user?.login, key: 'login', label: 'Login' }]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.email, key: 'email', label: 'E-Mail' },
          { value: user?.motherName, key: 'motherName', label: 'Nome da mãe' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.cpf, key: 'cpf', label: 'Cpf' },
          { value: user?.password, type: 'password', key: 'password', label: 'Nova senha' }
        ]}/>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
          <Button onClick={() => handleSubmit()}variant="contained" >
            Recuperar senha
          </Button>
        </div>
    </Paper>
  </div>

  );
}
