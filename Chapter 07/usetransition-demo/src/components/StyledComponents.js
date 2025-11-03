import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover { background-color: #ddd; }
  &:focus { outline: none; border-color: #007bff; }
`;

export const ReviewsContainer = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-size: 1.2em;
    color: #333;
  }
`;

export const WriterContainer = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin: 20px 0;
`;

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3em;
`;

export const Emoji = styled.span`
  font-size: 50px;
`;
