import User from './User';
import Card from '../UI/Card';
import styled from 'styled-components';

function UserList(props) {
    return (
        <Card>
          <ul>
            {props.users.map(user => (
              <User
                key={user.id}
                id={user.id}
              >
                {`${user.name} (${user.age} years old)`}
              </User>
            ))}
          </ul>
        </Card>
    );
}

export default UserList;