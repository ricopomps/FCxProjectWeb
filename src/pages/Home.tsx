import { ListItem } from '../components/ListItem';
export function Home () {
  const data = ['text1', 'text2', 'text3'];
  return (
    <>
    <ListItem data={data}/>
    </>
  );
}
