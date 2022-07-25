import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolBar, Img } from './styled';
import Button from '@mui/material/Button';
import { goToPostListPage, goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToPostListPage(navigate)} variant="h6" component="div">
            <Img src={Logo}/>
            LabEddit
          </Button>
          <Button onClick={() => goToLoginPage(navigate)} color="inherit">Logout</Button>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Header;