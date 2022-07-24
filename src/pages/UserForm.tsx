import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Paper,
  Button
} from '@mui/material';
import { toast } from 'react-toastify';
import { FormLine } from '../components/FormLine';
import '../styles/form.scss';

type UserFormProps = {
  user:any
};
export function UserForm (props:UserFormProps) {
  const [user, setUser] = useState({ status: '1' });
  const navigate = useNavigate();

  const handleStateChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };
  const handleSucess = () => {
    toast.success('Cadastro realizado com sucesso');
    navigate('/list');
  };

  const handleFailure = (message) => {
    toast.error(message);
  };

  const handleSubmit = async () => {
    return await axios.post('http://localhost:5000/', user).then((resp) => {
      handleSucess();
    }).catch((error) => {
      handleFailure(error.response.data);
    });
  };

  return (
  <div className="container padding">
    <Paper className="paper">
        <FormLine onChange={handleStateChange} data={[{ value: user?.name, key: 'name', label: 'Nome' }]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.email, type: 'email', key: 'email', label: 'E-Mail' },
          { value: user?.login, key: 'login', label: 'Login' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.cpf, type: 'number', key: 'cpf', label: 'Cpf' },
          { value: user?.phone, type: 'number', key: 'phone', label: 'Telefone' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.birhdate, type: 'date', key: 'birthdate', label: 'Data de nascimento' },
          { value: user?.motherName, key: 'motherName', label: 'Nome da mãe' }
        ]}/>
        <FormLine onChange={handleStateChange} data={[
          { value: user?.password, type: 'password', key: 'password', label: 'Password' }
        ]}/>
        <div className="container padding">
          <Button onClick={() => handleSubmit()}variant="contained" >
            Cadastrar
          </Button>
        </div>
    </Paper>
  </div>

  );
}
