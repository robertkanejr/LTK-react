import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AccountMenu from '../features/accountMenu/AccountMenu';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{display: 'flex', flexDirection:"column", alignItems: 'center', textAlign: 'center'}}>
	    <AccountMenu />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
      <Outlet />
    </Container>
  );
}

export default Home
