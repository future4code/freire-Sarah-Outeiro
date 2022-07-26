import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PostField } from './styled';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

const Comments = () => {
    return (
        <PostField>
          <Box
            sx={{
              maxWidth: '100%'
            }}
          >
            <TextField 
              fullWidth 
              label="Escreva seu comentário..." 
              id="Post" 
              multiline
              rows={5}
            />
          </Box>
          <Grid 
            container spacing={0}
            pb={2}
            pt={2}
          >
            <Button 
              variant="contained" 
              fullWidth
              size="large"
            >
              Comentar
            </Button>
          </Grid>
        </PostField>
    );
  };
  
  export default Comments;