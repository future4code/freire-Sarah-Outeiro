import { Posts, EnviadoPor, Texto, DivEngajamento, DivBottom } from './styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CommentsList = () => {

    return(
        <div>
            <Posts>
                <EnviadoPor>Enviado por: labeluno78</EnviadoPor>
                <Texto>Não posso falar por todos, mas usar Linux ajudou o meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo) </Texto>
                <DivBottom>
                    <DivEngajamento>
                    <ArrowUpwardIcon color={'fourth'} fontSize={'small'}/>
                    <p>1.2k</p> 
                    <ArrowDownwardIcon color={'fourth'} fontSize={'small'}/>
                    </DivEngajamento>
                </DivBottom>
            </Posts>
        </div>
    )
}

export default CommentsList;