import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles'

const Post = (props) => {
    const {id, date, title, category, link} = props.post;
    const classes = useStyles();
    return (
        <>
            <Grid  item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={link}
                        title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography>
                            <img src="https://img.icons8.com/ios/16/000000/tag-window.png"/> {category} 
                        </Typography>
                        <Typography>
                            <img src="https://img.icons8.com/ios-glyphs/16/000000/time.png"/> {date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`post/${id}`} >
                            <Button size="small" color="primary">
                                Read
                            </Button>
                        </Link> 
                    </CardActions>  
                </Card>
            </Grid>
        </>
    )
}

export default Post;