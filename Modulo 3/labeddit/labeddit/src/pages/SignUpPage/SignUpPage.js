import HeaderSignUp from '../../components/Header/HeaderSignUp';
import { Titulo, Body } from './styled';
import Container from '@mui/material/Container';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
  useUnprotectedPage()

    return (
      <>
        <HeaderSignUp/>
          <Container maxWidth='xs'>
          <Titulo>Olá, boas vindas ao LabEddit!</Titulo>
          <Body>
            <SignUpForm/>
          </Body>
        </Container>
      </>
    );
  };
  
  export default SignUpPage;