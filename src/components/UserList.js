import User from './User';

function UserList(props) {
    return (
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
    );
}

export default UserList;