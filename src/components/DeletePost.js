import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

const DeletePost = ({ id, deletePost, goBack }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Container>
                        <Typography variant="h5" gutterBottom>
                            Are you sure you want to delete this post?
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Link to = '/'>
                                        <Button variant="outlined" color="secondary" onClick = {() => deletePost(id)}>Delete</Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to = {`/post/edit/${id}`}>
                                        <Button onClick={goBack} variant="outlined" color="primary">Cancel</Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </Container>
            </main>
        </React.Fragment>    
    )
}

export default DeletePost;