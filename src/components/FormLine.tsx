import { TextField } from '@mui/material';

export function FormLine (values) {
  const { data, onChange } = values;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '2rem', gap: '1rem' }}>
      {data.map(item =>
        <TextField
        key={item.label}
        id="standard-basic"
        value={data.value}
        label={item.label}
        variant="standard"
        onChange={(e) => onChange(item.key, e.target.value)}
        />
      )}
    </div>
  );
};
