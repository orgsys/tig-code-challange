import React from 'react';
import { Box } from '@chakra-ui/react';
import CompanyLogo from './Logo';

const appBarStyle = {
  padding: '20px',
  display: 'flex',
  flex: 1,
  background: 'white',
  color: 'black',
  as: 'header',
};

const AppBar = () => {
  return (
    <Box style={appBarStyle} as='header'>
      <CompanyLogo />
    </Box>
  );
};

export default AppBar;
