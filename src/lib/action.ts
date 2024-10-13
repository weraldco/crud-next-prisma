/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { emit } from 'process';
import { z } from 'zod';

const EmployeeSchema = z.object({
	name: z.string().min(6),
	email: z.string().min(6),
	phone: z.string().min(11),
});

export const saveEmployee = async (prevSate: any, formData: FormData) => {
	const validatedFields = EmployeeSchema.safeParse(
		Object.fromEntries(formData.entries())
	);
	if (!validatedFields.success) {
		return {
			Error: validatedFields.error.flatten().fieldErrors,
		};
	}

	try {
		await prisma.employee.create({
			data: {
				name: validatedFields.data.name,
				email: validatedFields.data.email,
				phone: validatedFields.data.phone,
			},
		});

		console.log('Success');
	} catch (error) {
		return { message: `Failed to create new employee. ${error}` };
	}
	revalidatePath('/employee');
	redirect('/employee');
};

export const getEmployeeList = async (query: string) => {
	try {
		const employees = await prisma.employee.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				phone: true,
				createdAt: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		return employees;
	} catch (error) {
		throw new Error('Failed to fetch employees data.');
	}
};

export const getData = async (query: string) => {
	try {
		const employees = await prisma.employee.findMany({
			where: {
				name: {
					contains: query,
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		return employees;
	} catch (error) {
		throw new Error('Failed to fetch employees data');
	}
};

export const getEmployeeById = async (id: string) => {
	try {
		const employee = await prisma.employee.findUnique({
			where: { id },
		});
		return employee;
	} catch (error) {
		throw new Error('Cannot fetch employee data');
	}
};

export const updateEmployee = async (
	id: string,
	prevSate: any,
	formData: FormData
) => {
	const validatedFields = EmployeeSchema.safeParse(
		Object.fromEntries(formData.entries())
	);

	if (!validatedFields.success) {
		return {
			Error: validatedFields.error.flatten().fieldErrors,
		};
	}
	try {
		await prisma.employee.update({
			where: {
				id,
			},
			data: {
				name: validatedFields.data.name,
				email: validatedFields.data.email,
				phone: validatedFields.data.phone,
			},
		});
		console.log('Successfully updated employee.');
	} catch (error) {
		return { message: 'Failed to update employee' };
	}
	revalidatePath('/employee');
	redirect('/employee');
};

export const deleteEmployee = async (id: string) => {
	try {
		await prisma.employee.delete({
			where: { id },
		});
	} catch (error) {
		return { message: 'Cannot delete employee' };
	}
	revalidatePath('/employee');
};
