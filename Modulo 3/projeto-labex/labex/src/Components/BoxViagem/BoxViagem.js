import { Viagem } from './styled'
import { ButtonPrimario } from '../../styles'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getTripsUrl } from '../../Constants';

function BoxViagem() {
    const [ trips, setTrips ] = useState([])

    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate('/inscricao')
    }

    const getTrips = () => {
        axios.get(getTripsUrl)
            .then((sucess) => {
                setTrips(sucess.data.trips)
            })
            .catch((error) => {
                console.log('deu ruim', error.data.response.message)
            })
    }

    useEffect(() => {
        getTrips()
    },[])

    const listaViagem = trips.map((trip) => {
        return(
            <Viagem key={trip.id}>  
                <p><b>Nome:</b> {trip.name} </p>
                <p><b>Descrição:</b> {trip.description} </p>
                <p><b>Planeta:</b> {trip.planet} </p>
                <p><b>Duração:</b> {trip.durationInDays / 12 } </p>
                <p><b>Data:</b> {trip.date} </p>
            </Viagem>
        )
    })

    return (
        <div>
            {listaViagem}
            <ButtonPrimario onClick={goToApplicationFormPage}>Inscrever-se</ButtonPrimario>
        </div>
    );
  }
  
  export default BoxViagem;