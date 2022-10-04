import FrontCard from "../../components/FrontCard/FrontCard"
import { useLocation, useNavigate } from 'react-router-dom'
import { goToCards, goToHomePage } from "../../routes/coordinator"


const CardDetail = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const { name, image } = location.state

    return(
        <>
            <div>
                <FrontCard image={image}/>
                <p>{name}</p>
                <p>Lorem Ipsum</p>
                <button onClick={() => goToCards(navigate)}>Recomeçar</button>
                <button onClick={() => goToHomePage(navigate)}>HomePage</button>
            </div>
        </>
    )
}

export default CardDetail