import styled from "styled-components";

const StyledCard = styled.div`
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
    border-radius: 10px;
    background: white;
`;

function Card(props) {
    return (
        <StyledCard>{props.children}</StyledCard>
    );
}

export default Card;