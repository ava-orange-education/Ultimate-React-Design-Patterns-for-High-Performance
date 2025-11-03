import { createRef } from "react"

const UncontrolledForm = () => {
    const nameRef = createRef()
    const ageRef = createRef()

    const submitHandler = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(ageRef.current.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Name" ref={nameRef} />
            <input type="text" placeholder="Enter Age" ref={ageRef} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UncontrolledForm