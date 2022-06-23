import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";

const StyledForm = styled.div`
    & label {
        font-weight: bold;
        display: block;
        margin: 0.5rem;
    }

    & input {
        font: inherit;
        display: block;
        border: 1px solid;
        margin-bottom: 0.5rem;
        width: 100%;
        padding: 0.15rem;
    }

    & input:focus {
        outline: none;
        border-color: #4f005f;
    }
`;

function AddUserForm(props) {
    const formSubmitHandler = event => {
        const nameField = document.getElementById('username');
        const ageField = document.getElementById('age');

        event.preventDefault();

        if (nameField.value.trim().length === 0 || ageField.value.length === 0) {
            console.log('Invalid input');
            return;
        }
        if (+(ageField.value) < 1) {
            console.log('Invalid age');
            return;
        }

        props.onAddUser({name: nameField.value, age: ageField.value});
        nameField.value = '';
        ageField.value = '';
    }
    
    return (
        <Card>
            <form onSubmit={formSubmitHandler}>
                <StyledForm>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username'/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input type='number' id='age'/>
                    <Button type='submit'>Add User</Button>
                </StyledForm>
            </form>
        </Card>
    )
}

export default AddUserForm;