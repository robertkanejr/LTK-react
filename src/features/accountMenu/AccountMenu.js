import * as React from 'react';
import Box from '@mui/material/Box';
import { Avatar, Menu, MenuItem, IconButton, Typography, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
// import { PersonAdd, Settings, Logout } from '@mui/icons-material';

export default function AccountMenu({ onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Link to="/contact" style={{textDecoration:"none", color:"blue"}}><Typography sx={{ minWidth: 100 }}>Contact</Typography></Link>
        <Link to="/profile" style={{textDecoration:"none", color:"blue"}}><Typography sx={{ minWidth: 100 }}>Profile</Typography></Link>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/todo" style={{textDecoration:"none", color:"black"}}>
          <MenuItem onClick={onClick}>
            <Avatar /> Open Form
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}
