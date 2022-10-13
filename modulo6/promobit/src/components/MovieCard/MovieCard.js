import { MovieContainer, MoviePoster, MovieName, MovieDate } from './styled'

const MovieCard = ({image, name, date}) => {
    return(
        <MovieContainer>
            {/* {image} */}
            <MoviePoster src='https://upload.wikimedia.org/wikipedia/pt/0/0b/How_to_Train_Your_Dragon_3_poster.jpg' alt='capa'/>
            {/* {name} */}
            <MovieName>Como treinar o seu dragão</MovieName>
            {/* {date} */}
            <MovieDate>17 JAN 2019</MovieDate>
        </MovieContainer>
    )
}

export default MovieCard