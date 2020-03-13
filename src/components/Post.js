import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';


const Post = (props) => {
    const {id, date, title, category} = props.post
    return (
        <div>                
            <p>{category}</p>
            <p>{id}</p>
            <p>Last edited: {date}</p>
            <div>
                <Link to={`post/${id}`} className="link"> 
                    <h3>{title}</h3>
                    <button className="btn btn-read">
                        <i className="fab fa-readme grow2"></i>
                        Read
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Post;