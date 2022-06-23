import styled from "styled-components";

const StyledUser = styled.div`
    & li {
        list-style: none;
        border: 1px solid black;
        padding: 0.5rem;
        margin: 0.5rem;
    }
`;

function User(props) {
    return (
        <StyledUser>
            <li>{props.children}</li>
        </StyledUser>
    )
}

export default User;