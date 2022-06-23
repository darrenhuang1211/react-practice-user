import styled from "styled-components";

const StyledCard = styled.div`
    border-radius: 12px;
    padding: 0.5rem;
    background-color: white;
`;

function Card(props) {
    return (
        <StyledCard>{props.children}</StyledCard>
    );
}

export default Card;