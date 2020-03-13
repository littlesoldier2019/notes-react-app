import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './EditPost.css';
import { Time } from '../data/Time';

class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                title: '',
                category: '',
                description: '',
                date: '',
                id: ''
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
        const { title, category, description } = this.state.post;
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2 className='form__title'>Edit Post</h2>
                    <div className='input__field'>
                        <label className="input__text">Title</label>
                        <input  
                            type="text" name="title" 
                            value={title} 
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className='input__field'>
                        <label className="input__label">Category</label>
                        <input className="input__text" 
                            type="text" 
                            name="category" 
                            value={category} 
                            onChange={this.handleChange}>
                        </input>                
                    </div>
                    <div className='input__field'>
                        <label className="input__label">Write a New Post</label>
                        <textarea className="input__text"
                            type="text" 
                            name="description"
                            value={description} 
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <div className="button__field">
                        <button onClick={this.editPost} className="btn btn-save">Save</button>
                        <button onClick={this.goBack}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPost;