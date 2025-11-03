import { useEffect, useState } from "react"

const DataSourceRender = ({ getData = () => { }, render }) => {
    const [resource, setResource] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getData()
            setResource(data)
        }
        )()
    }, [getData])

    return render(resource)
}

export default DataSourceRender