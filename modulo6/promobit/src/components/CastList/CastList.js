import { Container, Cast, ActorCards } from './styled'
import ActorCard from '../ActorCard/ActorCard'

const CastList = () => {
    return(
        <Container>
            <Cast>Elenco Original</Cast>
            <ActorCards>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
                <ActorCard/>
            </ActorCards>
        </Container>
    )
}

export default CastList