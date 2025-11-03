import { useEffect, useState } from "react"
import axios from "axios"

const useUser = userId => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/users/${userId}`)
            setUser(res.data)
        })()
    }, [userId])

    return user;
}

export default useUser