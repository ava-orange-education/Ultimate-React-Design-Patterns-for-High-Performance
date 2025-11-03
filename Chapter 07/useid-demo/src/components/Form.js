import { useId, useState } from 'react'

const Form = () => {
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const id = useId();

    return (
      <div>
        <label htmlFor={`${id}-email`}>Email </label>
        <input id={`${id}-email`} type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        <br />
        <label htmlFor={`${id}-age`}>Age </label>
        <input id={`${id}-age`} type="number" value={age} onChange={e => setAge(e.target.value)} />
      </div>
    );
}

export default Form