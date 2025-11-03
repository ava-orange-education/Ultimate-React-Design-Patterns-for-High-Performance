import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const StyledHeading = styled.h2`
  font-weight: bold;
`;

const ShoppingListHeader = (props) => {
  return (
    <StyledContainer>
      <StyledHeading>Shopping List</StyledHeading>
      <span>{props.shoppingList.length} items</span>
    </StyledContainer>
  );
};
export default ShoppingListHeader;
