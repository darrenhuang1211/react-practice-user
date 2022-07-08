import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #48127a;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #8140bd;
  }
`;

function Button(props) {
    return <StyledButton className={props.className} onClick={props.onClick}>{props.children}</StyledButton>
}

export default Button;