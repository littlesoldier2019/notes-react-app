import React from 'react';
import { Link } from 'react-router-dom';


const ViewPost = ({ id, posts, editPost }) => {
    
    const post = posts.find(post => post.id===id);
    const { title, category, description } = post;
    
    return (
        <div>
            <Link to = '/' ><button className='btn'>Homepage</button></Link>
            <div className='post-container' id='singlepost-container'>
                    <div className='title-child'>
                        <img src = '' alt = "tag"></img>
                        <p className='input-holder title-text'>{category}</p>
                    </div>
                <div>
                    <h2>Title : {title}</h2>
                </div>
                <div className="input-holder">
                    <p className="title">Description : </p>
                    <p className = "text">{description}</p>
                </div>
                <div className='btn-container'>
                    <Link to = {`/post/delete/${id}`}>
                        <button className = "deleteBtn">Delete</button>
                    </Link>
                    <Link to = {`/post/edit/${id}`}>
                        <button onClick = {editPost} className = "editBtn">Edit</button>
                    </Link>
                </div>          
            </div>
        </div>
    )
}

export default ViewPost;


