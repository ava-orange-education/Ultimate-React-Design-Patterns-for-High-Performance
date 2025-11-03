import { useEffect, useState, Children, isValidElement, cloneElement } from "react"
import axios from "axios"

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [resource, setResource] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setResource(response.data)
        }
        )()
    }, [resourceUrl])

    return (
        <>
            {Children.map(children, (child) => {
                if(isValidElement(child)) return cloneElement(child, { [resourceName]: resource })
                return child
            })}
        </>
    )
}

export default ResourceLoader