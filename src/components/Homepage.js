import React from 'react';
import Post from './Post';
import './Homepage.css';
import {Link} from 'react-router-dom';


const HomePage = (props) => {
  let postList = props.posts.map((post) => (
    <Post key={post.id} post={post} />
  ))

    return (
        <div>
            <h1>StoRyTel</h1>
            <div>
                <Link to='/newpost'><button className='btn btn-addPost'>New Post</button></Link>
            </div>
            <div className='wrap'>
                {postList}
            </div>
        </div>
    )
}
       
export default HomePage;