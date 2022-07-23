import { AppBar as AppBarMui, Toolbar, IconButton, Stack, Button, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/appBar.scss';

type AppBarProps = {
};
export function AppBar (props:AppBarProps) {
  return (
    <AppBarMui position='static'>
      <Toolbar >
        <Link href="/">
            <IconButton className="link" size='large' edge="start" aria-label="logo">
                <HomeIcon/>
            </IconButton>
        </Link>
        <Stack direction='row' spacing={2}>
            <Link className="link" href="/list">
                <Button color='inherit'>Listagem</Button>
            </Link>
            <Link className="link" href="/form">
                <Button color='inherit'>Criação</Button>
            </Link>
        </Stack>
      </Toolbar>
    </AppBarMui>
  );
}
