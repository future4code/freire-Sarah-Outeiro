import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, API_KEY } from "../constants/urls"

const useMovieGenre = () => {
    const [ genres, setGenres ] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/genre/movie/list?${API_KEY}`)

        .then((sucess) => {
            setMovies(sucess.data.results)
        })
        .catch((error) => {
            console.log(error)
            alert('ocorreu um erro, tente novamente')
        })
    }, [])
    
    return (genres)
}

export default useMovieGenre