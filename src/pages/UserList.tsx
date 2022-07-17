import axios from 'axios';
import {
  Paper,
  Button,
  IconButton,
  Pagination
} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { useState, useEffect } from 'react';
import { ListItem } from '../components/ListItem';
import { FormLine } from '../components/FormLine';

export function UserList (props) {
  const [data, setData] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filter, setFilter] = useState({
    status: '1',
    page: '1'
  });
  const [search, setSearch] = useState(false);
  const handleStateChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  function useDebounce (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
    return debouncedValue;
  }
  const debouncedFilter = useDebounce(filter, 500);
  useEffect(() => {
    const serialize = function (obj) {
      const str = [];
      for (const p in obj) {
        if (obj[p].trim()) { str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])); }
      }
      return str.join('&');
    };
    const fetchData = async () => {
      return await axios.get(`http://localhost:5000/?${serialize(debouncedFilter)}`).then((resp) => {
        setData(resp.data.paginatedResult);
        setTotalCount(resp.data.totalCount);
      });
    };
    fetchData();
  }, [debouncedFilter, search]);

  const ageGroupData = [
    { value: '1', label: 'Maior que 18 e menor que 26' },
    { value: '2', label: 'Maior que 25 e menor que 31' },
    { value: '3', label: 'Maior que 30 e menor que 36' },
    { value: '4', label: 'Maior que 40' }
  ];
  const statusData = [
    { value: '1', label: 'Ativado' },
    { value: '2', label: 'Inativado' },
    { value: '3', label: 'Bloqueado' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 12px' }}>
        <Paper style={{ width: '80%', padding: '1rem' }}>
          <FormLine
          onChange={handleStateChange}
          data={
            [
              { value: filter?.name, key: 'name', label: 'Nome' },
              { value: filter?.cpf, key: 'cpf', label: 'Cpf' },
              { value: filter?.login, key: 'login', label: 'Login' }
            ]}
            />
            {toggleFilter && <><FormLine
              onChange={handleStateChange}
              data={
                [
                  { value: filter?.minBirthDate, key: 'minBirthDate', type: 'date', label: 'Data min nascimento' },
                  { value: filter?.maxBirthDate, key: 'maxBirthDate', type: 'date', label: 'Data max nascimento' },
                  { value: filter?.minInsertionDate, key: 'minInsertionDate', type: 'date', label: 'Data min inserção' },
                  { value: filter?.maxInsertionDate, key: 'maxInsertionDate', type: 'date', label: 'Data max inserção' }
                ]}
            />
            <FormLine
              onChange={handleStateChange}
              data={
                [
                  { value: filter?.minUpdateDate, key: 'minUpdateDate', type: 'date', label: 'Data min alteração' },
                  { value: filter?.maxUpdateDate, key: 'maxUpdateDate', type: 'date', label: 'Data max alteração' },
                  { value: filter?.ageGroup, key: 'ageGroup', minWidth: '8rem', select: true, options: ageGroupData, emptyOption: 'Escolha a faixa etária', label: 'Faixa etária' },
                  { value: filter?.status, key: 'status', minWidth: '8rem', select: true, defaultOption: '1', options: statusData, label: 'Status' }
                ]}
            /></>}
            <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '0.5em', gap: '1rem' }}>
              <IconButton onClick={() => setToggleFilter(!toggleFilter)} style={{ color: '#1976d2' }} size='large' edge="start" aria-label="logo">
                {toggleFilter ? <FilterAltIcon/> : <FilterAltOffIcon/>}
              </IconButton>
              <Button onClick={() => setSearch(!search)}variant="contained" >
                Pesquisar
              </Button>
            </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'white' }}>
        <Pagination style={{ color: 'white' }} count={Math.ceil(totalCount / 10)} color="primary" onChange={(e, value) => handleStateChange('page', value.toString())} />
      </div>
        </Paper>
      </div>
      <ListItem data={data}/>
    </div>
  );
}
