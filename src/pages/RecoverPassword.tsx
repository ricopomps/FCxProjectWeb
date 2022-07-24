import { useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Button,
  Typography
} from '@mui/material';
import { toast } from 'react-toastify';
import { FormLine } from '../components/FormLine';
import '../styles/form.scss';

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
  <div className="container padding">
    <Paper className="paper">
        <Typography className="container">Recuperar senha</Typography>
        <FormLine onChange={handleStateChange} data={[{ value: user?.login, key: 'login', label: 'Login' }]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.email, key: 'email', label: 'E-Mail' },
          { value: user?.motherName, key: 'motherName', label: 'Nome da mãe' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.cpf, key: 'cpf', label: 'Cpf' },
          { value: user?.password, type: 'password', key: 'password', label: 'Nova senha' }
        ]}/>
        <div className="container padding">
          <Button onClick={() => handleSubmit()}variant="contained" >
            Recuperar senha
          </Button>
        </div>
    </Paper>
  </div>

  );
}
