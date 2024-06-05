import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import logo from './../../assets/logo/logo.png';
import LogoutDialog from '../../pages/logout/logout';

const pages = [
  { id: 'home', name: 'صفحه اصلی', link: '/', icon: <HomeIcon /> },
  { id: 'products', name: 'محصولات', link: '/products', icon: <CategoryIcon /> },
  { id: 'shops', name: 'فروشگاه‌ها', link: '/shops', icon: <StoreIcon /> },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false); // استیت برای نمایش/مخفی کردن دیالوگ باکس خروج

  const isLoggedIn = true;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'white', height: 80 }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ height: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ height: 70, width: 70 }} />
            </Link>
          </Box>

          {/* Hamburger menu for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', position: 'absolute', right: 0 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#8d494a' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  width: '50%',
                  height: '30vh',
                  top: '10px',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  display: 'flex',
                  justifyContent: 'right',
                  alignItems: 'start',
                  borderRadius: '10px'
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  component={Link}
                  to={page.link}
                  onClick={handleCloseNavMenu}
                  sx={{ color: '#8d494a', justifyContent: 'start', width: '100%' }}
                >
                  {page.icon}
                  <Typography sx={{ mr: 2 }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo and menu for desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyItems: 'right' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Link to="/">
                <img src={logo} alt="Logo" style={{ height: 70, width: 80, marginTop: 10 }} />
              </Link>
            </Box>

            {/* Pages for desktop */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 10, gap: 2 }}>
              {pages.map((page) => (
                <Link
                  key={page.id}
                  to={page.link}
                  style={{ margin: '0 8px', color: '#8d494a', textDecoration: 'none', padding: '16px 0' }}
                >
                  {page.name}
                </Link>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
              padding: '10px',
            }}
          >
            <IconButton color="inherit" component={Link} to="/search">
              <SearchIcon sx={{ color: '#8d494a' }} />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCartIcon sx={{ color: '#8d494a' }} />
            </IconButton>
            {!isLoggedIn ? (
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: 'white',
                  backgroundColor: '#8d494a',
                  borderRadius: '20px',
                  padding: '5px 15px',
                  '&:hover': {
                    backgroundColor: '#a65b5c',
                  },
                }}
              >
                ورود
              </Button>
            ) : (
              <>
                <IconButton component={Link} to="/profile" sx={{ p: 0, marginRight: '20px' }}>
                  <AccountCircle sx={{ color: '#8d494a', fontSize: 30 }} />
                </IconButton>
                <Button
                  onClick={handleOpenLogoutDialog} // فراخوانی دیالوگ باکس خروج

                  sx={{
                    color: 'white',
                    backgroundColor: '#8d494a',
                    borderRadius: '20px',
                    padding: '5px 15px',
                    '&:hover': {
                      backgroundColor: '#a65b5c',
                    },
                    marginRight: '10px',
                  }}
                >
                  خروج
                </Button>
                <LogoutDialog // نمایش کامپوننت دیالوگ باکس خروج
                  open={openLogoutDialog}
                  handleClose={handleCloseLogoutDialog}
                  handleLogout={handleCloseLogoutDialog}
                />
              </>
            )
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
