import styled from 'styled-components';

import FormElement from "./FormElement";

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const FormQuestions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-family: "Montserrat", sans-serif;
`

const Fieldset = styled.fieldset`
    border: 2px #5a6f07 solid;
`

const SelectElement = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    width: 300px;
`

const Button = styled.button`
    width: 100px;
    font-family: "Montserrat", sans-serif;
    border: 2px #5a6f07 solid;
    border-radius: 5px;
    background-color: #e7ebdc;
    color: #5a6f07;
    font-weight: 600;
    padding: 10px;
`

function saveEmployee(e) {
    e.preventDefault();
    console.log("coucou");
}

function Form() {
    return (
        <FormDiv onSubmit={saveEmployee} id="create-employee">
            <FormQuestions>
                <div className="userInfo">
                    <FormElement elementID="first-name" elementName="First Name" elementType="text" />
                    <FormElement elementID="last-name" elementName="Last Name" elementType="text" />
                    <FormElement elementID="date-of-birth" elementName="Date of Birth" elementType="date" />
                    <FormElement elementID="start-date" elementName="Start Date" elementType="date" />
                </div>

                <Fieldset className="address">
                    <legend>Address</legend>

                    <FormElement elementID="street" elementName="Street" elementType="text" />
                    <FormElement elementID="city" elementName="City" elementType="text" />

                    <SelectElement>
                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>
                    </SelectElement>

                    <FormElement elementID="zip-code" elementName="Zip Code" elementType="number" />
                </Fieldset>

                <SelectElement className="userDep">
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </SelectElement>
            </FormQuestions>
            <Button>Save</Button>
            {/* <div id="confirmation" class="modal">Employee Created!</div> */}
        </FormDiv>);
}
export default Form