import { TextField, MenuItem } from '@mui/material';

export function FormLine (values) {
  const { data, onChange } = values;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '2rem', gap: '1rem' }}>
      {data.map(item =>
      <TextField
        key={item.label}
        InputLabelProps={{ shrink: true }}
        id="standard-basic"
        value={data.value}
        label={item.label}
        select = {item?.select}
        defaultValue = {item?.defaultOption}
        style={{ minWidth: item?.minWidth }}
        variant="standard"
        type ={item.type || 'text'}
        onChange={(e) => onChange(item.key, e.target.value)}
        >
        {item?.emptyOption && <MenuItem value=' '>
                    {item?.emptyOption}
                  </MenuItem>}
        {item?.select && item?.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
      )}
    </div>
  );
};
