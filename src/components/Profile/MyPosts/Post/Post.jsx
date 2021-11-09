import React from 'react';
import  s from './Post.module.css';

const Post = (props) => {

return (
<div className={s.item}>
   <img className={s.avat} src='https://cdn.shopify.com/s/files/1/0023/8469/1252/products/LED-Tiger_5000x.jpg?v=1587676083'></img>
   { props.message }
   <div>
     <img className={s.likee} src='https://cdn.worldvectorlogo.com/logos/facebook-like.svg'></img>
     <span className={s.like}> 
     { props.likes }
     </span>
   </div>
   </div>
   
)
}

export default Post;
