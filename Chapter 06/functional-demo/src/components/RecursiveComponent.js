const isObject = data => typeof data === 'object' && data !== null;

const RecursiveComponent = ({ data }) => {
    if(!isObject(data)) return <li>{data}</li>

    const pairs = Object.entries(data);

    return (
        <>
            {pairs.map(([key, value]) => {
                return (
                    <li>
                        {key}:
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                )
            })}
        </>
    )
}

export default RecursiveComponent