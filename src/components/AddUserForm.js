import { useState } from 'react';
import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserFormCard = styled(Card)`
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
`;

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
    const [error, setError]= useState();

    const formSubmitHandler = event => {
        const nameField = document.getElementById('username');
        const ageField = document.getElementById('age');

        event.preventDefault();

        if (nameField.value.trim().length === 0 || ageField.value.length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if (+(ageField.value) < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }

        props.onAddUser({name: nameField.value, age: ageField.value});
        nameField.value = '';
        ageField.value = '';
    }

    const closeErrorHandler = event => {
        setError(null);
    }
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} handler={closeErrorHandler}/>}
            <UserFormCard>
                <form onSubmit={formSubmitHandler}>
                    <StyledForm>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username'/>
                        <label htmlFor='age'>Age (Years)</label>
                        <input type='number' id='age'/>
                        <Button type='submit'>Add User</Button>
                    </StyledForm>
                </form>
            </UserFormCard>
        </div>
    )
}

export default AddUserForm;