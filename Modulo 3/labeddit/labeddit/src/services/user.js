import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToPostListPage } from '../routes/coordinator';

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((sucess) => {
        localStorage.setItem('token', sucess.data.token)
        clear()
        goToPostListPage(navigate)
    })
    .catch((error) => {
        alert('Erro no login')
    })
  }

  export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((sucess) => {
        localStorage.setItem('token', sucess.data.token)
        clear()
        goToPostListPage(navigate)
    })
    .catch((error) => {
        alert('Erro no login')
    })
  }