import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(' ');

  useEffect(() => {
    let unsubscribe;
    if(postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__Avatar" alt={username} src="static/images/avatar/1.jpg"/>
        <h3>{username}</h3>
      </div>
      
      <img className="post__image" src={imageUrl} alt={caption}/>

      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

      <form>
          <input className="post__input" type="text"
            placeholder="Add a comment..." value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
      </form>
    </div>
  )
}

export default Post
