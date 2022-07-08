import User from './User';
import Card from '../UI/Card';
import styled from 'styled-components';

const UserListCard = styled(Card)`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 1rem;
`;

function UserList(props) {
    return (
      <UserListCard>
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
      </UserListCard>
    );
}

export default UserList;