const LargeAuthorListItems = ({ author }) => {
    const {name, age, country, books} = author;
  
    return (
      <>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Country: {country}</p>
        <h3>Books</h3>
        <ul>
            {books.map(book => <li key={book}>{book}</li>)}
        </ul>
      </>
    )
  }
  
  export default LargeAuthorListItems