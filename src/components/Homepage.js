import React from 'react';
import Post from './Post';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <a href="https://github.com/littlesoldier2019">
        littlesoldier2019
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  

const HomePage = (props) => {
  let postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ))
  const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Notes board for you
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Keeping all your notes in one place.  
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Link to='/newpost'>
                                        <Button variant="outlined" color="primary">
                                            New Post
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {postList}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}
       
export default HomePage;