import styles from './Navbar.module.css';
import AppBar  from '@mui/material/AppBar';
import Box  from '@mui/material/Box';
import Typography  from '@mui/material/Typography';
import Toolbar  from '@mui/material/Toolbar';
import Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLogouth } from '../hooks/useLogauth';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar(){
    const {logouth} = useLogouth();
    const {user} = useAuthContext();
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                        <Link component='button' to='/' className={styles.link}>Harcama Takip App</Link>
                    </Typography>
                  {!user && (
                    <>
                        <Button variant='outlined' color='inherit'>
                            <Link component='button' className={styles.link} to='/login'>GİRİŞ</Link>
                        </Button>
                        <Button variant='outlined' color='inherit' sx={{ml:5}}>
                            <Link component='button' className={styles.link} to='/signup'>ÜYE OL</Link>
                        </Button>
                    </>)
                  }
                  {user && (
                    <>
                        <Typography variant='caption'>
                           Merhaba {user.displayName}
                        </Typography>
                        <Button variant='outlined' color='inherit'  onClick={logouth} sx={{ml:5}}>
                            ÇIKIŞ
                        </Button>
                    </>
                  )}
                   
                </Toolbar>
            </AppBar>
        </Box>
    )
}