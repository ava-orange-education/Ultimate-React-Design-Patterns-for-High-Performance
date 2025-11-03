import styled from "styled-components";

const StyledButton = styled.button`
    width: 1.25rem;
    height: 1.25rem;
    border: 0;
    background-color: white;
    font-size: 20px;
    cursor: pointer;
`;

const IngredientsInfo = () => {
    console.log("IngredientsInfo rendered");

    return <StyledButton>📋</StyledButton>;
}
export default IngredientsInfo