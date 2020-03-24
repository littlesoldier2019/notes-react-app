import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';


const Post = (props) => {
    const {id, date, title, category, link} = props.post;
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + link + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className='box' style={divStyle}>
            <div className='content'>
                <h2>{category}</h2>
                <h3>{title}</h3>
                <div className='date'>
                    <h4>{date}</h4>
                </div> 
            </div> 
            <Link to={`post/${id}`} className="link"> 
                <button className="btn btn-read">
                    Read
                </button>
            </Link>
        </div>
    )
}

export default Post;