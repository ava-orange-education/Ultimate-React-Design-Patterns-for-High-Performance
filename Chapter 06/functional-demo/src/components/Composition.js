export const Button = ({ size, color, text, paddingSize }) => {
    return (
        <button style={{ fontSize: size === 'small' ? '12px': '32px', backgroundColor: color, padding: paddingSize }}>
            {text}
        </button>
    )
}

export const RedButton = props => <Button {...props} color={"red"} paddingSize={"10px"} />

export const GreenButton = props => <Button {...props} color={"green"} size="small" paddingSize={"5px"} />