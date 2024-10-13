'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term: string) => {
		console.log(term);
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="relative flex flex-1 mb-5 ml-5 mr-5">
			<input
				type="text"
				className="input input-bordered input-accent w-full"
				placeholder="Search..."
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get(`query`)?.toString()}
				name=""
				id=""
			/>
		</div>
	);
};

export default Search;
