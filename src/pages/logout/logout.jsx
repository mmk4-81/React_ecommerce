import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function LogoutDialog({ open, handleClose, handleLogout }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"خروج از حساب کاربری"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          آیا مطمئن هستید که می‌خواهید خارج شوید؟
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{color:'#000' }}>
          لغو
        </Button>
        <Button onClick={handleLogout}  autoFocus sx={{color:'#FFF', backgroundColor:"#8d494a", '&:hover': {
                      backgroundColor: '#a65b5c',
                    },}}>
          خروج
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LogoutDialog;
