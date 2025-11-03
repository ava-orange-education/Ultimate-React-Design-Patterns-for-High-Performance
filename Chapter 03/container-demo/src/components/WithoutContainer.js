import { useEffect, useState } from "react"

const WithoutContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await res.json()
            setPosts(posts)
        }
        fetchPosts()
    },[])

    return (
        <>
            {posts.map(post => <h3 key={post.id}>{post.title}</h3>)}
        </>
    )
}

export default WithoutContainer