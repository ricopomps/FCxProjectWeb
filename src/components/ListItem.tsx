import { Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
type ListItemProps = {
    data:any[];
};
export function ListItem (props:ListItemProps) {
  const getColor = (status) => {
    const color = status === 1 ? 'green' : status === 2 ? 'yellow' : 'red';
    return color;
  };
  return (
  <>
  {props?.data?.length > 0 && props.data.map(value => (
    <div key={value._id} style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
      <Paper style={{ width: '80%', display: 'flex', padding: '1rem', backgroundColor: '#6daff1' }}>
        <PersonIcon style={{ color: getColor(value.status) }}/>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {value.name}
        </div>
        <AddCircleOutlineIcon onClick={() => {}} style={{ color: 'green' }}/>
        <CancelIcon onClick={() => {}} style={{ color: 'red' }}/>
      </Paper>
    </div>
  ))}
  </>

  );
}
