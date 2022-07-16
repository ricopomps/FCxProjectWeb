import { useState } from 'react';
import axios from 'axios';
import {
  Paper,
  Button
} from '@mui/material';
import { FormLine } from '../components/FormLine';

type UserFormProps = {
  user:any
};
export function UserForm (props:UserFormProps) {
  const [user, setUser] = useState({ });

  const handleStateChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/', user).then((resp) => { console.log(resp); });
  };

  return (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
    <Paper style={{ width: '80%', padding: '1rem' }}>
        <FormLine onChange={handleStateChange} data={[{ value: user?.name, key: 'name', label: 'Nome' }]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.email, key: 'email', label: 'E-Mail' },
          { value: user?.login, key: 'login', label: 'Login' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.cpf, key: 'cpf', label: 'Cpf' },
          { value: user?.phone, key: 'phone', label: 'Telefone' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.birhdate, key: 'birthdate', label: 'Data de nascimento' },
          { value: user?.motherName, key: 'motherName', label: 'Nome da mãe' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.password, key: 'password', label: 'Password' },
          { value: user?.status, key: 'status', label: 'Status' }
        ]}/>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
          <Button onClick={() => handleSubmit()}variant="contained" >
            Cadastrar
          </Button>
        </div>
    </Paper>
  </div>

  );
}
