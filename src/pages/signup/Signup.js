import './Signup.module.css';
import { useSignup } from '../../hooks/useSignup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/melike-%C3%A7i%C4%9Fdem-6461a91b5/">
          Your Linkedin
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();

export default function Signup(){
    const navigate = useNavigate();
    const {signup,error,loading}=useSignup();
    const [values, setValues] = useState({
        email:'',
        password:'',
        userName:''
    })
    const handleChange = (prop) => (event)=>{
        setValues({...values,[prop]:event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        signup(values.email,values.password,values.userName);
        navigate("/");
      };
    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                onChange={handleChange('email')}
                value={values.email}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
               onChange={handleChange('password')}
               value={values.password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                onChange={handleChange('userName')}
                value={values.userName}
                margin="normal"
                required
                fullWidth
                id="userName"
                label="User Name"
                name="userName"
                autoComplete="userName"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {!loading &&  <Button type="submit"fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up </Button>}
              {loading &&  <Button disabled type="submit"fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Loading </Button>}
              {error && <p>{error}</p>}
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    )
}