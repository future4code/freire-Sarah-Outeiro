import { Container, CartContainer } from './styled'
import HeaderCarrinho from '../../components/HeaderCarrinho/HeaderCarinho'
import CartAdress from '../../components/CartAdress/CartAdress'
import RestaurantAdress from '../../components/RestaurantAdress/RestaurantAdress'
import PlateCard from '../../components/PlateCard/PlateCard'
import NavBar from '../../components/NavBar/NavBar'


const CartPage = () => {
    return (
      <Container>
        <HeaderCarrinho/>
        <CartContainer>
          <CartAdress/>
          <RestaurantAdress/>
          <PlateCard/>
          <PlateCard/>
          <PlateCard/>
          <PlateCard/>
        </CartContainer>
        <NavBar/>
      </Container>
    );
  }
  
  export default CartPage