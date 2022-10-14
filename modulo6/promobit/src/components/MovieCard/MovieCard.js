import { IMG_BASE } from '../../constants/urls'
import { MovieContainer, MoviePoster, MovieName, MovieDate } from './styled'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {
    const { id, poster_path, title, release_date } = movie
    moment.locale('pt-br')
    const day = moment(release_date).format('DD')
    const month = moment(release_date).format('MMM').toUpperCase()
    const year = moment(release_date).format('YYYY')

    return(
        <Link to={`detail/${id}`}>
            <MovieContainer>
                <MoviePoster src={`${IMG_BASE}${poster_path}`} alt={title}/>
                <MovieName>{title}</MovieName>
                <MovieDate>{day} {month} {year}</MovieDate>
            </MovieContainer>
        </Link>
    )
}

export default MovieCard