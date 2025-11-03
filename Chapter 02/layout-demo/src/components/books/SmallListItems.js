const SmallBookListItems = ({ book }) => {
  const { name, price } = book;

  return (
    <p>Name: {name}, Price: ₹ {price}</p>
  )
}

export default SmallBookListItems