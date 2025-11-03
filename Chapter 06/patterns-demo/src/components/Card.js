const Header = ({ children }) => {
    return (
        <div style={{ borderBottom: "1px solid black", padding: "0.5rem", marginBottom: "0.5rem" }}>
            {children}
        </div>
    )
}

const Footer = ({ children }) => {
    return (
        <div style={{ borderTop: "1px solid black", padding: "0.5rem", marginTop: "0.5rem" }}>
            {children}
        </div>
    )
}

const Body = ( { children }) => <div style={{ padding: "0.5rem" }}>{children}</div>
const Card = ({ children }) => {
    return (
        <div style={{ border: "1px solid black" }}>{children}</div>
    )
}

export default Card

Card.Header = Header
Card.Body = Body
Card.Footer = Footer
