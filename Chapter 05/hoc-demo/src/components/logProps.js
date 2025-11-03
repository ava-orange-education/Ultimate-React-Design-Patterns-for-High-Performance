const logProps = Component => {
    return (props) => {
      console.log(props)
      return <Component {...props} />
    }
  }
  
  export default logProps