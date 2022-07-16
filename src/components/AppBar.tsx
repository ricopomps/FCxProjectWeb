import { AppBar as AppBarMui, Toolbar, IconButton, Stack, Button, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
type AppBarProps = {
};
export function AppBar (props:AppBarProps) {
  return (
    <AppBarMui position='static'>
      <Toolbar>
        <Link href="/">
            <IconButton style={{ color: '#fafafa' }} size='large' edge="start" aria-label="logo">
                <HomeIcon/>
            </IconButton>
        </Link>
        <Stack direction='row' spacing={2}>
            <Link style={{ color: '#fafafa' }} href="/list">
                <Button color='inherit'>Listagem</Button>
            </Link>
            <Link style={{ color: '#fafafa' }} href="/form">
                <Button color='inherit'>Criação</Button>
            </Link>
        </Stack>
      </Toolbar>
    </AppBarMui>
  );
}
