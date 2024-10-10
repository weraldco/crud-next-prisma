/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { prisma } from '@/lib/prisma';
import { create } from 'domain';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
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
				phone: validatedFields.data.email,
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
