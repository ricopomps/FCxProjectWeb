import { Paper } from '@mui/material';

type ListItemProps = {
    data:any[];
};
export function ListItem (props:ListItemProps) {
  return (
  <>
  {props.data.map(value => (<div key={value} style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
      <Paper style={{ width: '80%', padding: '1rem', backgroundColor: '#6daff1' }}>
        {value}
      </Paper>
    </div>))}

  </>

  );
}
