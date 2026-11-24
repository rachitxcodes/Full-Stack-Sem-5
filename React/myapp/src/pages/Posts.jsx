import { useState, useEffect } from 'react'

function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>All Posts</h1>

      {posts.map(post => (
        <div className="post-card" key={post.id}>
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts