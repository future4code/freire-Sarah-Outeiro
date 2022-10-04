import BackCard from '../../components/BackCard/BackCard'
import { goToCardDetail, goToCards, goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useGetCards from '../../hooks/useGetCards'
import {  CartasDiv, Introducao, Mesa, Cartas } from './styled'

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
            <button onClick={() => goToCards(navigate)}>Recomeçar</button>
            <CartasDiv>
                    <Introducao>Cartas Embaralhadas e Descrição</Introducao>
                <Mesa>
                    <Cartas>
                        {cardsList}
                    </Cartas>
                </Mesa>
            </CartasDiv>
        </>
    )
}

export default Cards