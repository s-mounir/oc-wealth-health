import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { useState } from 'react';
import Select from 'react-select';
import Modal_smouni from './Modal_smouni';
import { useSelector, useDispatch } from 'react-redux';

import "react-datepicker/dist/react-datepicker.css";

import FormElement from "./FormElement";
import { statesArray } from '../data/state';
import { departmentArray } from '../data/department';
import { saveEmployee } from '../utils/employeeSlice';

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

function Form() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        startDate: null,
        addressStreet: null,
        addressCity: null,
        addressState: null,
        addressZipCode: null,
        department: null,
    });

    const employee = useSelector((state) => state.newEmployee)
    const dispatch = useDispatch()

    function onChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    function submitForm(e) {
        e.preventDefault();
        dispatch(saveEmployee(user));
        setIsOpen(true);
    }

    return (
        <FormDiv id="create-employee">
            <FormQuestions>
                <div className="userInfo">
                    <FormElement elementID="firstName" elementName="First Name" elementType="text" onChange={onChange} />
                    <FormElement elementID="lastName" elementName="Last Name" elementType="text" onChange={onChange} />
                    <DateElement>
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker id="date-of-birth" dateFormat="dd/MM/yyyy" placeholderText="dd/mm/yyyy" selected={user.dateOfBirth} onChange={(e) => setUser({ ...user, dateOfBirth: Date(e) })} />
                    </DateElement>
                    <DateElement>
                        <label htmlFor="start-date">Start Date</label>
                        <DatePicker id="start-date" name="startDate" dateFormat="dd/MM/yyyy" placeholderText="dd/mm/yyyy" selected={user.startDate} onChange={(e) => setUser({ ...user, startDate: Date(e) })} />
                    </DateElement>
                </div>

                <Fieldset className="address">
                    <legend>Address</legend>

                    <FormElement elementID="addressStreet" elementName="Street" elementType="text" onChange={onChange} />
                    <FormElement elementID="addressCity" elementName="City" elementType="text" onChange={onChange} />

                    <SelectElement>
                        <label htmlFor="state">State</label>
                        <Select options={statesArray} onChange={(e) => setUser({ ...user, addressState: e.value })} />
                    </SelectElement>

                    <FormElement elementID="addressZipCode" elementName="Zip Code" elementType="number" onChange={onChange} />
                </Fieldset>

                <SelectElement className="userDep">
                    <label htmlFor="department">Department</label>
                    <Select options={departmentArray} onChange={(e) => setUser({ ...user, department: e.value })} />
                </SelectElement>
            </FormQuestions>
            <Button onClick={submitForm}>Save</Button>
            <Modal_smouni
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)}
                title=''
                modalButtonText='Close'
                modalButtonClose={() => setIsOpen(false)}>
                <p>Employee Created!</p>
            </Modal_smouni>
        </FormDiv>);
}
export default Form