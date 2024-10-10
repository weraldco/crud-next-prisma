import { Employee } from '@prisma/client';
import React from 'react';

const updateEmployeeForm = ({ employee }: { employee: Employee }) => {
	return (
		<div>
			<form action="">
				{/* Fullname */}
				<div className="mb-5">
					<label
						htmlFor="name"
						className="block font-medium text-gray-600 text-sm"
					>
						Fullname
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="input input-bordered w-full input-primary max-w-xs"
						placeholder="Your name..."
						defaultValue={employee.name}
					/>
					{/* <div id="name-error" aria-live="polite" aria-atomic="true">
						<p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
					</div> */}
				</div>

				{/* Email */}
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block font-medium text-gray-600 text-sm"
					>
						Email
					</label>
					<input
						type="text"
						name="email"
						id="email"
						className="input input-bordered w-full input-primary max-w-xs"
						placeholder="Your email..."
						defaultValue={employee.email}
					/>
					{/* <div id="name-error" aria-live="polite" aria-atomic="true">
						<p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
					</div> */}
				</div>

				{/* Phone */}
				<div className="mb-5">
					<label
						htmlFor="phone"
						className="block font-medium text-gray-600 text-sm"
					>
						Phone
					</label>
					<input
						type="text"
						name="phone"
						id="phone"
						className="input input-bordered w-full input-primary max-w-xs"
						placeholder="Your phone..."
						defaultValue={employee.phone}
					/>
					{/* <div id="name-error" aria-live="polite" aria-atomic="true">
						<p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
					</div> */}
				</div>
				<button className="btn btn-primary">Update</button>
			</form>
		</div>
	);
};

export default updateEmployeeForm;
