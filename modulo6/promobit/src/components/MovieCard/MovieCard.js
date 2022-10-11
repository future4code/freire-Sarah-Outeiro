import { MovieContainer } from './styled'

const MovieCard = ({image, name, date}) => {
    return(
        <MovieContainer>
            {image}
            {name}
            {date}
        </MovieContainer>
    )
}

export default MovieCard