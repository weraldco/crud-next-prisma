'use client';
import { saveEmployee } from '@/lib/action';
import React from 'react';
import { useFormState } from 'react-dom';

export default function CreateEmployeePage() {
	const [state, formAction] = useFormState(saveEmployee, null);
	return (
		<div className="max-w-md mx-auto mt-5">
			<h1 className="text-3xl center mb-2">Add New Employee</h1>
			<div>
				<form action={formAction}>
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
						/>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							<p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
						</div>
					</div>
					<div className="mb-5">
						<label
							htmlFor="name"
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
						/>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							<p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
						</div>
					</div>
					<div className="mb-5">
						<label
							htmlFor="name"
							className="block font-medium text-gray-600 text-sm"
						>
							Phone number
						</label>
						<input
							type="text"
							name="phone"
							id="phone"
							className="input input-bordered w-full input-primary max-w-xs"
							placeholder="Your name..."
						/>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							<p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
						</div>
					</div>
					<button className="btn btn-primary">Save</button>
				</form>
			</div>
		</div>
	);
}
