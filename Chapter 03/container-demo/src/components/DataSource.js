import { useEffect, useState, Children, isValidElement, cloneElement } from "react"

const DataSource = ({ getData = () => { }, resourceName, children }) => {
    const [resource, setResource] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getData()
            setResource(data)
        }
        )()
    }, [getData])

    return (
        <>
            {Children.map(children, (child) => {
                if (isValidElement(child)) return cloneElement(child, { [resourceName]: resource })
                return child
            })}
        </>
    )
}

export default DataSource