import { useEffect, useState, Children, isValidElement, cloneElement } from "react"
import axios from "axios"

const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            setUser(response.data)
        }
        )()
    }, [userId])

    return (
        <>
            {Children.map(children, (child) => {
                if(isValidElement(child)) return cloneElement(child, { user })
                return child
            })}
        </>
    )
}

export default UserLoader