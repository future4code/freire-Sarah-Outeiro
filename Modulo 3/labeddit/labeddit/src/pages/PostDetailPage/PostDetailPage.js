import Header from '../../components/Header/Header';
import PostDetail from '../../components/PostDetail/PostDetail';
import Comments from '../../components/Comments/Comments';
import CommentsList from '../../components/CommentsList/CommentsList';

const PostDetailPage = () => {
    return (
      <div>
        <Header/>
        <PostDetail/>
        <Comments/>
        <CommentsList/>
      </div>
    );
  };
  
  export default PostDetailPage;