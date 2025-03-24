import styled from "styled-components";

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  color: white;
  background-color: blue;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;
