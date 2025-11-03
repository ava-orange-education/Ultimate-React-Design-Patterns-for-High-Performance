const LargeBookListItems = ({ book }) => {
    const { name, price, title, pages } = book

    return (
        <>
            <h2>{name}</h2>
            <p>₹ {price}</p>
            <h3>Title</h3>
            <p>{title}</p>
            <p>Number of pages: {pages}</p>
        </>
    )
}

export default LargeBookListItems