import { Container, BoxMatch, Titulo, Logo, People, Perfis,Foto, Footer } from './styled'
import AstroLogo from '../../Assets/Images/logoastro.png'
import AstroPeople from '../../Assets/Images/people.png'
import Dislike from '../../Assets/Images/dislike.png'
import Like from '../../Assets/Images/like.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'


function TelaInicial(props) {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  const getProfile = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/person'
    axios.get(url)
    .then((sucess) => {
      setProfile(sucess.data.profile)
      setLoading(false)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
  }

  useEffect(() => {
    getProfile()
  },[])

  const onClickIr = () => {
    props.clickMatches()
  }

  const onClickInicio = () => {
    props.clickInicio()
  }

  const loadProfile = () => {
    if(!loading) {
      return(
        <div>
          <Perfis>
              <Foto img={profile.photo} alt={profile.photo_alt}>
                <div>
                  <h3>{profile.name}, {profile.age}</h3>
                  <p>{profile.bio}</p>
                </div>
              </Foto>
          </Perfis>
          <Footer>
          <img src={Dislike} alt='Gostei'/>
          <img src={Like} alt='Não Gostei'/>
          </Footer>
        </div>
      )
    } else {
      return(
        <Loading/>
      )
    }
  }
  
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <Logo onClick={onClickInicio} src={AstroLogo} alt='Logo'/>
            <People onClick={onClickIr} src={AstroPeople} alt='Seus Matches'/>
        </Titulo>
        {loadProfile()}
      </BoxMatch>
    </Container>
  );
}

export default TelaInicial;
