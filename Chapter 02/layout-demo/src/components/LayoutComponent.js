const LayoutComponent = ({ style, children }) => {
    return (
        <nav style={style}>
            {children}
        </nav>
    )
}

export default LayoutComponent