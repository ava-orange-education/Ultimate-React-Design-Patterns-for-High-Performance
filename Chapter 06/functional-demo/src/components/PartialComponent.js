export const PartialComponent = (Component, partialProps) => {
  return props => <Component {...partialProps} {...props} />
}

export const Button = ({ size, color, text, paddingSize }) => {
    return (
        <button style={{ fontSize: size === 'small' ? '12px': '32px', backgroundColor: color, padding: paddingSize }}>
            {text}
        </button>
    )
}

export const RedButton = PartialComponent(Button, {color: "red", paddingSize: "10px"})

export const SmallRedButton = PartialComponent(RedButton, { size: "small" })

