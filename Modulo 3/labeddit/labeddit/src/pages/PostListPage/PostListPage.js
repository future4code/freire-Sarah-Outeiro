import Header from '../../components/Header/Header';
import PostArea from '../../components/PostArea/PostArea';
import PostList from '../../components/PostList/PostList';
import Container from '@mui/material/Container';
import useProtectedPage from '../../hooks/useProtectedPage';

const PostListPage = () => {
  useProtectedPage()

    return (
      <>
        <Header/>
        <Container maxWidth='md'>
          <PostArea/>
          <PostList/>
        </Container>
      </>
    );
  };
  
  export default PostListPage;