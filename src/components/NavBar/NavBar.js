import React from 'react';
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { signOutUser } from '../../Auth/signOutUser';

const NavBar = ({ isLogged, setIsLogged }) => {
    const navigate = useNavigate();

    const homeHandle = () => {
        navigate('/home');
    }

    const profileHandle = () => {
        navigate('/profile');
    }

    const loginHandle = () => {
        navigate('/login');
    }

    const signUpHandle = () => {
        navigate('/registration');
    }
    const signOutHandle = () => {
        if(isLogged) {
            signOutUser(setIsLogged);
            navigate('/');
        }
    }

    const title = isLogged ? 'Logged' : 'Unlogged';

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
                        <Grid>
                            <Button onClick={profileHandle} color="inherit">Profile</Button>
                            <Button onClick={homeHandle} color="inherit">Home</Button>
                            <Button onClick={loginHandle} color="inherit">Sign In</Button>
                            <Button onClick={signUpHandle} color="inherit">Sign Up</Button>
                            <Button onClick={signOutHandle} color="inherit">Sign Out</Button>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavBar;