import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url)

        .then((sucess) => {
            setData(sucess.data)
        })
        .catch((error) => {
            console.log(error)
            alert('ocorreu um erro, tente novamente')
        })
    }, [url])
    
    return (data)
}

export default useRequestData