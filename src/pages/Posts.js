
// import React, { useState, useEffect } from "react";


// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsloading] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//       posts = await posts.json();
//       setPosts(posts);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, [posts]);

//   return (
//     <section className="Posts">
//       <div>
//         <h2>Hi these are my users</h2>
//         <table>
//           <thead>
//             <tr>
//               <td>ID</td>
//               <td>Title</td>
//               <td>Body</td>
//             </tr>
//           </thead>
//           <tbody>
//             {posts &&
//               posts.map((post) => {
//                 return (
//                   <tr key={post.id}>
//                     <td>{post.id}</td>
//                     <td>{post.title}</td>
//                     <td>{post.body}</td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default Posts;

import React, { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [post, setPost] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then((res) => setPost(res))
    // .catch((err) => console.log(err))
    fetchPost();
  }, []);

  return (
    <section className="Posts">
      <h2>Hello, here are the Posts</h2>
      {/* <button onClick={() => setIsloading(!isloading)}> Show post </button> */}
      {isloading ? (
        <p style={{ color: "green" }}>IS LOADING</p>
      ) : (
        <div className="card_post">
          {post.map((item, index) => (
            <div key={item.id} style={{ width: "200px", height: "200px" }}>
              <h2>{item.id}</h2>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Posts;

