import { getEmployeeList } from '@/lib/action';
import Link from 'next/link';
import React from 'react';

const Employee = async ({ query }: { query: string }) => {
	const employees = await getEmployeeList(query);
	return (
		<table className="table table-zebra">
			<thead className="text-sm text-gray-700 uppercase bg-gray-50">
				<tr>
					<th className="py-3 px-6">#</th>
					<th className="py-3 px-6">Name</th>
					<th className="py-3 px-6">Email</th>
					<th className="py-3 px-6">Phone Number</th>
					<th className="py-3 px-6">Created at</th>
					<th className="py-3 px-6 text-center">Actions</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((rs, index) => (
					<tr key={rs.id} className="">
						<td>{index + 1}</td>
						<td>{rs.name}</td>
						<td>{rs.email}</td>
						<td>{rs.phone}</td>
						<td>
							{new Date(rs.createdAt).toLocaleDateString('en-EN', {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
							})}
						</td>
						<td>
							<Link
								className="btn btn-primary"
								href={`/employee/edit/${rs.id}`}
							>
								Edit
							</Link>{' '}
							|{' '}
							<Link
								className="btn btn-error"
								href={`/employee/delete/${rs.id}`}
							>
								Delete
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Employee;
