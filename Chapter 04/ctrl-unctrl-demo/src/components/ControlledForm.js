import { useEffect, useState } from "react"

const ControlledForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        Number(age) < 9 ? setError('Age cannot be empty or less then 9') : setError('')
    }, [age])

    const submitHandler = e => {
        e.preventDefault()
        console.log(name)
        console.log(age)
    }

    return (
        <form onSubmit={submitHandler}>
            {error && <p>{error}</p>}
            <input type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Enter Age" value={age} onChange={e => setAge(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm