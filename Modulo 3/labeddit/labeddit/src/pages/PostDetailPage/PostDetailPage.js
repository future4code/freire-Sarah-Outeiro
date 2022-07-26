import Header from '../../components/Header/Header';
import PostDetail from '../../components/PostDetail/PostDetail';
import Comments from '../../components/Comments/Comments';
import CommentsList from '../../components/CommentsList/CommentsList';
import Container from '@mui/material/Container';

const PostDetailPage = () => {
    return (
      <>
        <Header/>
        <Container maxWidth='md'>
          <PostDetail/>
          <Comments/>
          <CommentsList/>
        </Container>
      </>
    );
  };
  
  export default PostDetailPage;