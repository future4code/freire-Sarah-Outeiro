import Logo from '../../assets/images/logo.png';
import { LogoLogin, Titulo, Botao } from './styled';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import { goToPostListPage, goToSignUpPage } from '../../routes/coordinator';

const LoginPage = () => {
  const navigate = useNavigate();

    return (
      <div>
        <Titulo>
          <LogoLogin src={Logo} alt='Logo do LabEddit'/>
          <h1>LabEddit</h1>
          <p>O projeto de rede social da Labenu</p>
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
                label="Nome"
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
            <Button 
              variant="contained" 
              endIcon={<SendIcon />}
              fullWidth
              size="large"
              onClick={() => goToPostListPage(navigate)}
            >
              Continuar
            </Button>
          </Grid>
        </Titulo>
        <Botao>
          <Grid
            container spacing={0}
          >
            <Button 
              variant="outlined"
              fullWidth
              size="large"
              onClick={() => goToSignUpPage(navigate)}
            >
              Crie uma conta!
            </Button>
          </Grid>
        </Botao>
      </div>
    );
  };
  
  export default LoginPage;