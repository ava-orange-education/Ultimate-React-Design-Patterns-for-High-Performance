import useResource from "./useResource";

const UserInfo = ({ userId }) => {
    const user = useResource(`/users/${userId}`)
    const { name, age, country, books } = user || {};
    return user ? (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age} years</p>
            <p>Country: {country}</p>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book}> {book} </li>
                ))}
            </ul>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}

export default UserInfo