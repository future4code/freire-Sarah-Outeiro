import { goToCards } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()

    return(
        <>
            <button onClick={() => goToCards(navigate)}>
                Iniciar
            </button>
        </>
    )
}

export default HomePage