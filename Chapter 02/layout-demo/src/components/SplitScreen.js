import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const Panel = styled.div`
    flex: ${props => props.flex};
`

const SplitScreen = ({ Left, Right, leftWidth=1, rightWidth=1 }) => {
    return (
        <Container>
            <Panel flex={leftWidth}>
                <Left />
            </Panel>
            <Panel flex={rightWidth}>
                <Right />
            </Panel>
        </Container>
    )
}

export default SplitScreen