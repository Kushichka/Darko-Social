import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ user, setUser }) => {

    const loginHandle = () => {
        setUser(!user);
    }

    const btnName = user ? 'Log Out' : 'Login';
    const title = user ? 'Chat' : 'Login';

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Button onClick={loginHandle} color="inherit">{btnName}</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavBar;