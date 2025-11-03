import { useEffect, useState } from "react"
import ChildComponent from "./ChildComponent";

const WithContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await res.json()
            setPosts(posts)
        }
        fetchPosts()
    }, [])

    return (
        <ChildComponent data={posts} />
    )
}

export default WithContainer