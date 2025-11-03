import axios from "axios"
import { useEffect, useState } from "react"

const toCapital = str => str.charAt(0).toUpperCase() + str.slice(1);

const updateResource = (Component, resourceUrl, resourceName) => {
  return props => {
    const [initialResource, setInitialResource] = useState(null)
    const [resource, setResource] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get(resourceUrl)
            setInitialResource(res.data)
            setResource(res.data)
        })()
    }, [])

    const onChange = updates => setResource({ ...resource, ...updates })

    const onPost = async () => {
        const res = await axios.post(resourceUrl, { [resourceName]: resource })
        setInitialResource(res.data)
        setResource(res.data)
    }
    
    const onReset = () => setResource(initialResource)

    const resourceProps = {
        [resourceName]: resource,
        [`onChange${toCapital(resourceName)}`]: onChange,
        [`onPost${toCapital(resourceName)}`]: onPost,
        [`onReset${toCapital(resourceName)}`]: onReset,
    }

    return <Component {...props} {...resourceProps} />
  }
}

export default updateResource