import UpdateForm from '@/components/editform';
import { getEmployeeById } from '@/lib/action';
import { notFound } from 'next/navigation';
import React from 'react';

const EditEmployeeIdPage = async ({ params }: { params: { id: string } }) => {
	const id = params.id;
	const employee = await getEmployeeById(id);
	if (!employee) return notFound();

	return (
		<div className="max-w-md mx-auto mt-5">
			<h1 className="text-2xl text-center mb-2">Update Employee</h1>
			<UpdateForm employee={employee} />
		</div>
	);
};

export default EditEmployeeIdPage;
