import HomePageTitle from '../../components/HomePageTitle/HomePageTitle'
import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../components/Pagination/Pagination'

const HomePage = () => {
    return (
      <>
        <HomePageTitle/>
        <MovieList/>
        <Pagination/>
      </>
    )
  }
  
  export default HomePage