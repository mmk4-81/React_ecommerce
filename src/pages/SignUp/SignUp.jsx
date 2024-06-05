import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import pic from './../../assets/img/back.jpg';

const Signup = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
      }}
    >
      <Container maxWidth="sm">
        <Box 
          sx={{ 
            backgroundPosition: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', 
            padding: '40px', 
            borderRadius: '8px',
            textAlign: 'right', 
            direction: 'rtl', 
            fontFamily: 'Vazir', 
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            ثبت نام
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="نام کاربری"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontSize: '0.800rem', // Smaller font size
                  right: '40px', // Align to the right
                  transformOrigin: 'top right', // Adjust transform origin
                  '&.Mui-focused': {
                    color: 'black', // Change color when focused
                  },
                  '&.MuiInputLabel-shrink': {
                    transformOrigin: 'top right', // Align when focused
                  },
                },
              }}
              InputProps={{
                sx: {
                  '& input': {
                    textAlign: 'right', // Align text to the right
                  },
                  '& input:focus': { // Change focus color
                    backgroundColor: '#ffffff',
                  },
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontSize: '0.800rem', // Smaller font size
                  right: '40px', // Align to the right
                  transformOrigin: 'top right', // Adjust transform origin
                  '&.Mui-focused': {
                    color: 'black', // Change color when focused
                  },
                  '&.MuiInputLabel-shrink': {
                    transformOrigin: 'top right', // Align when focused
                  },
                },
              }}
              InputProps={{
                sx: {
                  '& input': {
                    textAlign: 'right', // Align text to the right
                  },
                  '& input:focus': { // Change focus color
                    backgroundColor: '#ffffff',
                  },
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontSize: '0.800rem', // Smaller font size
                  right: '40px', // Align to the right
                  transformOrigin: 'top right', // Adjust transform origin
                  '&.Mui-focused': {
                    color: 'black', // Change color when focused
                  },
                  '&.MuiInputLabel-shrink': {
                    transformOrigin: 'top right', // Align when focused
                  },
                },
              }}
              InputProps={{
                sx: {
                  '& input': {
                    textAlign: 'right', // Align text to the right
                  },
                  '& input:focus': { // Change focus color
                    backgroundColor: '#ffffff',
                  },
                },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="تأیید رمز عبور"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputLabelProps={{
                sx: {
                  fontSize: '0.800rem', // Smaller font size
                  right: '40px', // Align to the right
                  transformOrigin: 'top right', // Adjust transform origin
                  '&.Mui-focused': {
                    color: 'black', // Change color when focused
                  },
                  '&.MuiInputLabel-shrink': {
                    transformOrigin: 'top right', // Align when focused
                  },
                },
              }}
              InputProps={{
                sx: {
                  '& input': {
                    textAlign: 'right', // Align text to the right
                  },
                  '& input:focus': { // Change focus color
                    backgroundColor: '#ffffff',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                mt: 2, 
                backgroundColor: theme.palette.secondary.main, 
                color: "#fff", 
                fontFamily: 'Vazir',
                '&:hover': {
                  backgroundColor: '#a65b5c', 
                },
              }}
            >
              ثبت نام
            </Button>
          </form>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2" gutterBottom>
              اگر حساب کاربری دارید:
            </Typography>
            <Button
              component={RouterLink}
              to="/login"
              fullWidth
              variant="contained"
              sx={{ 
                width:'50%',
                color: "#fff", 
                mt: 1, 
                backgroundColor: theme.palette.secondary.main, 
                fontFamily: 'Vazir',
                '&:hover': {
                  backgroundColor: '#a65b5c', 
                },
              }}
            >
              ورود
            </Button>
            <Link component={RouterLink} to="/" variant="body2" sx={{ display: 'block', mt: 2, color: theme.palette.secondary.main, fontFamily: 'Vazir' }}>
              بازگشت به صفحه اصلی سایت
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
