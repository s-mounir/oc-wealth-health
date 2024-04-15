import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import Select from 'react-select'

import "react-datepicker/dist/react-datepicker.css";

import FormElement from "./FormElement";
import { statesArray } from '../data/state';
import { departmentArray } from '../data/department';

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

const DateElement = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    width: 300px;
`

const Fieldset = styled.fieldset`
    border: 2px #5a6f07 solid;
    border-radius: 5px;
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
    const [dateOfBirth, setDateOfBirth] = useState();
    const [startDate, setStartDate] = useState();

    return (
        <FormDiv onSubmit={saveEmployee} id="create-employee">
            <FormQuestions>
                <div className="userInfo">
                    <FormElement elementID="first-name" elementName="First Name" elementType="text" />
                    <FormElement elementID="last-name" elementName="Last Name" elementType="text" />
                    <DateElement>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker id="date-of-birth" dateFormat="dd/MM/yyyy" placeholderText="dd/mm/yyyy" selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />
                    </DateElement>
                    <DateElement>
                        <label htmlFor="start-date">Start Date</label>
                        <DatePicker id="start-date" dateFormat="dd/MM/yyyy" placeholderText="dd/mm/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </DateElement>
                </div>

                <Fieldset className="address">
                    <legend>Address</legend>

                    <FormElement elementID="street" elementName="Street" elementType="text" />
                    <FormElement elementID="city" elementName="City" elementType="text" />

                    <SelectElement>
                        <label htmlFor="state">State</label>
                        <Select options={statesArray} />
                    </SelectElement>

                    <FormElement elementID="zip-code" elementName="Zip Code" elementType="number" />
                </Fieldset>

                <SelectElement className="userDep">
                    <label htmlFor="department">Department</label>
                    <Select options={departmentArray} />
                </SelectElement>
            </FormQuestions>
            <Button>Save</Button>
            {/* <div id="confirmation" class="modal">Employee Created!</div> */}
        </FormDiv>);
}
export default Form