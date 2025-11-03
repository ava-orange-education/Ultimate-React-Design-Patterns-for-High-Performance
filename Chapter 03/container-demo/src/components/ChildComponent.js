const ChildComponent = ({ data }) => {
  return (
    <>
        {data.map(post => <h3 key={post.id}>{post.title}</h3>)}
    </>
  )
}

export default ChildComponent