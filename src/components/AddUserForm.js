function AddUserForm(props) {
    const formSubmitHandler = event => {
        event.preventDefault();
        console.log('Form submitted.');
        props.onAddUser({name: 'Joyce', age: '30'});
    }
    
    return (
        <form onSubmit={formSubmitHandler}>
            <label>Username</label>
            <input type='text' />
            <label>Age</label>
            <input type='text' />
            <button type='submit'>Add User</button>
        </form>
    )
}

export default AddUserForm;