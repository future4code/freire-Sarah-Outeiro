import { Card, Photo, Name, Character } from './styled'
import ActorPhoto from '../../assets/images/actorphoto.png'

const ActorCard = () => {
    return(
        <Card>
            <Photo src={ActorPhoto} alt='photo'/>
            <Name> Ryan Reynolds </Name>
            <Character> Wade Wilson / DeadPool </Character>
        </Card>
    )
}

export default ActorCard