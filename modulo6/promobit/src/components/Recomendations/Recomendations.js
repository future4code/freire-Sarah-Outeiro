import { Div, RecomTitle, RecomList } from './styled'
import MovieCard from '../MovieCard/MovieCard'

const Recomendations = () => {
    return(
        <Div>
            <RecomTitle>Recomendações</RecomTitle>
            <RecomList>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </RecomList>
        </Div>
    )
}

export default Recomendations