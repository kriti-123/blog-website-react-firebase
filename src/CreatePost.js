import  { useState } from 'react';
import { firestore } from "./firebase";
const CreatePost  = () =>{
  const [title,setTitle] = useState("");
  const [subtitle,setSubtitle] = useState("");
  const [content,setContent] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      console.log("title",title);
      console.log('sub',subtitle);
      console.log('content',content);

      firestore
      .collection('posts')
      .add({
        title:title ,
        subtitle:subtitle,
        content:content,
        createdAt: new Date(), // timestamp
      });
      
  }
    return (
        <>
        <div className='create-post'>
          <h1>CREATE POST</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-field'>
              <label>Title</label>
              <input value={title} onChange={(e)=>{
                setTitle(e.target.value)
              }} />
            </div>
            <div className='form-field'>
              <label>Sub Title</label>
              <input value={subtitle} onChange={(e)=>{
                setSubtitle(e.target.value)
              }} />
            </div>
            <div className='form-field'>
              <label>Content</label>
              <textarea value={content} onChange={(e)=>{
                setContent(e.target.value)
              }} />
              
            </div>
            <button className='create-post-btn'>CreatePost</button>
          </form>

        </div>
      </>
    )
}
export default CreatePost;