// import Employee from '@/components/tabledata';
import Search from '@/components/search';
import { Spinner } from '@/components/spinner';
import TableData from '@/components/tabledata';
import Link from 'next/link';
import React, { Suspense } from 'react';
const Home = async ({ searchParams }: { searchParms?: { query?: string } }) => {
	const query = searchParams?.query || '';
	return (
		<div className="w-screen py-20 flex justify-center flex-col items-center">
			<div className="flex items-center justify-between gap-1 mb-5">
				<h1 className="text-4xl font-bold">Employees Database</h1>
			</div>
			<div className="overflow-x-auto">
				<div className="mb-2 w-full text-right">
					<Link className="btn btn-primary" href="/employee/create">
						Create
					</Link>
				</div>
				<Search />
				<Suspense key={query} fallback={<Spinner />}>
					<TableData query={query} />
				</Suspense>
			</div>
		</div>
	);
};

export default Home;
