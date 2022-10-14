import { Div, TrailerTitle, Video } from "./styled"
import TrailerImage from '../../assets/images/trailerimage.png'

const Trailer = () => {
    return(
        <Div>
            <TrailerTitle>Trailer</TrailerTitle>
            <Video src={TrailerImage} alt='img'/>
        </Div>
    )
}

export default Trailer