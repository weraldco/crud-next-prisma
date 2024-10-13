import { deleteEmployee } from '@/lib/action';
import React from 'react';

export const DeleteBtn = ({ id }: { id: string }) => {
	const DeleteEmployeeById = deleteEmployee.bind(null, id);
	return (
		<form action={DeleteEmployeeById}>
			<button className="btn btn-error">Delete</button>
		</form>
	);
};
