import { Posts, EnviadoPor, Texto, DivEngajamento, DivComentarios, DivBottom } from './styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useNavigate } from 'react-router-dom';
import { goToPostDetailPage } from '../../routes/coordinator';

const PostList = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Posts>
                <EnviadoPor>Enviado por: labeluno38</EnviadoPor>
                <Texto onClick={() => goToPostDetailPage(navigate)}>Por que a maioria dos desenvolvedores usam linux? ou as empresas de tecnologia usam linux?</Texto>
                <DivBottom>
                    <DivEngajamento>
                    <ArrowUpwardIcon color={'fifth'} fontSize={'small'}/>
                    <p>1.2k</p> 
                    <ArrowDownwardIcon color={'fifth'} fontSize={'small'}/>
                    </DivEngajamento>
                    <DivComentarios onClick={() => goToPostDetailPage(navigate)}>
                        <ChatBubbleOutlineIcon color={'fifth'} fontSize={'small'} />
                        <p>54</p>
                    </DivComentarios>
                </DivBottom>
            </Posts>
        </div>
    )
}

export default PostList;