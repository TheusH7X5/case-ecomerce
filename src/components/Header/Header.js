import React from 'react';
import { AppBar, Button } from '@material-ui/core'
import logo from '../../assets/logoheader.webp'
import {ImgHome, StyledToolbar} from "./styled";
import { goToHomePage, goToRegisterPage, goToSellingPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom';


export const Header = () => {

  const history = useHistory()

  return (
    <>
      <AppBar color="inherit" position="static">
        <StyledToolbar>
          <ImgHome src={logo} onClick={() => goToHomePage(history)} cursor='pointer'/>
            <Button onClick={() => goToRegisterPage(history)} color="inherit">Registrar</Button>
            <Button onClick={() => goToSellingPage(history)} color="inherit">Vendas</Button>
        </StyledToolbar>
      </AppBar>
      </>
  );
}