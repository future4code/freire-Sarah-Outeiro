import { Posts, EnviadoPor, Texto, DivEngajamento, DivComentarios, DivBottom, Carregando } from './styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useNavigate } from 'react-router-dom';
import { goToPostDetailPage } from '../../routes/coordinator';
import CircularProgress from '@mui/material/CircularProgress';

const PostList = (props) => {
    

    const postCards = props.posts.map((post) => {
        return(
            <Posts key={post.id}>
                <EnviadoPor>Enviado por: {post.username}</EnviadoPor>
                <Texto onClick={() => goToPostDetailPage(navigate, post.id, post)}>{post.body}</Texto>
                <DivBottom>
                    <DivEngajamento>
                    <ArrowUpwardIcon color={'fifth'} fontSize={'small'}/>
                    <p>{post.voteSum=== null ? '0' : post.voteSum}</p> 
                    <ArrowDownwardIcon color={'fifth'} fontSize={'small'}/>
                    </DivEngajamento>
                    <DivComentarios onClick={() => goToPostDetailPage(navigate, post.id, post)}>
                        <ChatBubbleOutlineIcon color={'fifth'} fontSize={'small'} />
                        <p>{post.commentCount === null ? '0' : post.commentCount}</p>
                    </DivComentarios>
                </DivBottom>
            </Posts>
        )
    })

    const navigate = useNavigate();

    return(
        <>
            {
                postCards.length > 0 ? 
                    postCards : 
                    <Carregando>
                        <CircularProgress color={'primary'}/>
                    </Carregando>
            }
        </>
    )
}

export default PostList;