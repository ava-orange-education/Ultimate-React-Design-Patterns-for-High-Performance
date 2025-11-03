import styled from "styled-components";

export const Logo = styled.div`
    --size: ${(props) => props.size};
    background: ${(props) => (props.inverse ? "#0F1623" : "white")};
    width: var(--size);
    height: var(--size);
    ${(props) => !props.square && "border-radius: 50%;"}
`;
