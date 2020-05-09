import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { RandomId } from '../data/RandomId';
import { Time } from '../data/Time';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
        root: {
            '& > *': {
            margin: theme.spacing(1),
            },
        },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
    });

class AddPost extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            post: 
                {
                    title: '',
                    category: '',
                    description: ''
                }
         
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newPost = {id: RandomId(), date: Time(), ...this.state.post};
        this.props.addPost(newPost)
        this.props.history.push('/');
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
    }

    render() {
        const { classes } = this.props;
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
                    <form className={classes.root} noValidate autoComplete="off">
                        <FormControl fullWidth normal>  
                            <InputLabel htmlFor="title">Title</InputLabel>
                            <Input 
                                id="title" 
                                type="text" 
                                name="title"
                                value={this.state.title} 
                                onChange={this.handleChange}
                            />
                        </FormControl> 
                        <FormControl fullWidth>
                            <InputLabel htmlFor="category">Category</InputLabel>
                            <Input 
                                id="category" 
                                type="text" 
                                name="category"
                                value={this.state.category} 
                                onChange={this.handleChange}
                                type='text'
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="link">Image</InputLabel>
                            <Input 
                                id="link" 
                                type="url" 
                                name="link"
                                value={this.state.link}  
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id="content"
                                label="Content"
                                type="text" 
                                name="description"
                                multiline
                                rows={20}
                                value={this.state.description}  
                                onChange={this.handleChange}
                            /> 
                        </FormControl>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            size="medium" 
                            onClick={this.handleSubmit}
                        >
                        Submit
                        </Button>
                    </form>
                </Container> 
            </main>
        </React.Fragment>
        )
    }
}
    

export default withStyles(useStyles)(AddPost);