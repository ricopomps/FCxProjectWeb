import { Paper, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
type UserFormProps = {
  user:any
};
export function UserForm (props:UserFormProps) {
  const getColor = (status) => {
    const color = status === 1 ? 'green' : status === 2 ? 'yellow' : 'red';
    return color;
  };
  const FormHeader = () => {
    return (
    <div style={{ display: 'flex', padding: '1rem' }}>
        <TextField
        id="standard-basic"
        value={props?.user?.name}
        label="Nome"
        variant="standard" />
        <div style={{ flexGrow: 1 }}/>
        <PersonIcon style={{ color: getColor(props?.user?.status), padding: '1rem' }}/>
        </div>
    );
  };
  const FormLine = () => {
    return (
    <div style={{ display: 'flex', padding: '1rem', gap: '1rem' }}>
      <TextField
        id="standard-basic"
        value={props?.user?.login}
        label="Login"
        variant="standard" />
      <TextField
        id="standard-basic"
        value={props?.user?.email}
        label="E-Mail"
        variant="standard" />
    </div>
    );
  };
  return (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
  <Paper style={{ width: '80%', padding: '1rem' }}>
      <FormHeader/>
      <FormLine/>
      <FormLine/>
      <FormLine/>
      <FormLine/>
      <FormLine/>
  </Paper>
  </div>

  );
}
