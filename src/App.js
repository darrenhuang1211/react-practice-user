import React from 'react';
import { useState } from 'react';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

function App() {
  const [allUsersList, setAllUsersList] = useState([
    {id: 1, name: 'Darren', age: '29'},
    {id: 2, name: 'Vivi', age: '27'},
    {id: 3, name: 'Kimberly', age: '26'}
  ]);

  const addUserHandler = (userInfo) => {
    setAllUsersList(prevUsers => {
      const updatedUsers = [{id: Math.random(), name: userInfo.name, age: userInfo.age}, ...prevUsers];
      console.log('Form submitted. In app');
      
      return updatedUsers;
    })
  }

  return (
    <div>
      <AddUserForm onAddUser={addUserHandler}/>
      <UserList users={allUsersList} />
    </div>
  );
}

export default App;
