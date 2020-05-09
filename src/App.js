import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { posts } from './data/Posts';
import HomePage from './components/Homepage';
import AddPost from './components/AddPost';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: posts
    }
  }

  addPost = (newPost) => {
    this.setState({posts: [newPost, ...this.state.posts]})
  }

  deletePost = (id) => {
    const unDeletedPosts = this.state.posts.filter((post) => post.id !== id)
    this.setState({posts: unDeletedPosts})
  }

  editPost = (editPost, id) => {
    const newPosts= this.state.posts.map((post) => {
    return post.id === id ? editPost : post
    })
    this.setState({posts: newPosts})
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact 
            path='/' 
            render={ (props) => <HomePage 
              posts = {this.state.posts}
              {...props}
            />}
          />
          <Route
            exact 
            path='/newpost' 
            render={ (props) => <AddPost 
              addPost = {this.addPost}
              {...props}
            />}
          />
          <Route
            exact 
            path={`/post/:id`} 
            render={ (props) => <ViewPost id={props.match.params.id}
              posts = {this.state.posts}
              editPost = {this.editPost}
              deletePost = {this.deletePost}
              />} 
            />
          <Route 
            exact 
            path={`/post/edit/:id`} 
            render={ (props) => <EditPost id={props.match.params.id}
              posts={this.state.posts}
              editPost = {this.editPost}
              {...props}
              />}
            />
            <Route 
            exact 
            path={`/post/delete/:id`} 
            render={ (props) => <DeletePost id={props.match.params.id}
              post={this.state.post}
              deletePost = {this.deletePost}
              goBack={props.history.goBack}
              />}
            />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default App;
