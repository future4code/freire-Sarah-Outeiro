import HeaderSignUp from '../../components/Header/HeaderSignUp';
import { Titulo, Body } from './styled';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox'
import { useNavigate } from 'react-router-dom';
import { goToPostListPage } from '../../routes/coordinator';
import Container from '@mui/material/Container';

const SignUpPage = () => {
  const navigate = useNavigate();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
      <>
        <HeaderSignUp/>
          <Container maxWidth='xs'>
          <Titulo>Olá, boas vindas ao LabEddit!</Titulo>
          <Body>
          <Grid
              container spacing={1}
              pl={5}
              pr={5}
              pt={5}
              pb={2}
              >
              <Grid item xs={12}>
                <TextField
                  id="outlined-name"
                  label="Nome de usuário"
                  fullWidth
                  color="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-name"
                  label="E-mail"
                  fullWidth
                  color="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-name"
                  label="Senha"
                  type='password'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid 
              container spacing={0}
              pl={5}
              pr={5}
              pb={1}
            >
              <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
              <Grid
                container spacing={2}
              >
                <Grid item xs={2}>
                  <Checkbox {...label} />
                </Grid>
                <Grid item xs={10}>
                  <p>'Eu concordo em receber e-mails sobrer coisas legais no LabEddit'</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid 
              container spacing={0}
              pl={5}
              pr={5}
              pb={1}
              pt={3}
            >
              <Button 
                variant="contained" 
                fullWidth
                size="large"
                onClick={() => goToPostListPage(navigate)}
              >
                Cadastrar
              </Button>
            </Grid>
          </Body>
        </Container>
      </>
    );
  };
  
  export default SignUpPage;