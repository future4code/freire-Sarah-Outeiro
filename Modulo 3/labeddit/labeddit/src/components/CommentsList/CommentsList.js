import { Posts, EnviadoPor, Texto, DivEngajamento, DivBottom, Carregando } from './styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CircularProgress from '@mui/material/CircularProgress';


const CommentsList = (props) => {

    const commentCards = props.listaComentario.map((comment) => {
        return(
            <Posts key={comment.id}>
                <EnviadoPor>Enviado por: {comment.username}</EnviadoPor>
                <Texto>{comment.body}</Texto>
                <DivBottom>
                    <DivEngajamento>
                    <ArrowUpwardIcon color={'fourth'} fontSize={'small'}/>
                    <p>{comment.voteSum === null ? '0' : comment.voteSum}</p> 
                    <ArrowDownwardIcon color={'fourth'} fontSize={'small'}/>
                    </DivEngajamento>
                </DivBottom>
            </Posts>
        )
    })

    return(
        <>
            {
                commentCards.length > 0 ? 
                    commentCards : 
                    <Carregando>
                        <CircularProgress color={'primary'}/>
                    </Carregando>
            }
        </>
    )
}

export default CommentsList;