interface Props {
	searchQuery: string;
	setSearchQuery: (newVal: string) => void
}

const SearchInput = ({ searchQuery, setSearchQuery }: Props) => (
	<input
		type="text"
		className="text-input"
		placeholder="Search..."
		value={searchQuery}
		onChange={(e) => setSearchQuery(e.target.value)}
	/>
);

export default SearchInput
