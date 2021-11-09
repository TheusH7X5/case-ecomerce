import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";


export const RegisterContainer = styled.div`
align-items: center;
justify-content: center;
min-height: 70vh;
margin-top: 4rem;
`
export const DivForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Input = withStyles({
    root: {
      width: '40%',
      padding:'10px',
      marginBottom: '0.25rem',
      '& label.Mui-focused': {
        color: '#EC805C',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#EC805C',
      },
    }
  })(TextField);

export const BotaoEnviar = styled(Button)({
    top: '10px',
    width: '7%',
    height: '10%',
    cursor: 'pointer',
    '&:hover': {
      fontSize: '82%',
      '&:active': {
        color: '#EC805C',
      }
    }
});

export const Botao = styled.input`
    display:none;
`