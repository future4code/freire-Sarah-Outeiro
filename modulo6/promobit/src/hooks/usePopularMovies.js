import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_URL, API_KEY } from "../constants/urls"

const usePopularMovies = () => {
    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/movie/popular?${API_KEY}`)

        .then((sucess) => {
            setMovies(sucess.data.results)
        })
        .catch((error) => {
            console.log(error)
            alert('ocorreu um erro, tente novamente')
        })
    }, [])
    
    return (movies)
}

export default usePopularMovies