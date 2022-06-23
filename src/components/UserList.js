import User from './User';
import Card from '../UI/Card';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  margin: auto;
`;

function UserList(props) {
    return (
      <Card>
        <StyledList>
          {props.users.map(user => (
            <User
              key={user.id}
              id={user.id}
            >
              {`${user.name} (${user.age} years old)`}
            </User>
          ))}
        </StyledList>
      </Card>
    );
}

export default UserList;