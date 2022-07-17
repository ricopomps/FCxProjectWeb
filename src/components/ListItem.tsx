import { Paper, Modal, Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
type ListItemProps = {
    data:any[];
    fetchData: ()=>{};
};
type InputProps = {
  value:string;
  keyName:string;
  type:string;
  label:string;
};
export function ListItem (props:ListItemProps) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  const getColor = (status) => {
    const color = status === 1 ? 'green' : status === 2 ? 'yellow' : 'red';
    return color;
  };
  const handleSave = async () => {
    await axios.put('http://localhost:5000', selectedUser).then((resp) => console.log(resp));
    props.fetchData();
    setOpen(false);
  };
  const Input = ({ value, keyName, type = 'text', label }:InputProps) => {
    return (
      <div style={{ padding: '2px', color: 'black', display: 'inline-grid' }}>
        <label>{label}</label>
        <input value={value} type={type} onChange={(e) => setSelectedUser({ ...selectedUser, [keyName]: e.target.value })} />
      </div>
    );
  };
  return (
  <>
  {props?.data?.length > 0 && props.data.map(value => (
    <div key={value._id} style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
      <Paper onClick={() => {
        setOpen(true);
        setSelectedUser(value);
      }} style={{ width: '80%', display: 'flex', padding: '1rem', backgroundColor: '#6daff1' }}>
        <PersonIcon style={{ color: getColor(value.status), marginRight: '1rem' }}/>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {value.name}
        </div>
      </Paper>
    </div>
  ))}
  <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar usuário
          </Typography>
          <Input value={selectedUser.name} keyName='name' label='Nome'/>
          <Input value={selectedUser.birthdate ? selectedUser.birthdate.substring(0, 10) : ''} type="date" keyName='birthdate' label='Data de Nascimento'/>
          <Input value={selectedUser.cpf} keyName='cpf' label='Cpf'/>
          <Input value={selectedUser.login} keyName='login' label='Login'/>
          <Input value={selectedUser.motherName} keyName='motherName' label='Nome da mãe'/>
          <Input value={selectedUser.phone} keyName='phone' label='Telefone'/>
          <Input value={selectedUser.email} keyName='email' label='E-Mail' />
          <div style={{ padding: '2px', color: 'black', display: 'inline-grid' }}>
            <label>Status</label>
            <select value={selectedUser.status} type='number' onChange={(e) => setSelectedUser({ ...selectedUser, status: e.target.value })}
            >
            <option value = '1'>
              Ativado
            </option>
            <option value = '2'>
              Inativado
            </option>
            <option value = '3'>
              Bloqueado
            </option>
            </select>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
              <Button onClick={() => setOpen(false)}>FECHAR</Button>
            </div>
            <Button onClick={() => handleSave()}>SALVAR</Button>
          </div>
        </Box>
      </Modal>
  </>

  );
}
