import axios from 'axios';
import { useState, useEffect } from 'react';
import { ListItem } from '../components/ListItem';
export function UserList () {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      return await axios.get('http://localhost:5000/').then((resp) => {
        setData(resp.data);
      });
      // return ['text1', 'text2', 'text3'];
    };
    fetchData();
  }, []);
  return (
    <p>
      <ListItem data={data}/>
    </p>
  );
}
