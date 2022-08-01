import useForm from "../../hooks/useForm"
import { login } from "../../services/user"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: '', password: ''})

    const navigate = useNavigate()

    const onSubmitForm = (event) => {
      console.log(form)
      event.preventDefault()
      login(form, clear, navigate)
    }
    
    return(
        <form onSubmit={onSubmitForm}>
          <input 
            name={'email'}
            value={form.email}
            onChange={onChange}
            placeholder={'E-mail'}
            required
            type={'email'}
          />
          <input 
            name={'password'}
            value={form.password}
            onChange={onChange}
            placeholder={'Password'}
            required
            type={'password'}
          />
            
          <button type={'submit'}>Login</button>
        </form>
    )
}

export default LoginForm