import DataTable from 'react-data-table-component';
import { useState,useMemo } from 'react';
import styled from 'styled-components';

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

const FilterDiv = styled.div`
	display: flex;
`;

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
    border-radius: 0 5px 5px 0;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
    border: 2px #5a6f07 solid;
    background-color: #e7ebdc;
    color: #5a6f07;

    &:hover {
		background-color: #5a6f07;
        color: white;
	}
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
	<FilterDiv>
		<TextField
			id="search"
			type="text"
			placeholder="Filter By Name"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</FilterDiv>
);

function Table() {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = employeeMock.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
	);

    const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return (
        <DataTable
			columns={columns}
			data={filteredItems}    // ici changer pour données filtrées
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
		/>);
}
export default Table