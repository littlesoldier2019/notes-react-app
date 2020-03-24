import React, {Component} from 'react';
import './AddPost.css';

import {Link} from 'react-router-dom';

import { RandomId } from '../data/RandomId';
import { Time } from '../data/Time';

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
        e.target.reset();
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

        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2 className='form__title'>Add New Post</h2>
                    <div className='input__field'>
                        <label className="input__text">Title</label>
                        <input  
                            type="text" name="title" 
                            value={this.state.title} 
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className='input__field'>
                        <label className="input__label">Category</label>
                        <input className="input__text" 
                            type="text" 
                            name="category" 
                            value={this.state.category} 
                            onChange={this.handleChange}>
                        </input>                
                    </div>
                    <div className='input__field'>
                        <label className="input__label">Background</label>
                        <input className="input__text" 
                            type="url" 
                            name="link" 
                            value={this.state.link} 
                            onChange={this.handleChange}>
                        </input>                
                    </div>
                    <div className='input__field'>
                        <label className="input__label">Write a New Post</label>
                        <textarea className="input__text"
                            type="text" 
                            name="description"
                            value={this.state.category} 
                            onChange={this.handleChange}>
                        </textarea>
                    </div>
                    <div className="button__field">
                        <button onClick={this.addPost} className="btn btn-save">Save</button>
                        <Link to ="/" className="btn btn-cancel"><button>Cancel</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}
    

export default AddPost;