import { Posts, EnviadoPor, Texto, DivEngajamento, DivComentarios, DivBottom } from './styled';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const PostDetail = () => {

    return(
        <>
            <Posts>
                <EnviadoPor>Enviado por: labeluno38</EnviadoPor>
                <Texto>Por que a maioria dos desenvolvedores usam linux? ou as empresas de tecnologia usam linux?</Texto>
                <DivBottom>
                    <DivEngajamento>
                    <ArrowUpwardIcon color={'fifth'} fontSize={'small'}/>
                    <p>1.2k</p> 
                    <ArrowDownwardIcon color={'fifth'} fontSize={'small'}/>
                    </DivEngajamento>
                    <DivComentarios>
                        <ChatBubbleOutlineIcon color={'fifth'} fontSize={'small'} />
                        <p>54</p>
                    </DivComentarios>
                </DivBottom>
            </Posts>
        </>
    )
}

export default PostDetail;