import DataTable from 'react-data-table-component';

import { employeeMock } from '../data/employeeMock';

const columns = [
	{
		name: 'First Name',
		selector: row => row.firstName,
        sortable: true,
	},
	{
		name: 'Last Name',
		selector: row => row.lastName,
        sortable: true,
	},
    {
		name: 'Date of birth',
		selector: row => row.dateOfBirth,
        sortable: true,
	},
    {
		name: 'Start date',
		selector: row => row.startDate,
        sortable: true,
	},
    {
		name: 'Street',
		selector: row => row.street,
        sortable: true,
	},
    {
		name: 'City',
		selector: row => row.city,
        sortable: true,
	},
    {
		name: 'State',
		selector: row => row.state,
        sortable: true,
	},
    {
		name: 'ZipCode',
		selector: row => row.zipCode,
        sortable: true,
	},
    {
		name: 'Department',
		selector: row => row.department,
        sortable: true,
	},
];

function Table() {
    return (
        <DataTable
			columns={columns}
			data={employeeMock}
		/>);
}
export default Table