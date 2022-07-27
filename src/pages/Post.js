import React, {useState, useEffect} from 'react'

const Post = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((post) => setPosts(post));
  }, []);
  return (
    <div>
      This is my post
      {post.map((post, index) =>
        <h1 key={post.id}>{post.title}</h1>)}
    </div>
  )
}

export default Post
