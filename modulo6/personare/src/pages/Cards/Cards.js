import BackCard from '../../components/BackCard/BackCard'
import { goToCardDetail, goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useGetCards from '../../hooks/useGetCards'

const Cards = () => {
    const { cards } = useGetCards()

    const navigate = useNavigate()

    const cardsList = cards.map((card) => {
        return(
            <BackCard onClick={() => goToCardDetail(navigate, card)} key={card.name}/>
        )
    })


    return(
        <>
            <button onClick={() => goToHomePage(navigate)}>HomePage</button>
            Cartas Embaralhadas e Descrição
            {cardsList}
        </>
    )
}

export default Cards