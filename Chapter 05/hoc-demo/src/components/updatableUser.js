import axios from "axios"
import { useEffect, useState } from "react"

const updatableUser = (Component, userId) => {
  return props => {
    const [initialUser, setInitialUser] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get(`/users/${userId}`)
            setInitialUser(res.data)
            setUser(res.data)
        })()
    }, [])

    const onChangeUser = updates => setUser({ ...user, ...updates })
    const onPostUser = async () => {
        const res = await axios.post(`/users/${userId}`, { user })
        setInitialUser(res.data)
        setUser(res.data)
    }
    const onResetUser = () => setUser(initialUser)

    return <Component {...props} user={user} onChangeUser={onChangeUser} onPostUser={onPostUser} onResetUser={onResetUser} />
  }
}

export default updatableUser