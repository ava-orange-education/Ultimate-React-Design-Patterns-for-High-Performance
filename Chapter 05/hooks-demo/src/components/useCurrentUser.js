import { useEffect, useState } from "react"
import axios from "axios"

const useCurrentUser = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get("/current-user")
            setUser(res.data)
        })()
    }, [])

    return user;
}

export default useCurrentUser