import axios from "axios"
import { useState, useEffect } from "react"

const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        (async() => {
            const res = await axios.get(`/users/${userId}`)
            setUser(res.data)
        })()
    }, [])

    return <Component {...props} user={user} />
  }
}

export default includeUser