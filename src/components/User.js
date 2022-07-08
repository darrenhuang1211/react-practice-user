import styled from "styled-components";

const StyledUser = styled.div`
    & li {
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
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