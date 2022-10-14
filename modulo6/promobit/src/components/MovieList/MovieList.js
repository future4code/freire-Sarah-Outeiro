import { MovieContainer } from './styled'
import usePopularMovies from '../../hooks/usePopularMovies'
import MovieCard from '../../components/MovieCard/MovieCard'

const MovieList = () => {
    const movies = usePopularMovies()
    console.log(movies)

    const moviesList = movies.map((movie) => {
        return(
            <MovieCard 
                key={movie.id} 
                movie={movie}
            />
        )
    })
    return(
        <MovieContainer>
            {moviesList}
        </MovieContainer>
    )
}

export default MovieList