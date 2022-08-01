import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToRecipesList } from "../routes/coordinator"

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/user/login`, body)
    .then((sucess) => {
      localStorage.setItem('token', sucess.data.token)
      clear()
      goToRecipesList(navigate)
    })
    .catch((error) => {
      alert('Erro no Login')
    })
  }

export const signUp = (body, clear, navigate) => {
  axios.post(`${BASE_URL}/user/signup`, body)
  .then((sucess) => {
    localStorage.setItem('token', sucess.data.token)
    clear()
    goToRecipesList(navigate)
  })
  .catch((error) => {
    alert('Erro no cadastro')
  })
}