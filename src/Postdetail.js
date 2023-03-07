import React, { useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
import { firestore } from './firebase';
import { useParams } from 'react-router-dom';

const Postdetail  = () =>{
  const [post,setPosts] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    firestore.collection('posts').doc(postId).get().then((snapshot)=>{
      console.log('snapshot',snapshot.data());
      setPosts(snapshot.data());
    })
  })
    return (
        
        <div class=''>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      
    )
}
export default Postdetail;