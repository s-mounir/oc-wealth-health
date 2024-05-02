import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    addressStreet: null,
    addressCity: null,
    addressState: null,
    addressZipCode: null,
    department: null,
}

export const employeeSlice = createSlice({
    name: 'newEmployee',
    initialState,
    reducers: {
        saveEmployee: (state, {payload}) => {
            state.firstName = payload.firstName
            state.lastName = payload.lastName
            state.dateOfBirth = payload.dateOfBirth
            state.startDate = payload.startDate
            state.addressStreet = payload.addressStreet
            state.addressCity = payload.addressCity
            state.addressState = payload.addressState
            state.addressZipCode = payload.addressZipCode
            state.department = payload.department
        },
    }
})

export const { saveEmployee } = employeeSlice.actions
export default employeeSlice.reducer