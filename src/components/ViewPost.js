import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';

const ViewPost = ({ id, posts, editPost }) => {
    const post = posts.find(post => post.id===id);
    const { title, category, description } = post;
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
                                    <Link to = {`/post/delete/${id}`}>
                                        <Button variant="outlined" color="secondary">Delete</Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to = {`/post/edit/${id}`}>
                                        <Button onClick = {editPost} variant="outlined" color="primary">Edit</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Typography variant="h5" gutterBottom>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" gutterBottom>
                                {category}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" gutterBottom>
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}

export default ViewPost;


