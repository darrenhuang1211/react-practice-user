function AddUserForm(props) {
    const formSubmitHandler = event => {
        const enteredName = document.getElementById('username').value;
        const enteredAge = document.getElementById('age').value;

        event.preventDefault();
        props.onAddUser({name: enteredName, age: enteredAge});
    }
    
    return (
        <form onSubmit={formSubmitHandler}>
            <label>Username</label>
            <input type='text' id='username'/>
            <label>Age</label>
            <input type='text' id='age'/>
            <button type='submit'>Add User</button>
        </form>
    )
}

export default AddUserForm;