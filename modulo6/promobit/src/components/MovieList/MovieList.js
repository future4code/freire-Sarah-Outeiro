import MovieCard from '../MovieCard/MovieCard'
import { MovieContainer } from './styled'
import useRequestData from '../../hooks/useRequestData'
import { API_KEY, BASE_URL } from '../../constants/urls'

const MovieList = () => {
    const popularMovies = useRequestData([], `${BASE_URL}/movie/popular?${API_KEY}`)
    console.log(popularMovies.results)

    return(
        <MovieContainer>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </MovieContainer>
    )
}

export default MovieList