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

class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title: '',
                category: '',
                description: '',
                date: '',
                id: '',
                link: ''
            } 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editPost(this.state.post, this.props.id);
        this.props.history.push('/');
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const editPost = {...this.state.post, date: Time(), [name]: value}
        this.setState({post: editPost})       
    }

    componentDidMount(){
        const {posts, id} = this.props
        const post = posts.find((post) => {
        return post.id === id
     })
    this.setState({post: post})
    }

    goBack = (e) => {
        this.props.history.goBack();
    }

    render() {
        const { title, category, description, link } = this.state.post;
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <main>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <form className={classes.root} noValidate autoComplete="off">
                            <FormControl fullWidth normal>  
                                <InputLabel htmlFor="title">Title</InputLabel>
                                <Input 
                                    id="title" 
                                    value={title} 
                                    onChange={this.handleChange}
                                />
                            </FormControl> 
                            <FormControl fullWidth>
                                <InputLabel htmlFor="category">Category</InputLabel>
                                <Input 
                                    id="category" 
                                    value={category} 
                                    onChange={this.handleChange}
                                    type='text'
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="link">Image</InputLabel>
                                <Input 
                                    id="link" 
                                    value={link}  
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    id="content"
                                    label="Content"
                                    multiline
                                    rows={20}
                                    value={description}  
                                    onChange={this.handleChange}
                                /> 
                            </FormControl>
                            <Button variant="outlined" color="primary" size="medium" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </form>
                    </Container> 
                </main>
        </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(EditPost);